export default () => {
	const addButton = document.querySelector("#submit");

	addButton.addEventListener("click", () => {
		const name = document.querySelector("#name").value;
		const position = document.querySelector(".position-class").value;
		const partyname = document.querySelector(".party-class").value;
		const inputData = {
			name: name,
			position: position,
			partyname: partyname,
		};
		addHandler(inputData);
	});

	addCandidate();
	function addHandler(candidateData) {
		fetch("http://localhost:8080/api/candidates", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(candidateData),
		})
			.then((response) => response.json())
			.then((movieData) => {
				console.log("Success:", candidateData);
				alert("Added successfully");
				location.reload();
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
};
