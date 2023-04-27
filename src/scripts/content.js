console.clear();

import refs from './modules/refs.js';
import validation from './modules/validation.js';

refs.formEl.addEventListener('submit', e => {
	e.preventDefault();

	const inputValue = String(refs.inputEl.value.trim());
	const urls = inputValue.split('http://');

	const result = urls.slice(1).map(url => `http://${url}`);
	validation(result);

	refs.formEl.reset();
});
