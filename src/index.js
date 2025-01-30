import { $, $$, $$$ } from './modules/selector.js';
import { addClass, removeClass, toggleClass, hasClass } from './modules/classes.js';
import { addEvent, addEvents } from './modules/event.js';
import { addID, removeID, toggleID, hasID, uuidv4 } from './modules/id.js';
import { addStyle, addScript, removeStyle, removeScript } from './modules/dependency.js';
import { cloneDeepObject, mergeDeepObject, equalsDeepObject, pickKeysObject, omitKeysObject, freezeDeepObject, getNestedObject } from './modules/object.js';
import { createNode, removeNode, replaceNode, clearNode, cloneNode, appendNode, prependNode } from './modules/element.js';
import { debug } from './modules/debug.js';
import { getBrowserLang, getSystemTheme } from './modules/browser.js';
import { getCookie, setCookie, removeCookie } from './modules/cookie.js';
import { getStorage, setStorage, removeStorage, clearStorage } from './modules/storage.js';
import { hide, show } from './modules/visibility.js';
import { inArray, removeArray, containsAllArray, shuffleArray, uniqueArray } from './modules/array.js';
import { randomColor, randomRgbColor, hexToRgb, rgbToHex, randomColorByBrightness, hexToRgba } from './modules/color.js';
import { setAttribute, removeAttribute, hasAttribute } from './modules/attribute.js';
import { setHTMLContent, appendHTMLContent, prependHTMLContent, clearHTMLContent } from './modules/html.js';
import { setTextContent, appendTextContent, prependTextContent, clearTextContent } from './modules/text.js';
import { smoothScrollTo } from './modules/scroll.js';

export {
    $,
    $$,
    $$$,
    addClass,
    addEvent,
    addEvents,
    addID,
    addScript,
    addStyle,
    appendHTMLContent,
    appendNode,
    appendTextContent,
    clearHTMLContent,
    clearNode,
    clearStorage,
    clearTextContent,
    cloneDeepObject,
    cloneNode,
    containsAllArray,
    createNode,
    debug,
    equalsDeepObject,
    freezeDeepObject,
    getBrowserLang,
    getCookie,
    getNestedObject,
    getStorage,
    getSystemTheme,
    hasAttribute,
    hasClass,
    hasID,
    hexToRgb,
    hexToRgba,
    hide,
    inArray,
    mergeDeepObject,
    omitKeysObject,
    pickKeysObject,
    prependHTMLContent,
    prependNode,
    prependTextContent,
    randomColor,
    randomColorByBrightness,
    randomRgbColor,
    removeArray,
    removeAttribute,
    removeClass,
    removeCookie,
    removeID,
    removeNode,
    removeScript,
    removeStorage,
    removeStyle,
    replaceNode,
    rgbToHex,
    setAttribute,
    setCookie,
    setHTMLContent,
    setStorage,
    setTextContent,
    show,
    shuffleArray,
    smoothScrollTo,
    toggleClass,
    toggleID,
    uniqueArray,
    uuidv4
};
