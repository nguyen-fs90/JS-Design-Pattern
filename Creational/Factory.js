class BallFactory {
    constructor() {
        this.createBall = (type) => {
            let ball;
            if (type == 'football' || type == 'soccer') ball = new Football();
            else if (type === 'basketball') ball = new BasketBall();
            ball.roll = () => {
                return `the ${this._type} is rolling.`;
            };
            return ball;
        };
    }
}

class FootBall {
    constructor() {
        this._type = 'football';
        this.kick = () => {
            return 'You kicked the football';
        };
    }
}

class BasketBall {
    constructor() {
        this._type = 'basketball';
        this.bounce = () => {
            return 'You bounce the basketball';
        };
    }
}

module.exports = {
    BallFactory,
};
