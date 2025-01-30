/**
 * Get the current client's browser language.
 *
 * @returns {string} The detected browser language in lowercase (e.g., "en", "fr").
 */
export function getBrowserLang() {
    try {
        let browserLang = navigator.language || navigator.browserLanguage;
        if (browserLang.length > 2) {
            browserLang = browserLang.substring(0, 2);
        }
        console.log(`Detected browser language: '${browserLang}'`);
        return browserLang.toLowerCase();
    } catch (error) {
        console.error('Failed to detect browser language.', error);
        return 'en';
    }
}

/**
 * Detect the current system theme (light or dark).
 *
 * @returns {string} The detected theme, either "light" or "dark".
 */
export function getSystemTheme() {
    try {
        const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = isDarkMode ? 'dark' : 'light';
        console.log(`Detected system theme: '${theme}'`);
        return theme;
    } catch (error) {
        console.error('Failed to detect system theme.', error);
        return 'light'; 
    }
}
