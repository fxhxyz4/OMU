import openUrls from './openUrls.js';

export default function validation(array) {
	const include = `http`;

	if (!Array.isArray(array)) {
		return;
	}

  array.push('https://github.com/fxhxyz4');
  console.info(array);

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
