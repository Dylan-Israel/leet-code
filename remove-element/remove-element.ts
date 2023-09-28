function removeElement(nums: number[], val: number): number {
    while (nums.indexOf(val) !== -1) {
        const index = nums.indexOf(val);
        nums.splice(index, 1);
    }

    return nums.length;
};