/**
 * Logs debug information to the console if running in a development environment.
 *
 * @param {string} prefix - The prefix to include in the log message (e.g., module name or version).
 * @param {string} print - The main message to print in the console.
 * @param {any} [details] - Additional details or data to include in the log. Default is undefined.
 * @param {boolean} [error=false] - Indicates whether this is an error log. Default is `false`.
 */
export function debug(prefix, print, details, error = false) {
    const ENABLE_LOGS = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

    if (ENABLE_LOGS) {
        try {
            if (error) {
                console.error(`${prefix} ${print}`, details || '');
            } else {
                console.log(`${prefix} ${print}`, details || '');
            }
        } catch (e) {
            console.warn(`${prefix} Failed to log debug message.`, e);
        }
    }
}
