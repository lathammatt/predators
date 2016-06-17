var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "carnivores.json");
      loader.send();

      loader.addEventListener("load", function () {
        carns = JSON.parse(this.responseText).carnivores;
        callbackToInvoke(carns);

  return {
    loadHerbivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "herbivores.json");
      loader.send();

      loader.addEventListener("load", function () {
        herbs = JSON.parse(this.responseText).herbivores;
        callbackToInvoke(herbs);


      });
    }
  }
})();