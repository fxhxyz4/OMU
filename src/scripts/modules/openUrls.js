const target = '_blank';

export function openUrls(url) {
  chrome.tabs.create({ url: url.trim() });
	console.log(`open ${url} with target ${target}`);
}
