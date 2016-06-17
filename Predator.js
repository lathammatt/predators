var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "carnivores.json");
      loader.send();

      loader.addEventListener("load", function () {
        carnivores = JSON.parse(this.responseText).carnivores;
        console.log("get", carnivores);
        callbackToInvoke(carnivores);
        })
      },
    loadHerbivores: function (callbackToInvoke) {
      var hoader = new XMLHttpRequest();
      hoader.open("GET", "herbivores.json");
      hoader.send();

      hoader.addEventListener("load", function () {
        herbivores = JSON.parse(this.responseText).herbivores;
        console.log("get", herbivores);
        callbackToInvoke(herbivores);
        });
      }  
   };  

})(Predator || {});
