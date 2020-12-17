'use strict';

// <3 Modernizr
// https://raw.githubusercontent.com/Modernizr/Modernizr/master/feature-detects/dom/dataset.js
function useNative() {
	const elem = document.createElement('div');
	elem.setAttribute('data-a-b', 'c');

	return Boolean(elem.dataset && elem.dataset.aB === 'c');
}

function nativeDataset(element) {
	return element.dataset;
}

module.exports = useNative() ? nativeDataset : element => {
	const map = {};
	const attributes = element.attributes;

	function getter() {
		return this.value;
	}

	function setter(name, value) {
		if (typeof value === 'undefined') {
			this.removeAttribute(name);

		} else {
			this.setAttribute(name, value);
		}
	}

	for (let i = 0, j = attributes.length; i < j; i++) {
		const attribute = attributes[i];

		if (attribute) {
			const name = attribute.name;

			if (name.indexOf('data-') === 0) {
				const prop = name.slice(5).replace(/-./g, u => {
					return u.charAt(1).toUpperCase();
				});

				const value = attribute.value;

				Object.defineProperty(map, prop, {
					enumerable: true,
					get: getter.bind({value: value || ''}),
					set: setter.bind(element, name)
				});
			}
		}
	}

	return map;
};
