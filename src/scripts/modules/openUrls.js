const target = '_blank';

export default function openUrls(url) {
	window.open(url, target);
	console.log(`open ${url} with target: ${target}`);
}
