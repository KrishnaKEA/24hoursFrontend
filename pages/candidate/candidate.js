export default () => {
	const content = document.querySelector(".content");

	fetch("./pages/candidate/candidate.html")
		.then((response) => response.text())
		.then((userHtml) => {
			content.innerHTML = userHtml;
			fetchCandidates();
		});

	function fetchCandidates() {
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
	}

	function displayCandidates(candidate) {
		const candidateUl = document.querySelector(".candidate-ul");
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
		const updateBtn = document.createElement("button");
		updateBtn.innerText = "Update";
		//updateBtnArray.push(updateBtn);
		candidateUl.appendChild(updateBtn);
		const removeBtn = document.createElement("button");
		removeBtn.innerText = "Remove";
		removeBtn.setAttribute("class", "remove-class");
		//removeBtnArray.push(removeBtn);
		candidateUl.appendChild(removeBtn);
		const hrLi = document.createElement("hr");
		candidateUl.appendChild(hrLi);
	}

	/*
	function addStudent(studentData) {
		fetch("http://localhost:8080/api/students", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(studentData),
		})
			.then((response) => response.json())
			.then((studentData) => {
				console.log("Success:", studentData);
				alert("Added successfully");
				location.reload();
			})
			.catch((error) => {
				console.log("Error: ", error);
			});
	}
	function btnCLick() {
		const addButton = document.querySelector("#add-btn");
		addButton.addEventListener("click", () => {
			const inputvalue = document.querySelector(".add-student").value;
			console.log(inputvalue);
			const inputData = {
				name: inputvalue,
			};
			addStudent(inputData);
		});
	}
	/*
    function add_movie(movieData) {
      fetch("http://3.90.205.148/movies/addmovie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData),
      })
        .then((response) => response.json())
        .then((movieData) => {
          console.log("Success:", movieData);
          alert("Added successfully");
          location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    */
};
