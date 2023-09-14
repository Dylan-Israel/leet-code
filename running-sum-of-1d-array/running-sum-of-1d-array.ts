function runningSum(nums: number[]): number[] {
    const countNums = [nums[0]];
    let currentCount = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentCount += nums[i];
        countNums.push(currentCount);
    }

    return countNums;
};