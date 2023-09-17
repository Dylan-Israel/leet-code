function numberOfSteps(num: number): number {
    let steps = 0;

    while (num > 0) {
        if (num % 2 === 0) {
            num = num / 2;

            steps++;
        } else if (num % 2 === 1) {
            num--;
            steps++;
        }
    }

    return steps;
};