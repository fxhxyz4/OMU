import { openUrls } from './openUrls.js';

export function validation(array) {
	const include = `http`;

	if (!Array.isArray(array)) {
		return;
	}

	if (array) {
    array.forEach(arr => {
      if (!arr.includes(include)) {
				console.error(`[error] invalid url: ${arr}`);
			} else {
				console.log(arr);
        openUrls(arr);
			}
    });
	}
}
