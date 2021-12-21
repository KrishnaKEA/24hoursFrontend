import addOrRemove from "./addOrRemove.js";
export default () => {
	const content = document.querySelector(".content");

	fetch("./pages/candidate/candidate.html")
		.then((response) => response.text())
		.then((userHtml) => {
			content.innerHTML = userHtml;
			addOrRemove();
		});

};
