import TableHeader from "../TableHeader";
import TableBody from "../TableBody";

class App {
    constructor(node) {
        this.node = node;
        this.state = {
            jours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            listePresence: [{
                    value: "normal",
                    texte: " "
                },
                {
                    value: "absent",
                    texte: "Absent"
                },
                {
                    value: "conge",
                    texte: "Congé"
                },
                {
                    value: "deplacement",
                    texte: "Déplacement"
                },
                {
                    value: "ferie",
                    texte: "Férié"
                },
                {
                    value: "formation",
                    texte: "Formation"
                },
                {
                    value: "homeOffice",
                    texte: "Home office"
                },
                {
                    value: "malade",
                    texte: "Malade"
                },
                {
                    value: "reunion",
                    texte: "Réunion"
                },
                {
                    value: "rdv",
                    texte: "Rendez-vous"
                },
                {
                    value: "weekend",
                    texte: "Week-end"
                }
            ],
            personnes: [{
                    first_name: "Genevieve",
                    last_name: "Wrist",
                    email: "gwrist0@nbcnews.com"
                },
                {
                    first_name: "Lu",
                    last_name: "Barreau",
                    email: "lbarreau1@imgur.com"
                },
                {
                    first_name: "Hinze",
                    last_name: "Durtnall",
                    email: "hdurtnall2@youtu.be"
                }
            ]
        }
    }

    render() {
        new TableHeader(this.node, {
            jours: this.state.jours
        }).render();

        new TableBody(this.node, {
            jours: this.state.jours,
            listePresence: this.state.listePresence,
            personnes: this.state.personnes
        }).render();
    }
}

export default App;