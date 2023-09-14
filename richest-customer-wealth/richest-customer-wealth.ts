function maximumWealth(accounts: number[][]): number {

    return accounts.reduce((acc, next) => {
        let total = 0;

        for (const val of next) {
            total += val;
        }

        if (total > acc) {
            acc = total;
        }

        return acc;
    }, 0)
};