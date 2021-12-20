import renderSearch from "./pages/search/searchCandidate.js";
import renderAddCandidate from "./pages/add/addCandidate.js";
import renderCandidates from "./pages/candidate/candidate.js";
import renderfinalResult from "./pages/final/finalResult.js";

export default function () {
	window.router = new Navigo("/", { hash: true });

	router
		.on({
			"/": () => {
				// call updatePageLinks to let navigo handle the links
				// when new links have been inserted into the dom
				renderSearch().then(router.updatePageLinks);
			},
			add: () => {
				renderAddCandidate();
			},
			login: () => {
				renderfinalResult();
			},
			candidate: () => {
				renderCandidates();
			},
		})
		.resolve();
}
