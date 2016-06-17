var Predator = (function (oldPredator) {


	oldPredator.showCarnivores = function (carnivores) {
	var listStart = document.createElement("ul");
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
	return carnivores;
	}

	oldPredator.showHerbivores = function (herbivores) {
	var listStart = document.createElement("ul");
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
	return herbivores;
	}

	return oldPredator;

})(Predator);

Predator.loadCarnivores(Predator.showCarnivores);
Predator.loadHerbivores(Predator.showHerbivores);



