function heightChecker(heights: number[]): number {
    const heightsOriginal = [...heights];
    let count = 0;
    heights.sort((a, b) => a - b);

    for (let i = 0; i < heightsOriginal.length; i++) {
        if (heightsOriginal[i] !== heights[i]) {
            count++;
        }
    }

    return count;
};