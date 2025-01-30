/**
 * Append an ID to the specified DOM element.
 *
 * @param {HTMLElement} el - The target DOM element.
 * @param {string} id - The ID to set.
 * @returns {void}
 */
export function addID(el, id) {
    try {
        el.id = id;
    } catch (error) {
        console.error('Failed to add ID to element.', error);
    }
}

/**
 * Remove the ID from a DOM element.
 *
 * @param {HTMLElement} el - The target DOM element.
 * @returns {void}
 */
export function removeID(el) {
    try {
        el.id = '';
    } catch (error) {
        console.error('Failed to remove ID from element.', error);
    }
}

/**
 * Toggle the ID on the specified DOM element. If the element already has the ID, it will be removed; otherwise, it will be set.
 *
 * @param {HTMLElement} el - The target element.
 * @param {string} id - The ID to toggle.
 * @returns {void}
 */
export function toggleID(el, id) {
    try {
        el.id = el.id === id ? '' : id;
    } catch (error) {
        console.error('Failed to toggle ID on element.', error);
    }
}

/**
 * Check if the HTML element has the specified ID.
 * 
 * @param {HTMLElement} el - The target element.
 * @param {string} id - The ID to check.
 * @returns {boolean} - True if the element contains the specified ID.
 */
export function hasID(el, id) {
    try {
        return el.id === id;
    } catch (error) {
        console.error('Failed to check ID on element.', error);
        return false;
    }
}

/**
 * Generates a universally unique identifier (UUID) in version 4 format.
 *
 * @returns {string} A unique string identifier prefixed with `_` or an empty string if generation fails.
 */
export function uuidv4() {
    try {
        const uuid = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, function(c) {
            return (c ^ (window.crypto || window.msCrypto).getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
        });
        console.log('Generated UUID:', uuid);
        return `_${uuid}`;
    } catch (error) {
        console.error('Failed to generate UUID:', error); 
        return '';  
    }
}
