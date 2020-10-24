// old interface
class OldCalculator {
    constructor() {
        this.operations = (term1, term2, operation) => {
            switch (operation) {
                case 'add':
                    return term1 + term2;
                case 'sub':
                    return term1 - term2;
                default:
                    return NaN;
            }
        };
    }
}
// new interface
class NewCalculator {
    constructor() {
        this.add = (term1, term2) => {
            return term1 + term2;
        };
        this.sub = (term1, term2) => {
            return term1 - term2;
        }
    }
}

// adapter class
class CalcAdapter {
    constructor() {
        const newCalc = new NewCalculator();

        this.operations = (term1, term2, operation) => {
            switch (operation) {
                case 'add':
                    return newCalc.add(term1, term2);
                case 'sub':
                    return newCalc.sub(term1, term2);
                default:
                    return NaN;
            }
        }
    }
}
// usage
const oldCalc = new OldCalculator();
console.log(oldCalc.operations(10,5,'add'));

const newCalc = new NewCalculator();
console.log(newCalc.add(10,5));

const adapterCalc = new CalcAdapter();
console.log(adapterCalc.operations(10,5,'add'));
