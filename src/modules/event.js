/**
 * Add an event listener to a DOM object (cross-browser function).
 *
 * @param {Element} elem - The DOM element to which the event listener will be added.
 * @param {string} event - The name of the event to listen for (e.g., 'click', 'keydown').
 * @param {function} fn - The callback function to execute when the event is triggered.
 * @param {boolean} [isPassive=false] - Indicates whether the event listener should be passive.
 * @returns {void}
 */
export function addEvent(elem, event, fn, isPassive) {
    try {
        elem.addEventListener(event, fn, isPassive === true ? { passive: true } : false);
    } catch (error) {
        console.error('Failed to add event listener to element.', error);
    }
}

/**
 * Adds an event listener to multiple elements.
 *
 * @param {NodeList|HTMLElement[]} elements - List of elements.
 * @param {string} event - The event type to listen for.
 * @param {function} handler - The event handler function.
 * @returns {void}
 */
export function addEvents(elements, event, handler) {
    try {
        elements.forEach(el => el.addEventListener(event, handler));
    } catch (error) {
        console.error('Failed to add event listeners to elements.', error);
    }
}
