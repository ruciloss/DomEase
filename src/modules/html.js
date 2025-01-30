/**
 * Sets (replaces) the HTML content of the specified DOM element.
 *
 * @param {HTMLElement} el - The target element.
 * @param {string} htmlContent - The HTML content to set.
 * @returns {void}
 */
export function setHTMLContent(el, htmlContent) {
    try {
        el.innerHTML = htmlContent;
    } catch (error) {
        console.error('Failed to set HTML content for element.', error);
    }
}

/**
 * Appends HTML content to the end of the specified DOM element's existing content.
 *
 * @param {HTMLElement} el - The target element.
 * @param {string} htmlContent - The HTML content to append.
 * @returns {void}
 */
export function appendHTMLContent(el, htmlContent) {
    try {
        el.innerHTML += htmlContent;
    } catch (error) {
        console.error('Failed to append HTML content to element.', error);
    }
}

/**
 * Prepends HTML content to the beginning of the specified DOM element's existing content.
 *
 * @param {HTMLElement} el - The target element.
 * @param {string} htmlContent - The HTML content to prepend.
 * @returns {void}
 */
export function prependHTMLContent(el, htmlContent) {
    try {
        el.innerHTML = htmlContent + el.innerHTML;
    } catch (error) {
        console.error('Failed to prepend HTML content to element.', error);
    }
}

/**
 * Clears all HTML content from the specified DOM element.
 *
 * @param {HTMLElement} el - The target element.
 * @returns {void}
 */
export function clearHTMLContent(el) {
    try {
        el.innerHTML = '';
    } catch (error) {
        console.error('Failed to clear HTML content of element.', error);
    }
}
