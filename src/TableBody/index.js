class TableBody {
    constructor(node, props) {
        this.node = node;
        this.listePresence = props.listePresence;
        this.jours = props.jours;
        this.personnes = props.personnes;
    }

    deroulantJour(etats) {
        const selectElt = document.createElement("select");
        etats.forEach(etat => {
            const optionElt = document.createElement("option");
            const optionTxt = document.createTextNode(etat.texte);
            optionElt.setAttribute("value", etat.value);
            optionElt.appendChild(optionTxt);
            selectElt.appendChild(optionElt);
        });
        return selectElt;
    }

    LignesEmployes(tableau, donnees, colonnes) {
        const nbEmployes = donnees.length;
        for (let i = 0; i < nbEmployes; i++) {
            const trEmploye = document.createElement("tr");
            trEmploye.className = "employe";
            const thElt = document.createElement("th");
            thElt.className = "employe";

            const buttonValider = document.createElement("button");
            buttonValider.className = "planningOK";
            const buttonValiderTxt = document.createTextNode("Valider");
            buttonValider.appendChild(buttonValiderTxt);

            const employe = document.createTextNode(
                donnees[i].first_name + " " + donnees[i].last_name
            );
            thElt.appendChild(employe);
            thElt.appendChild(buttonValider);

            trEmploye.appendChild(thElt);

            colonnes.forEach(jour => {
                const tdSelection = document.createElement("td");
                tdSelection.appendChild(this.deroulantJour(this.listePresence));
                trEmploye.appendChild(tdSelection);
            });

            tableau.appendChild(trEmploye);
        }
        return tableau;
    }

    render() {
        const tBodyElt = document.createElement("tbody");
        tBodyElt.id = "tableBody";

        const body = this.LignesEmployes(tBodyElt, this.personnes, this.jours);

        this.node.appendChild(tBodyElt);
    }
}

export default TableBody;