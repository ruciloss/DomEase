/**
 * Universal selector function to query a single element.
 * 
 * @param {string} selector - The CSS selector to query (e.g., '#id', '.class', 'div', 'section > .item').
 * @param {HTMLElement|Document} [parent=document] - Optional parent element to scope the query.
 * @returns {HTMLElement|null} - The first matching element or null if not found.
 */
export function $(selector, parent = document) {
    try {
        return parent.querySelector(selector);
    } catch (error) {
        console.error('Failed to query selector.', error);
        return null;
    }
}

/**
 * Select an element by its ID.
 * 
 * @param {string} id - The ID of the element to select (e.g., 'header', 'main', 'footer').
 * @param {HTMLElement|Document} [parent=document] - Optional parent element to scope the query.
 * @returns {HTMLElement|null} - The matching element or null if not found.
 */
export function $$(id, parent = document) {
    try {
        return parent.getElementById(id);
    } catch (error) {
        console.error('Failed to query element by ID.', error);
        return null;
    }
}

/**
 * Select all matching elements using a CSS selector.
 * 
 * @param {string} selector - The CSS selector (e.g., '#id', '.class', 'div > span').
 * @param {HTMLElement|Document} [parent=document] - Optional parent element to scope the query.
 * @returns {NodeList} - A NodeList of all matching elements.
 */
export function $$$(selector, parent = document) {
    try {
        return parent.querySelectorAll(selector);
    } catch (error) {
        console.error('Failed to query all selectors.', error);
        return [];
    }
}
