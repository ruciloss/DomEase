/**
 * Creates a new HTML element of the specified type.
 *
 * @param {string} type - The type of the HTML element to create (e.g., 'div', 'button', etc.).
 * @returns {HTMLElement|null} The created HTML element, or `null` if an error occurs during creation.
 */
export function createNode(type) {
    try {
        const el = document.createElement(type);
        if (type === 'button') {
            el.setAttribute('type', 'button');
        }
        return el;
    } catch (error) {
        console.error('Failed to create HTML element.', error);
        return null;
    }
}

/**
 * Removes the specified DOM element.
 *
 * @param {HTMLElement} el - The element to remove.
 * @returns {void}
 */
export function removeNode(el) {
    try {
        if (el && el.parentNode) {
            el.parentNode.removeChild(el);
        } else {
            console.warn('Element is not in the DOM or is invalid.');
        }
    } catch (error) {
        console.error('Failed to remove element.', error);
    }
}

/**
 * Replaces the target DOM element with a new one.
 *
 * @param {HTMLElement} oldEl - The element to be replaced.
 * @param {HTMLElement} newEl - The new element to replace the old one.
 * @returns {void}
 */
export function replaceNode(oldEl, newEl) {
    try {
        if (oldEl && oldEl.parentNode) {
            oldEl.parentNode.replaceChild(newEl, oldEl);
        } else {
            console.warn('Element is not in the DOM or is invalid.');
        }
    } catch (error) {
        console.error('Failed to replace element.', error);
    }
}

/**
 * Clears all child elements of the specified DOM element.
 *
 * @param {HTMLElement} el - The element to clear.
 * @returns {void}
 */
export function clearNode(el) {
    try {
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    } catch (error) {
        console.error('Failed to clear element.', error);
    }
}

/**
 * Clones the specified DOM element.
 *
 * @param {HTMLElement} el - The element to clone.
 * @param {boolean} [deep=true] - Whether to include child nodes.
 * @returns {HTMLElement|null} - The cloned element or null if cloning fails.
 */
export function cloneNode(el, deep = true) {
    try {
        return el.cloneNode(deep);
    } catch (error) {
        console.error('Failed to clone element.', error);
        return null;
    }
}

/**
 * Appends a new child element to the target element.
 *
 * @param {HTMLElement} parent - The parent element.
 * @param {HTMLElement} child - The child element to append.
 * @returns {void}
 */
export function appendNode(parent, child) {
    try {
        parent.appendChild(child);
    } catch (error) {
        console.error('Failed to append child to element.', error);
    }
}

/**
 * Prepends a new child element to the target element.
 *
 * @param {HTMLElement} parent - The parent element.
 * @param {HTMLElement} child - The child element to prepend.
 * @returns {void}
 */
export function prependNode(parent, child) {
    try {
        parent.insertBefore(child, parent.firstChild);
    } catch (error) {
        console.error('Failed to prepend child to element.', error);
    }
}
