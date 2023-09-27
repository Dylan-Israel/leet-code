function sortArrayByParity(nums: number[]): number[] {
    const parity = nums.reduce((acc: { evens: number[], odds: number[] }, value) => {
        if (value % 2 === 0) {
            acc.evens.push(value);
        } else {
            acc.odds.push(value);
        }

        return acc;
    }, {
        evens: [],
        odds: [],
    })

    return parity.evens.concat(parity.odds);
};