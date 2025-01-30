/**
 * Dynamically adds a stylesheet to the document.
 *
 * @param {string} file - The URL of the stylesheet file to add.
 * @returns {void}
 */
export function addStyle(file) {
    try {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = file;

        document.head.appendChild(link);
        console.log(`Stylesheet ${link.href} has been added.`);
    } catch (error) {
        console.error('Failed to add the stylesheet.', error);
    }
}

/**
 * Dynamically adds a script to the document.
 *
 * @param {string} file - The URL of the script file to add.
 * @param {boolean} [async=true] - Whether the script should be loaded asynchronously. Default is `true`.
 * @returns {void}
 */
export function addScript(file, async = true) {
    try {
        const script = document.createElement("script");
        script.src = file;
        script.async = async;

        document.head.appendChild(script);
        console.log(`Script ${script.src} has been added.`);
    } catch (error) {
        console.error('Failed to add the script.', error);
    }
}

/**
 * Dynamically removes a stylesheet from the document.
 *
 * @param {string} file - The URL of the stylesheet file to remove.
 * @returns {void}
 */
export function removeStyle(file) {
    try {
        const links = document.querySelectorAll(`link[rel="stylesheet"][href="${file}"]`);
        links.forEach(link => link.parentNode.removeChild(link));
        console.log(`Stylesheet ${file} has been removed.`);
    } catch (error) {
        console.error('Failed to remove the stylesheet.', error);
    }
}

/**
 * Dynamically removes a script from the document.
 *
 * @param {string} file - The URL of the script file to remove.
 * @returns {void}
 */
export function removeScript(file) {
    try {
        const scripts = document.querySelectorAll(`script[src="${file}"]`);
        scripts.forEach(script => script.parentNode.removeChild(script));
        console.log(`Script ${file} has been removed.`);
    } catch (error) {
        console.error('Failed to remove the script.', error);
    }
}
