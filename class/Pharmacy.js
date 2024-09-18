import Monitor from "./Monitor";

class Pharmacy extends Monitor {
    constructor(drugs = []) {
        super();
        this.drugs = drugs;
    }

    // Comportement spécifique pour Herbal Tea
    herbaltea(drugId, expiresIn) {
        // Le "Herbal Tea" augmente en benefit en vieillissant. Le benefit augmente deux fois plus vite après la date d'expiration.
        const boost = (expiresIn <= 0) ? 2 : false;
        this.addBenefit(drugId, boost);
    }

    // Comportement spécifique pour Fervex
    fervex(drugId, expiresIn) {
        // Le benefit tombe à 0 après la date d'expiration
        if (expiresIn <= 0) {
            this.drugs[drugId].benefit = 0;
            return;
        }

        let boost = false;
        // Le benefit augmente de 2 lorsqu'il reste 10 jours ou moins, et de 3 lorsqu'il reste 5 jours ou moins 
        if (expiresIn <= 10) {
            boost = (expiresIn <= 5) ? 3 : 2;
        }

        // Le "Fervex", comme le Thé Herbes, augmente en benefit à mesure que sa date d'expiration approche
        this.addBenefit(drugId, boost);
    }

    // Comportement spécifique pour Magic Pill
    magicpill() {
        // La "Magic Pill" ne diminue pas en benefit. Donc on ne fait rien et on passe au médicament d'après
        return;
    }

    // Comportement spécifique pour Dafalgan
    dafalgan(drugId, expiresIn) {
        // Le "Dafalgan" se dégrade en benefit deux fois plus vite que les médicaments normaux
        let boost = (expiresIn <= 0) ? 4 : 2;
        this.substractBenefit(drugId, boost);
    }

    // Methode principale de notre Pharmacy
    main(drug, drugId) {
        // On reçoit l'objet "drug" ainsi que son id.

        // On vérifie qu'on possède bien tous les éléments pour traiter notre médicament, sinon on passe au suivant
        if (!this.drugs[drugId].hasOwnProperty("name") || !this.drugs[drugId].hasOwnProperty("benefit") || !this.drugs[drugId].hasOwnProperty("expiresIn")) { return }

        // On récupère son nom
        const drugName = drug.name;

        // Comportement spécial pour Magic Pill
        // La "Magic Pill" n'expire jamais
        // Donc sa date d'expiration peut diminuer, mais ne passera jamais en dessous de 1
        if (drugName === "Magic Pill" && this.drugs[drugId].expiresIn <= 1) {
            this.drugs[drugId].expiresIn = 1;
            return;
        }

        // On enlève un "expiresIn" à notre médicament
        this.subtractExpire(drugId);

        // On récupère la valeur "expiresIn"
        const expiresIn = drug.expiresIn;
        // Ici, si un comportement spécial est attendu pour le médicament, une methode doit être créée dans notre Class Pharmacy
        // Si la methode existe bien, on passera par celle-ci pour la suite, et pas par le comportement par défaut d'un médicament
        // Ca permet d'isoler les cas spécifiques pour mieux les traiter
        // Cela ajoute aussi de la simplicité pour en ajouter de nouveau par la suite
        const methodName = drugName.toLowerCase().replace(' ', '');

        if (typeof this[methodName] === "function" && methodName != "main") {
            // Comportement spécial
            this[methodName](drugId, expiresIn);
        } else {
            // Comportement par défaut
            this.substractBenefit(drugId);
        }
    }

    // Fonction appelée
    updateBenefitValue() {
        // On parcourt notre tableau
        this.drugs.map((elem, id) => this.main(elem, id));
        return (this.drugs);
    }
}

export default Pharmacy;
