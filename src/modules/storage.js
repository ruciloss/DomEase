/**
 * Retrieves a value from localStorage.
 *
 * @param {string} key - The key in localStorage.
 * @returns {any} - The parsed value from localStorage or `null` if not found.
 */
export function getStorage(key) {
    try {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;
    } catch (error) {
        console.error(`Failed to retrieve value from localStorage with key: ${key}`, error);
        return null;
    }
}

/**
 * Sets a value in localStorage.
 *
 * @param {string} key - The key in localStorage.
 * @param {any} value - The value to store. It will be stringified.
 * @returns {void}
 */
export function setStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Failed to set value in localStorage with key: ${key}`, error);
    }
}

/**
 * Removes a key from localStorage.
 *
 * @param {string} key - The key to remove from localStorage.
 * @returns {void}
 */
export function removeStorage(key) {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error(`Failed to remove key from localStorage: ${key}`, error);
    }
}

/**
 * Clears all keys from localStorage.
 *
 * @returns {void}
 */
export function clearStorage() {
    try {
        localStorage.clear();
    } catch (error) {
        console.error('Failed to clear localStorage.', error);
    }
}
