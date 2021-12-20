import addScript from "./add.js";
export default () => {
	const content = document.querySelector(".content");

	fetch("./pages/add/addCandidate.html")
		.then((response) => response.text())
		.then((aboutHtml) => {
			content.innerHTML = aboutHtml;
			addScript();
		});
};
