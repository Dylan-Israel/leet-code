---
name: check-optimal-solution
description: >-
  Analyzes LeetCode solution time/space complexity, compares to the optimal
  approach for the problem, and adds a secondary optimal implementation when
  the current one is not optimal. Use when the user asks to check if a
  solution is optimal, review complexity, improve time/space, or mentions
  this skill.
---

# Check Optimal Solution

## When to run

Apply when the user wants to verify whether their solution is **asymptotically optimal** (best typical time and space for the problem), not just correct.

## Repo layout

| Location | Solution file |
|----------|----------------|
| `leet-code-75/<problem-slug>/` | `solution.ts` |
| Root problem folders (e.g. `two-sum/`) | `<problem-slug>.ts` |

Read the problem's `README.md` (if present) for constraints before analyzing.

## Workflow

1. **Locate the solution** in the active problem folder (`solution.ts` or `<slug>.ts`).
2. **Analyze the current approach**:
   - State time and space with variables from constraints (e.g. `m`, `n`, array length `n`).
   - Note hidden costs (e.g. `slice`, `concat`, `shift`, sorting, extra copies).
3. **Determine the optimal target** for this problem class (e.g. two pointers, hash map, single pass, heap size `k`).
4. **Compare** current vs optimal asymptotic complexity:
   - If already optimal → update or confirm the header comment; tell the user briefly why it is optimal. **Do not** add a duplicate implementation.
   - If not optimal → keep the original function **unchanged** and add a secondary optimal solution (step 5).
5. **Add the secondary solution** in the **same file**, below the original, separated by a blank line and this banner:

   ```ts
   // --- Optimal: Time O(...), Space O(...) ---
   ```

   - Name: `{originalFunctionName}Optimal` (e.g. `mergeAlternately` → `mergeAlternatelyOptimal`).
   - Include a block comment with Time and Space lines (match style of existing header on the primary solution).
   - Implementation must meet the stated optimal bounds; prefer readable code over micro-optimizations.
6. **Summarize for the user** in plain language:
   - Primary: current complexities and main bottleneck (if any).
   - Optimal: target complexities and what changed (e.g. indices instead of `slice`).
   - Whether both are worth keeping (learning vs interview).

## Rules

- **Never delete or rewrite** the user's primary solution unless they explicitly ask to replace it.
- **Never** claim optimality without comparing to a standard optimal approach for the problem.
- If multiple optimal trade-offs exist (e.g. time vs space), pick the usual interview default and mention the trade-off in the summary.
- Match existing TypeScript style in the file (semicolons, `function` vs arrow, trailing `};` if used elsewhere in that file).
- Do not add tests unless the user asks.

## Header comment format

Primary (existing) and optimal (new) both use:

```ts
/**
 * Time - O(...)
 * Space - O(...)
 */
```

Add a short second line under Time/Space only when it clarifies a non-obvious cost (as in `merge-strings-alternatively/solution.ts`).

## Example outcome (non-optimal primary)

**Before:** `mergeAlternately` uses `concat` + `slice(1)` → O((m+n)²) time.

**After:** Same file keeps `mergeAlternately`; add `mergeAlternatelyOptimal` with two indices (or one pass + array `join`) → O(m+n) time, O(m+n) space for output.

## Invocation

User can say: "check if this solution is optimal", "use check-optimal-solution", or "@check-optimal-solution" on a problem folder.
