function sortedSquares(nums: number[]): number[] {
    const squaredNums = nums.map((value) => value ** 2);

    squaredNums.sort((a, b) => {
        return a - b;
    })

    return squaredNums;
};