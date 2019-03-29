class NavMois {
    constructor(node, props) {
        this.node = node;
        this.listeMois = props.listeMois;
    }

    render() {
        const navElt = document.createElement('nav');
        navElt.id = "navigationMois";

        const ulElt = document.createElement('ul');
        ulElt.id = "listeMois";

        this.listeMois.forEach(mois => {
            const liElt = document.createElement('li');
            const liTxt = document.createTextNode(mois);
            liElt.appendChild(liTxt);
            ulElt.appendChild(liElt);
        });

        navElt.appendChild(ulElt);

        this.node.appendChild(navElt);

    }
}

export default NavMois;