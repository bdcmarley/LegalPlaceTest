// Ici, les fonctions motrices permettant de gérer les médicaments.
class Monitor {
    constructor() { }

    // Enlève un ou plusieurs "expiresIn", selon le boost, au médicament
    subtractExpire(drugId, boost = 1) {
        this.drugs[drugId].expiresIn -= boost;
    }

    // Enlève un ou plusieurs "benefit", selon le boost, au médicament
    // Le benefit d'un article n'est jamais négatif
    substractBenefit(drugId, boost = false) {
        if (this.drugs[drugId].benefit === 0) { return }

        const expiresIn = this.drugs[drugId].expiresIn;
        const benefit = this.drugs[drugId].benefit;

        let benefitFuture = benefit - 1;
        // Une fois la date d'expiration passée, le benefit se dégrade deux fois plus vite
        // Mais si boost est différent de false, on prend la valeur de boost (dans le cas d'un comportement spécial)
        if (boost !== false || expiresIn <= 0) {
            boost = (!!boost) ? boost : 2;
            benefitFuture = (benefit - boost > 0) ? benefit - boost : 0;
        }

        this.drugs[drugId].benefit = benefitFuture;
    }

    // Ajoute un ou plusieurs "benefit", selon le boost, au médicament
    // Le benefit d'un article n'est jamais supérieur à 50
    addBenefit(drugId, boost = false) {
        if (this.drugs[drugId].benefit === 50) { return }

        const benefit = this.drugs[drugId].benefit;

        let benefitFuture = benefit + 1;
        if (boost !== false) {
            benefitFuture = (benefit + boost < 50) ? benefit + boost : 50;
        }

        this.drugs[drugId].benefit = benefitFuture;
    }
}

export default Monitor;
