export default () => {
	const showUl = document.querySelector(".result-class");
	fetch("http://localhost:8080/api/candidates")
		.then((Response) => Response.json())
		.then((candidates) => {
			candidates.forEach((candidate) => {
				fetch(`http://localhost:8080/api/count/${candidate.name}`)
					.then((Response) => Response.json())
					.then((resultData) => {
						const liEle = document.createElement("li");
						liEle.innerHTML = `${candidate.name} : ${candidate.position} : ${candidate.partyname}------> Total votes: ${resultData}`;
						showUl.appendChild(liEle);
					})
					.catch((error) => {
						console.log(error);
					});
			});
		});
};
