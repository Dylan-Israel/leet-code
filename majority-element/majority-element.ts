function majorityElement(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0];
    }

    const size = nums.length / 2;
    const map: Record<number, number> = {};
    let answer = 0;

    for (const num of nums) {
        if (map[num]) {
            map[num]++;

            if (map[num] >= size) {
                answer = num;
                break;
            }

        } else {
            map[num] = 1;
        }
    }

    return answer;
};