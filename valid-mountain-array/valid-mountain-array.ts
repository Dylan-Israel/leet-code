function validMountainArray(arr: number[]): boolean {
    // too short need 3 values to make a mountain
    if (arr.length <= 2) {
        return false;
    }

    let count = 0;

    while (arr[count] < arr[count + 1] && count < arr.length) {
        count++;
    }

    if (count === 0 || count + 1 === arr.length) {
        return false;
    }

    while (arr[count] > arr[count + 1] && count < arr.length) {
        count++;
    }

    return count + 1 === arr.length;
};