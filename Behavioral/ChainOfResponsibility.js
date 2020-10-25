class CumulativeSum {
    constructor(initialValue = 0) {
        this.sum = initialValue;
    }

    add(value) {
        this.sum += value;
        return this;
    }
}

module.exports = CumulativeSum;