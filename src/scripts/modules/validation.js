import openUrls from './openUrls.js';

export default function validation(array) {
	const include = `http`;

	if (!Array.isArray(array)) {
		return;
	}

	if (array) {
		for (const arr of array) {
			let string = String(arr);

			if (string.includes(include) === false) {
				console.error(`[error] invalid urls`);
			} else {
				openUrls(string);
				console.log(string);
			}
		}
	}
}
