function fizzBuzz(n: number): string[] {
    const values: string[] = [];

    for (let i = 1; i <= n; i++) {
        const isMod3 = (i % 3 === 0);
        const isMod5 = (i % 5 === 0);

        if (isMod3 && isMod5) {
            values.push('FizzBuzz')
        } else if (isMod5) {
            values.push('Buzz')
        } else if (isMod3) {
            values.push('Fizz')
        } else {
            values.push(`${i}`);
        }
    }

    return values;
};