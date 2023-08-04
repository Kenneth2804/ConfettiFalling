document.getElementById("confetiButton").addEventListener("click", () =>{

	const confetiContainer = document.getElementById("confetiContainer");


	const menssageDiv = document.createElement("div")
	menssageDiv.className = "message";
	menssageDiv.textContent = "Felicidadees has ganadoooo!";
	confetiContainer.appendChild(menssageDiv);
setTimeout(() =>{
			menssageDiv.remove();
		}, 10000);



	for (let i = 0; i < 200; i++) {
	
		const confeti = document.createElement("div");
		confeti.className = "confeti";
		confeti.style.left = Math.random() * 100 + "vw";
		confeti.style.backgroundColor = getRandomColor();
		confeti.style.animationDuration = Math.random() * 1 + 0.5 + "s";
		confetiContainer.appendChild(confeti);

		setTimeout(() =>{
			confeti.remove();
		}, 10000)
	}


});

function getRandomColor() {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
return color;
}