export default () => {
	const content = document.querySelector(".content");

	return fetch("./pages/search/searchCandidate.html")
		.then((response) => response.text())
		.then((mainHtml) => {
			content.innerHTML = mainHtml;
		});
};
