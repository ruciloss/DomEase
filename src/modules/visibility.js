/**
 * Hides an HTML element by setting its display to "none".
 *
 * @param {Element|string} element - The target element or its CSS selector.
 * @returns {void}
 */
export function hide(element) {
    try {
        const el = typeof element === "string" ? document.querySelector(element) : element;
        if (el) {
            el.style.display = "none";
        } else {
            console.warn(`Element ${element} not found.`);
        }
    } catch (error) {
        console.error(`Error hiding element: ${error.message}`);
    }
}

/**
 * Shows an HTML element by removing "display: none" or setting display to its default value.
 *
 * @param {Element|string} element - The target element or its CSS selector.
 * @returns {void}
 */
export function show(element) {
    try {
        const el = typeof element === "string" ? document.querySelector(element) : element;
        if (el) {
            el.style.display = ""; // Resetuje display na výchozí hodnotu
        } else {
            console.warn(`Element ${element} not found.`);
        }
    } catch (error) {
        console.error(`Error showing element: ${error.message}`);
    }
}
