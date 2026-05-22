/**
 * Time - O((m + n)^2) where m = word1.length, n = word2.length
 *   Each concat copies the growing result string; each slice(1) copies the remainder of word1/word2.
 * Space - O(m + n) for the merged output (plus temporary strings from concat/slice per iteration)
 */

function mergeAlternately(word1: string, word2: string): string {
    let alternativeWord = '';

    while (word1.length > 0 || word2.length > 0) {
        if (word1.length) {
            alternativeWord = alternativeWord.concat(word1[0]);
            word1 = word1.slice(1);
        }

        if (word2.length) {
            alternativeWord = alternativeWord.concat(word2[0]);
            word2 = word2.slice(1);
        }
    }

    return alternativeWord;
}

// --- Optimal: Time O(m + n), Space O(m + n) ---

/**
 * Time - O(m + n) where m = word1.length, n = word2.length
 * Space - O(m + n) for the merged output (O(1) auxiliary beyond the result)
 */
function mergeAlternatelyOptimal(word1: string, word2: string): string {
    const merged: string[] = [];
    let i = 0;
    let j = 0;

    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            merged.push(word1[i]);
            i++;
        }
        if (j < word2.length) {
            merged.push(word2[j]);
            j++;
        }
    }

    return merged.join('');
}
