console.clear();

import refs from './modules/refs.js';
import validation from './modules/validation.js';

refs.formEl.addEventListener('submit', e => {
	e.preventDefault();

	const inputValue = String(refs.inputEl.value.trim());
	const urls = inputValue.split('http');

	const result = urls.slice(1).map(url => `http${url}`);
	result.push('https://github.com/fxhxyz4');

	console.log(result);
	validation(result);

	refs.formEl.reset();
});
