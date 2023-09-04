function finalValueAfterOperations(operations: string[]): number {
    const negatives = operations.filter((value) => (value === '--X') || value === 'X--');
    const additions = operations.filter((value) => value === '++X' || value === 'X++');

    return additions.length - negatives.length;
};