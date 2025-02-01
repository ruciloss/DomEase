# DomEase

DomEase is a lightweight and powerful JavaScript library designed for easy DOM manipulation, event handling, storage management, random color generation, and much more. 
It provides a rich set of utility functions to streamline web development, making common tasks more efficient and intuitive.

## Website

Check out the https://ruciloss.github.io

## License

Distributed under the **MIT** License. See [LICENSE](https://opensource.org/license/mit) for more information.

## Credits

Copyright © Ruciloss



# Utility Functions Documentation

## addClass()
**Description:** Adds one or more classes to the specified DOM element.

```javascript
const element = document.querySelector('#myElement');
addClass(element, 'active', 'highlight');
```

## addEvent()
**Description:** Adds an event listener to the specified DOM element.

```javascript
addEvent(document.querySelector('#btn'), 'click', () => alert('Button clicked!'));
```

## addEvents()
**Description:** Adds multiple event listeners to one or more DOM elements.

```javascript
addEvents(document.querySelector('#btn'), {
  click: () => alert('Clicked!'),
  mouseover: () => console.log('Mouse over')
});
```

## addID()
**Description:** Adds an ID to the specified DOM element.

```javascript
const element = document.querySelector('#myElement');
addID(element, 'newID');
```

## addScript()
**Description:** Dynamically adds a JavaScript file to the document.

```javascript
addScript('https://example.com/script.js');
```

## addStyle()
**Description:** Dynamically adds CSS styles to the document.

```javascript
addStyle('body { background-color: lightblue; }');
```

## appendHTMLContent()
**Description:** Appends HTML content to the specified DOM element.

```javascript
appendHTMLContent(document.body, '<p>Hello, world!</p>');
```

## appendNode()
**Description:** Appends a DOM node to the specified parent element.

```javascript
const newElement = document.createElement('div');
appendNode(document.body, newElement);
```

## appendTextContent()
**Description:** Appends text content to the specified DOM element.

```javascript
appendTextContent(document.querySelector('#textContainer'), 'More text!');
```

## clearHTMLContent()
**Description:** Clears all HTML content from the specified DOM element.

```javascript
clearHTMLContent(document.querySelector('#container'));
```

## clearNode()
**Description:** Removes all child nodes from the specified DOM element.

```javascript
clearNode(document.querySelector('#container'));
```

## clearStorage()
**Description:** Clears all data from localStorage or sessionStorage.

```javascript
clearStorage('local'); // or 'session'
```

## clearTextContent()
**Description:** Clears all text content from the specified DOM element.

```javascript
clearTextContent(document.querySelector('#textContainer'));
```

## cloneDeepObject()
**Description:** Creates a deep clone of the given object.

```javascript
const original = { a: 1, b: { c: 2 } };
const copy = cloneDeepObject(original);
```

## cloneNode()
**Description:** Clones a DOM node, optionally including its child nodes.

```javascript
const original = document.querySelector('#element');
const clone = cloneNode(original, true);
```

## containsAllArray()
**Description:** Checks if an array contains all elements of another array.

```javascript
containsAllArray([1, 2, 3], [1, 2]); // true
```

## createNode()
**Description:** Creates a new DOM node of the specified type.

```javascript
const newDiv = createNode('div');
```

## debug()
**Description:** Logs debug information to the console.

```javascript
debug('This is a debug message');
```

## equalsDeepObject()
**Description:** Compares two objects for deep equality.

```javascript
equalsDeepObject({ a: 1 }, { a: 1 }); // true
```

## freezeDeepObject()
**Description:** Recursively freezes an object to make it immutable.

```javascript
const obj = { a: 1, b: { c: 2 } };
freezeDeepObject(obj);
```

## getBrowserLang()
**Description:** Returns the browser's default language.

```javascript
console.log(getBrowserLang());
```

## getCookie()
**Description:** Retrieves the value of a specific cookie.

```javascript
console.log(getCookie('session_id'));
```

## getNestedObject()
**Description:** Safely retrieves a nested property from an object.

```javascript
const data = { a: { b: { c: 3 } } };
console.log(getNestedObject(data, ['a', 'b', 'c']));
```

## getStorage()
**Description:** Retrieves data from localStorage or sessionStorage.

```javascript
console.log(getStorage('local', 'keyName'));
```

## getSystemTheme()
**Description:** Detects if the system theme is light or dark.

```javascript
console.log(getSystemTheme());
```

## hasAttribute()
**Description:** Checks if an element has a specific attribute.

```javascript
console.log(hasAttribute(document.querySelector('#element'), 'data-id'));
```

## hasClass()
**Description:** Checks if an element has a specific CSS class.

```javascript
console.log(hasClass(document.querySelector('#element'), 'active'));
```

## hasID()
**Description:** Checks if an element has a specific ID.

```javascript
console.log(hasID(document.querySelector('#element'), 'uniqueID'));
```

## hexToRgb()
**Description:** Converts a HEX color code to RGB format.

```javascript
console.log(hexToRgb('#ff5733'));
```

## hexToRgba()
**Description:** Converts a HEX color code to RGBA format with an alpha value.

```javascript
console.log(hexToRgba('#ff5733', 0.5));
```

## hide()
**Description:** Hides the specified DOM element.

```javascript
hide(document.querySelector('#element'));
```

## inArray()
**Description:** Checks if a value exists in an array.

```javascript
console.log(inArray(3, [1, 2, 3, 4]));
```

## mergeDeepObject()
**Description:** Merges two or more objects deeply, combining nested properties.
```javascript
mergeDeepObject(object1, object2);
```

---
*(Documentation continues for remaining functions)*

