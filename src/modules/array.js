/**
 * Returns the index of the element in the array, or -1 if not found.
 * @param {Array} arr - The array to search.
 * @param {any} value - The value to find in the array.
 * @returns {number} - The index of the value, or -1 if not found.
 */
export function inArray(arr, value) {
    try {
        return arr.indexOf(value);
    } catch (error) {
        console.error('Failed to find index in array.', error);
        return -1;
    }
}

/**
 * Removes the first occurrence of a value from an array.
 * @param {Array} arr - The array to modify.
 * @param {any} value - The value to remove.
 * @returns {Array} - The modified array.
 */
export function removeArray(arr, value) {
    try {
        const index = arr.indexOf(value);
        if (index > -1) arr.splice(index, 1);
        return arr;
    } catch (error) {
        console.error('Failed to remove value from array.', error);
        return arr;
    }
}

/**
 * Checks if an array contains all elements of another array.
 * @param {Array} arr - The main array.
 * @param {Array} values - The array of values to check for.
 * @returns {boolean} - True if all elements are found, false otherwise.
 */
export function containsAllArray(arr, values) {
    try {
        return values.every(value => arr.includes(value));
    } catch (error) {
        console.error('Failed to check for array contents.', error);
        return false;
    }
}

/**
 * Shuffles an array into a random order.
 * @param {Array} arr - The array to shuffle.
 * @returns {Array} - The shuffled array.
 */
export function shuffleArray(arr) {
    try {
        return arr.sort(() => Math.random() - 0.5);
    } catch (error) {
        console.error('Failed to shuffle array.', error);
        return arr;
    }
}

/**
 * Removes duplicates from an array.
 * @param {Array} arr - The array to process.
 * @returns {Array} - A new array with duplicates removed.
 */
export function uniqueArray(arr) {
    try {
        return [...new Set(arr)];
    } catch (error) {
        console.error('Failed to remove duplicates from array.', error);
        return arr;
    }
}
