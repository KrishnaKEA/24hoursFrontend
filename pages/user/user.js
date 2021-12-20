export default () => {
	const content = document.querySelector(".content");

	fetch("./pages/user/user.html")
		.then((response) => response.text())
		.then((userHtml) => {
			content.innerHTML = userHtml;

			fetchStudents();
			btnCLick();
		});
	function fetchStudents() {
		const studentUl = document.querySelector(".student-class");
		fetch("http://localhost:8080/api/students")
			.then((Response) => Response.json())
			.then((students) => {
				students.forEach((student) => {
					const liElement = document.createElement("li");
					liElement.innerHTML = student.name;
					//	const btnElement = document.createElement("button");
					//btnElement.setAttribute("class", "update");
					//btnElement.innerText = "update";
					//liElement.appendChild(btnElement);
					studentUl.appendChild(liElement);
				});
			});
	}

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
