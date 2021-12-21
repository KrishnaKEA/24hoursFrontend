export default () => {
	const updateButton = document.querySelector(".update");
	const removeButton = document.querySelector(".remove");

	updateButton.addEventListener("click", () => {
		const selectedName = document.querySelector(".select").value;
		fetch(`http://localhost:8080/api/candidates/find/${selectedName}`)
			.then((Response) => Response.json())
			.then((candidate) => {
				const id = candidate.id;

				const divElement = document.querySelector(".show-form");
				const inputName = document.createElement("input");
				inputName.setAttribute("class", "edited-name");
				inputName.value = candidate.name;
				inputName.placeholder = candidate.name;

				const inputPosition = document.createElement("input");
				inputPosition.setAttribute("class", "edited-position");
				inputPosition.value = candidate.position;
				inputPosition.placeholder = candidate.position;

				const inputPartyName = document.createElement("input");
				inputPartyName.setAttribute("class", "edited-partyname");
				inputPartyName.value = candidate.partyname;
				inputPartyName.placeholder = candidate.partyname;

				divElement.appendChild(inputName);
				divElement.appendChild(inputPosition);
				divElement.appendChild(inputPartyName);

				const button = document.createElement("button");
				button.setAttribute("id", "update-final");
				button.innerText = "Update now";
				divElement.appendChild(button);
				button.addEventListener("click", () => {
					const newName = document.querySelector(".edited-name").value;
					const newPostion = document.querySelector(".edited-position").value;
					const newparty = document.querySelector(".edited-partyname").value;
					const newCandidateData = {
						id: id,
						name: newName,
						position: newPostion,
						partyname: newparty,
					};
					updateCandidate(newCandidateData, id);
					alert("Successfully updated...");
					location.reload();
				});
			})
			.catch((error) => {
				console.log(error);
			});
	});

	fetch("http://localhost:8080/api/candidates")
		.then((Response) => Response.json())
		.then((candidates) => {
			candidates.forEach((candidate) => {
				displayCandidates(candidate);
			});
		})
		.catch((error) => {
			console.log(error);
		});

	function displayCandidates(candidate) {
		const candidateUl = document.querySelector(".candidate-ul");
		const selectElement = document.querySelector(".select");
		const optionElement = document.createElement("option");
		optionElement.innerHTML = candidate.name;
		optionElement.value = candidate.name;
		selectElement.appendChild(optionElement);

		const idLi = document.createElement("li");
		idLi.innerHTML = `Id: ${candidate.id}`;
		candidateUl.appendChild(idLi);
		const nameLi = document.createElement("li");
		nameLi.innerHTML = `Name: ${candidate.name}`;
		candidateUl.appendChild(nameLi);
		const positionLi = document.createElement("li");
		positionLi.innerHTML = `Position: ${candidate.position}`;
		candidateUl.appendChild(positionLi);
		const partyNameLi = document.createElement("li");
		partyNameLi.innerHTML = `Party Name: ${candidate.partyname}`;
		candidateUl.appendChild(partyNameLi);
		const hrLi = document.createElement("hr");
		candidateUl.appendChild(hrLi);
	}
	function updateCandidate(candidateData, id) {
		fetch(`http://localhost:8080/api/candidates/${id}`, {
			method: "PUT",
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
	function removeCandidate(id) {
		fetch(`http://localhost:8080/api/candidates/${id}`, {
			method: "DELETE",
		})
			.then((response) => response.text())
			.then((movieData) => {
				alert("Successfully deleted");
				location.reload();
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}

	removeButton.addEventListener("click", () => {
		const nameToDelete = document.querySelector(".select").value;
		fetch(`http://localhost:8080/api/candidates/find/${nameToDelete}`)
			.then((Response) => Response.json())
			.then((candidate) => {
				const id = candidate.id;
				removeCandidate(id);
			});
	});
};
