/**
 * Do not return anything, modify nums in-place instead.
 *
 * Time - O(n^2) where n = nums.length
 *   Each splice shifts elements; up to n zeros can each trigger two O(n) splices.
 * Space - O(1) auxiliary (splice may use internal temporaries)
 */
function moveZeroes(nums: number[]): void {
    let i = 0;
    let zerosMoved = 0;

    while ((i + zerosMoved) < nums.length) {
        if (nums[i] === 0) {
            const value = nums.splice(i, 1)[0];
            nums.splice(nums.length, 0, value);
            zerosMoved++;
        } else {
            i++;
        }
    }
}
