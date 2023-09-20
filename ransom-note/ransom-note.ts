function canConstruct(ransomNote: string, magazine: string): boolean {
    const noteMap = ransomNote.split('').reduce((acc, value) => {
        if (acc[value]) {
            acc[value]++;
        } else {
            acc[value] = 1;
        }

        return acc;
    }, {});
    const magazineMap = magazine.split('').reduce((acc, value) => {
        if (acc[value]) {
            acc[value]++;
        } else {
            acc[value] = 1;
        }

        return acc;
    }, {})

    for (const key in noteMap) {
        if (magazineMap[key] === undefined) {
            return false;
        }

        if (magazineMap[key] < noteMap[key]) {
            return false;
        }
    }

    return true;
};