import App from "./App";
import NavMois from "./NavMois"

(() => {
  const tableauElt = document.getElementById("tableau");

  const captionElt = document.createElement("caption");
  const captionText = document.createTextNode("Mars 2019");
  captionElt.id = "titreTableau";
  captionElt.appendChild(captionText);
  tableauElt.appendChild(captionElt);

  const divMois = document.getElementById("selectionMois");
  const listeMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]


  new NavMois(divMois, {
    listeMois: listeMois
  }).render();
  new App(tableauElt).render();
})();