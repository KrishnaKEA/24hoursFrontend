import final from "./final.js";

export default () => {
	const content = document.querySelector(".content");

	return fetch("./pages/final/finalResult.html")
		.then((response) => response.text())
		.then((loginHtml) => {
			content.innerHTML = loginHtml;
			final();

		});
};
