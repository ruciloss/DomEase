/**
 * Sets (replaces) the text content of the specified DOM element.
 *
 * @param {HTMLElement} el - The target element.
 * @param {string} textContent - The text content to set.
 * @returns {void}
 */
export function setTextContent(el, textContent) {
    try {
        el.textContent = textContent;
    } catch (error) {
        console.error('Failed to set text content for element.', error);
    }
}

/**
 * Appends text content to the end of the specified DOM element's existing content.
 *
 * @param {HTMLElement} el - The target element.
 * @param {string} textContent - The text content to append.
 * @returns {void}
 */
export function appendTextContent(el, textContent) {
    try {
        el.textContent += textContent;
    } catch (error) {
        console.error('Failed to append text content to element.', error);
    }
}

/**
 * Prepends text content to the beginning of the specified DOM element's existing content.
 *
 * @param {HTMLElement} el - The target element.
 * @param {string} textContent - The text content to prepend.
 * @returns {void}
 */
export function prependTextContent(el, textContent) {
    try {
        el.textContent = textContent + el.textContent;
    } catch (error) {
        console.error('Failed to prepend text content to element.', error);
    }
}

/**
 * Clears all text content from the specified DOM element.
 *
 * @param {HTMLElement} el - The target element.
 * @returns {void}
 */
export function clearTextContent(el) {
    try {
        el.textContent = '';
    } catch (error) {
        console.error('Failed to clear text content of element.', error);
    }
}
