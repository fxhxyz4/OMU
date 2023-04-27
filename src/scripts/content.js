console.clear();

import refs from './modules/refs.js';
import validation from './modules/validation.js';

let array = [];

refs.formEl.addEventListener('submit', e => {
	e.preventDefault();

	const inputValue = refs.inputEl.value.trim();
	array.push(inputValue);

	validation(array);

	refs.formEl.reset();
});
