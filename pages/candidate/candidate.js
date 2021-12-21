import addOrRemove from "./addOrRemove.js";
export default () => {
	const content = document.querySelector(".content");

	fetch("./pages/candidate/candidate.html")
		.then((response) => response.text())
		.then((userHtml) => {
			content.innerHTML = userHtml;
			addOrRemove();
		});

	

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
