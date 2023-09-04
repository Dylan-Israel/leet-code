/**
 *  Time - O(n^2)
 *  Brute Force
 *  https://leetcode.com/problems/two-sum/description/ 
 */

function twoSum(nums: number[], target: number): number[] {
    let values: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) === target) {
                values = [i, j];
                break;
            }
        }
    }

    return values;
};