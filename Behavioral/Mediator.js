class TrafficTower {
    constructor() {
        this._airplanes = [];
    }
    register(airplane) {
        this._airplanes.push(airplane);
        airplane.register(this);
    } 
    requestCoordinates(airplane) {
        return this._airplanes.filter(plane => airplane !== plane).map(plane => plane.coordinates);
    }
}

class Airplane {
    constructor(coordinates) {
        this.coordinates = coordinates;
        this.trafficTower = null;
    }
    register(trafficTower) {
        this.trafficTower = trafficTower;
    }
    requestCoordinates() {
        if (this.trafficTower) return this.trafficTower.requestCoordinates(this);
        return null;
    }
}

module.exports = {
    TrafficTower,
    Airplane,
}