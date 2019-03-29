class TableHeader {
    constructor(node, props) {
        this.node = node;
        this.jours = props.jours;
    }

    colonnesJours(tableau, colonnes) {
        const trJours = document.createElement("tr");
        trJours.className = "listeJours";

        const thElt = document.createElement("th");
        const thTxt = document.createTextNode("Employés");
        thElt.appendChild(thTxt);
        trJours.appendChild(thElt);

        colonnes.forEach(colonne => {
            const colonneJour = document.createElement("td");
            colonneJour.id = colonne;
            colonneJour.className = "jours";
            const colonneTxt = document.createTextNode(colonne);
            colonneJour.appendChild(colonneTxt);
            trJours.appendChild(colonneJour);
        });

        tableau.appendChild(trJours);
        return tableau;
    }

    render() {
        const tHeadElt = document.createElement("thead");
        tHeadElt.id = "tableHeader";

        const header = this.colonnesJours(tHeadElt, this.jours);

        this.node.appendChild(header);
    }
}

export default TableHeader;