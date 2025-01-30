/**
 * Retrieves the value of a cookie by name.
 *
 * @param {string} name - The name of the cookie.
 * @returns {string|null} - The value of the cookie, or `null` if not found.
 */
export function getCookie(name) {
    try {
        const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
            const [key, value] = cookie.split('=');
            acc[key] = decodeURIComponent(value);
            return acc;
        }, {});
        const result = cookies[name] || null;
        console.log(`Retrieved cookie: ${name}`, result);
        return result;
    } catch (error) {
        console.error('Failed to retrieve cookie.', error);
        return null;
    }
}

/**
 * Sets a cookie with the given name, value, and options.
 *
 * @param {string} name - The name of the cookie.
 * @param {string} value - The value of the cookie.
 * @param {Object} [options] - Optional settings for the cookie.
 * @param {number} [options.expiresDays] - Expiration in days.
 * @param {string} [options.path='/'] - Path for the cookie.
 * @param {boolean} [options.secure=false] - Whether to mark the cookie as secure.
 * @param {boolean} [options.sameSite='Lax'] - SameSite policy (e.g., 'Lax', 'Strict', or 'None').
 * @returns {void}
 */
export function setCookie(name, value, options = {}) {
    try {
        let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

        if (options.expiresDays) {
            const date = new Date();
            date.setDate(date.getDate() + options.expiresDays);
            cookieString += `; expires=${date.toUTCString()}`;
        }

        if (options.path) {
            cookieString += `; path=${options.path}`;
        }

        if (options.secure) {
            cookieString += '; secure';
        }

        if (options.sameSite) {
            cookieString += `; samesite=${options.sameSite}`;
        }

        document.cookie = cookieString;
        console.log(`Set cookie: ${name}`, cookieString);
    } catch (error) {
        console.error('Failed to set cookie.', error);
    }
}

/**
 * Removes a cookie by name.
 *
 * @param {string} name - The name of the cookie to remove.
 * @param {string} [path='/'] - Path where the cookie was set.
 * @returns {void}
 */
export function removeCookie(name, path = '/') {
    try {
        setCookie(name, '', { expiresDays: -1, path });
        console.log(`Removed cookie: ${name}`);
    } catch (error) {
        console.error('Failed to remove cookie.', error);
    }
}
