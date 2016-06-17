var Predator = (function showCarnivores (carnivores) {
	var listStart = document.createElement('ul');
	listStart.className = "title";
	document.getElementById("carnies").appendChild(listStart);
	listStart.appendChild(document.createTextNode("Carnivores"));
	function domInate (element, index, array){
		var dino = document.createElement("li");
		listStart.appendChild(dino);
		dino.className = "property";
		dino.appendChild(document.createTextNode(element));
	}
	carnivores.forEach(domInate);
}

function showHerbivores (herbivores) {
	var listStart = document.createElement('ul');
	listStart.className = "title";
	document.getElementById("herbies").appendChild(listStart);
	listStart.appendChild(document.createTextNode("Herbivores"));
	function domInate (element, index, array){
		var dino = document.createElement("li");
		listStart.appendChild(dino);
		dino.className = "property";
		dino.appendChild(document.createTextNode(element));
	}
	herbivores.forEach(domInate);
}


Predator.loadCarnivores(showCarnivores);

Predator.loadHerbivores(showHerbivores);


);