class IceCream {
    constructor(flavour, price) {
        this.flavour = flavour;
        this.price = price;
    }
}

class IceCreamFactory {
    constructor() {
        this._iceCreams = [];
    }

    createIceCream(flavour, price) {
        let iceCream = this.getIceCream(flavour);
        if (iceCream) {
            return iceCream;
        } else {
            const newIceCream = new IceCream(flavour, price);
            this._iceCreams.push(newIceCream);
            return newIceCream;
        }
    }

    getIceCream(flavour) {
        return this._iceCreams.find(iceCream => iceCream.flavour === flavour);
    }
}

module.exports = {
    IceCreamFactory,
}