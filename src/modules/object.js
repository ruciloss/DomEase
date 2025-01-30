/**
 * Deeply clones an object.
 *
 * @param {Object} obj - The object to clone.
 * @returns {Object} - A deep clone of the object.
 */
export function cloneDeepObject(obj) {
	try {
		return JSON.parse(JSON.stringify(obj));
	} catch (error) {
		console.error('Failed to deeply clone object.', error);
		return null;
	}
}

/**
 * Merges two or more objects deeply.
 *
 * @param {...Object} objects - The objects to merge.
 * @returns {Object} - A new object with the merged properties.
 */
export function mergeDeepObject(...objects) {
	try {
		return objects.reduce((acc, obj) => {
			Object.keys(obj).forEach(key => {
				if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
					acc[key] = mergeDeepObject(acc[key] || {}, obj[key]);
				} else {
					acc[key] = obj[key];
				}
			});
			return acc;
		}, {});
	} catch (error) {
		console.error('Failed to deeply merge objects.', error);
		return {};
	}
}

/**
 * Checks if two objects are deeply equal.
 *
 * @param {Object} obj1 - The first object.
 * @param {Object} obj2 - The second object.
 * @returns {boolean} - True if the objects are deeply equal, false otherwise.
 */
export function equalsDeepObject(obj1, obj2) {
	try {
		return JSON.stringify(obj1) === JSON.stringify(obj2);
	} catch (error) {
		console.error('Failed to compare objects for deep equality.', error);
		return false;
	}
}

/**
 * Picks specific keys from an object and returns a new object.
 *
 * @param {Object} obj - The source object.
 * @param {Array<string>} keys - The keys to pick.
 * @returns {Object} - A new object with only the picked keys.
 */
export function pickKeysObject(obj, keys) {
	try {
		return keys.reduce((acc, key) => {
			if (Object.prototype.hasOwnProperty.call(obj, key)) {
				acc[key] = obj[key];
			}
			return acc;
		}, {});
	} catch (error) {
		console.error('Failed to pick keys from object.', error);
		return {};
	}
}

/**
 * Omits specific keys from an object and returns a new object.
 *
 * @param {Object} obj - The source object.
 * @param {Array<string>} keys - The keys to omit.
 * @returns {Object} - A new object without the omitted keys.
 */
export function omitKeysObject(obj, keys) {
	try {
		return Object.keys(obj).reduce((acc, key) => {
			if (!keys.includes(key)) {
				acc[key] = obj[key];
			}
			return acc;
		}, {});
	} catch (error) {
		console.error('Failed to omit keys from object.', error);
		return {};
	}
}

/**
 * Freezes an object deeply, making it immutable.
 *
 * @param {Object} obj - The object to freeze.
 * @returns {Object} - The deeply frozen object.
 */
export function freezeDeepObject(obj) {
	try {
		Object.keys(obj).forEach(key => {
			if (typeof obj[key] === 'object' && obj[key] !== null) {
				freezeDeepObject(obj[key]);
			}
		});
		return Object.freeze(obj);
	} catch (error) {
		console.error('Failed to deeply freeze object.', error);
		return obj;
	}
}

/**
 * Gets a nested property from an object using a path string.
 *
 * @param {Object} obj - The source object.
 * @param {string} path - The dot-separated path to the property (e.g., "a.b.c").
 * @returns {any} - The value of the nested property, or undefined if not found.
 */
export function getNestedObject(obj, path) {
	try {
		return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
	} catch (error) {
		console.error('Failed to get nested property from object.', error);
		return undefined;
	}
}

/**
 * Sets a nested property in an object using a path string.
 *
 * @param {Object} obj - The source object.
 * @param {string} path - The dot-separated path to set (e.g., "a.b.c").
 * @param {any} value - The value to set at the specified path.
 * @returns {Object} - The updated object.
 */
export function setNestedObject(obj, path, value) {
	try {
		const keys = path.split('.');
		let current = obj;
		keys.forEach((key, index) => {
			if (index === keys.length - 1) {
				current[key] = value;
			} else {
				if (!current[key]) current[key] = {};
				current = current[key];
			}
		});
		return obj;
	} catch (error) {
		console.error('Failed to set nested property in object.', error);
		return obj;
	}
}
