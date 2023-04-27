import openUrls from './openUrls.js';

export default function validation(array) {
	const include = `http`;

	if (Array.isArray(array) === false) {
		console.error(`[error] not array`);
	} else if (array) {
		for (const arr of array) {
			const string = String(arr);

			if (string.includes(include) === false) {
				console.error(`[error] invalid urls`);
				return;
			}
		}
	} else {
		console.log(array);
		openUrls(array);
	}
}
