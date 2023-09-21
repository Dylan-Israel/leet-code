function findMaxConsecutiveOnes(nums: number[]): number {
    let count = 0;
    let current = 0;

    for (const num of nums) {
        if (num === 1) {
            current++;
        } else {
            current = 0;
        }

        if (current > count) {
            count = current;
        }
    }

    return count;
};