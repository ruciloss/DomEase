/**
 * Set a single attribute on the specified DOM element.
 *
 * @param {HTMLElement} el - The target element.
 * @param {string} attribute - The name of the attribute to set.
 * @param {string} value - The value of the attribute.
 * @returns {void}
 */
export function setAttribute(el, attribute, value) {
    try {
        el.setAttribute(attribute, value);
    } catch (error) {
        console.error('Failed to set attribute on element.', error);
    }
}

/**
 * Remove a specific attribute from the specified DOM element.
 *
 * @param {HTMLElement} el - The target element.
 * @param {string} attribute - The name of the attribute to remove.
 * @returns {void}
 */
export function removeAttribute(el, attribute) {
    try {
        el.removeAttribute(attribute);
    } catch (error) {
        console.error('Failed to remove attribute from element.', error);
    }
}

/**
 * Check if the specified attribute exists on the DOM element.
 * 
 * @param {HTMLElement} el - The target element.
 * @param {string} attribute - The name of the attribute to check.
 * @returns {boolean} - Returns true if the attribute exists, false otherwise.
 */
export function hasAttribute(el, attribute) {
    try {
        return el.hasAttribute(attribute);
    } catch (error) {
        console.error('Failed to check attribute on element.', error);
        return false;
    }
}
