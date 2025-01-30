/**
 * Append classes to the specified DOM element.
 *
 * @param {HTMLElement} elem - The target DOM element.
 * @param {...string} classNames - List of class names to add.
 * @returns {void}
 */
export function addClass(el, ...classNames) {
    try {
        el.classList.add(...classNames);
    } catch (error) {
        console.error('Failed to add classes to element.', error);
    }
}

/**
 * Remove specified classes from a DOM element.
 *
 * @param {HTMLElement} el - The target DOM element.
 * @param {...string} classNames - List of class names to remove.
 * @returns {void}
 */
export function removeClass(el, ...classNames) {
    try {
        el.classList.remove(...classNames);
    } catch (error) {
        console.error('Failed to remove classes from element.', error);
    }
}

/**
 * Toggles a class on the specified DOM element.
 *
 * @param {HTMLElement} el - The target element.
 * @param {string} className - The class to toggle.
 * @param {boolean} [force] - Optional. If true, adds the class; if false, removes it.
 * @returns {void}
 */
export function toggleClass(el, className, force) {
    try {
        if (typeof force === 'boolean') {
            el.classList.toggle(className, force);
        } else {
            el.classList.toggle(className);
        }
    } catch (error) {
        console.error('Failed to toggle class on element.', error);
    }
}

/**
 * Check if the HTML element has all specified classes.
 * 
 * @param {HTMLElement} el - The target element.
 * @param {...string} classNames - List of class names to check.
 * @returns {boolean} - True if the element contains all specified classes.
 */
export function hasClass(el, ...classNames) {
    try {
        return classNames.every(className => el.classList.contains(className));
    } catch (error) {
        console.error('Failed to check classes on element.', error);
        return false;
    }
}
