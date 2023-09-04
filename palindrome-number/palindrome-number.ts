/**
 *  Time - O(n)
 *  https://leetcode.com/problems/palindrome-number/
 */

function isPalindrome(x: number): boolean {
    const reverse = x.toString().split('').reverse().join('');

    return x.toString() === reverse;
};