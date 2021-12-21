export default () => {
	const candidateList = document.querySelector("#candidate-list");
	const searchBar = document.getElementById("searchBar");
	let candiDateArray = [];

	searchBar.addEventListener("keyup", (e) => {
		const searchString = e.target.value.toLowerCase();

		const filteredCandidates = candiDateArray.filter((candidate) => {
			return (
				candidate.name.toLowerCase().includes(searchString) ||
				candidate.partyname.toLowerCase().includes(searchString)
			);
		});
		displayCandidates(filteredCandidates);
	});

	const loadCandidate = () => {
		const url = "http://localhost:8080/api/candidates";
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				candiDateArray = data;
				displayCandidates(candiDateArray);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const displayCandidates = (candidates) => {
		const htmlString = candidates
			.map((candidate) => {
				return `
            <li class="character">
                <h1>Name: ${candidate.name}</h1>
                <h1>Party: ${candidate.partyname}</h1>
                <h1>Position: ${candidate.position}</h1>
                <hr>

                
            </li>
        `;
			})
			.join("");
		candidateList.innerHTML = htmlString;
	};
	loadCandidate();
};
