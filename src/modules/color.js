/**
 * Generates a random color in hex format.
 *
 * @returns {string} - The random hex color string.
 */
export function randomColor() {
    try {
        return `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;
    } catch (error) {
        console.error('Failed to generate a random color.', error);
        return '#000000'; // Default fallback color
    }
}

/**
 * Generates a random color in RGB format.
 *
 * @returns {string} - The random RGB color string.
 */
export function randomRgbColor() {
    try {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    } catch (error) {
        console.error('Failed to generate a random RGB color.', error);
        return 'rgb(0, 0, 0)'; // Default fallback color
    }
}

/**
 * Converts a hex color to an RGB color.
 *
 * @param {string} hex - The hex color string (e.g., "#ffffff").
 * @returns {string | null} - The RGB color string (e.g., "rgb(255, 255, 255)") or null if invalid.
 */
export function hexToRgb(hex) {
    try {
        const cleanHex = hex.replace('#', '');
        if (cleanHex.length !== 6) throw new Error('Invalid hex color.');
        const bigint = parseInt(cleanHex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `rgb(${r}, ${g}, ${b})`;
    } catch (error) {
        console.error('Failed to convert hex to RGB.', error);
        return null;
    }
}

/**
 * Converts an RGB color to a hex color.
 *
 * @param {number} r - Red value (0-255).
 * @param {number} g - Green value (0-255).
 * @param {number} b - Blue value (0-255).
 * @returns {string} - The hex color string (e.g., "#ffffff").
 */
export function rgbToHex(r, g, b) {
    try {
        if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
            throw new Error('RGB values must be between 0 and 255.');
        }
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    } catch (error) {
        console.error('Failed to convert RGB to hex.', error);
        return '#000000'; // Default fallback color
    }
}

/**
 * Generates a random color that is either light or dark.
 *
 * @param {boolean} isLight - Whether to generate a light color (true) or dark color (false).
 * @returns {string} - The random hex color string.
 */
export function randomColorByBrightness(isLight) {
    try {
        const base = isLight ? 200 : 50;
        const r = Math.floor(Math.random() * (256 - base) + base);
        const g = Math.floor(Math.random() * (256 - base) + base);
        const b = Math.floor(Math.random() * (256 - base) + base);
        return rgbToHex(r, g, b);
    } catch (error) {
        console.error('Failed to generate a random color by brightness.', error);
        return '#000000'; // Default fallback color
    }
}

/**
 * Adds transparency (alpha) to a hex color.
 *
 * @param {string} hex - The hex color string (e.g., "#ffffff").
 * @param {number} alpha - The alpha value (0 to 1).
 * @returns {string} - The RGBA color string (e.g., "rgba(255, 255, 255, 0.5)").
 */
export function hexToRgba(hex, alpha) {
    try {
        const cleanHex = hex.replace('#', '');
        if (cleanHex.length !== 6) throw new Error('Invalid hex color.');
        const bigint = parseInt(cleanHex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        if (alpha < 0 || alpha > 1) throw new Error('Alpha must be between 0 and 1.');
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } catch (error) {
        console.error('Failed to convert hex to RGBA.', error);
        return 'rgba(0, 0, 0, 1)'; // Default fallback color
    }
}
