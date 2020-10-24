const car = {
    noOfWheel: 4,
    start() {
        return 'started';
    },
    stop() {
        return 'stopped';
    },
};
// usage
/*
const MyCar = Object.create(car, {owner: {value: 'john'}});
console.log(myCar.__proto__ === car); // true
*/

module.exports = car;