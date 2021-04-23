class Worker {
    structCar() {
        let iPhone = new AppleFactory();
        iPhone.power();
        iPhone.playGame();
    }
}

/** Abstract Factory different with factory is a patch of interface added. */
class RedmiFactory extends MobileFactory {
    constructor() {
        this.display = new TFTLED();
        this.board = new RedmiBoard();
        this.battery = new LGBettery();
        this.name = 'Redmi';
    }
}

class AppleFactory extends MobileFactory {
    constructor() {
        this.display = new AMOLED();
        this.board = new AppleBoard();
        this.battery = new SamsungBettery();
        this.name = 'iPhone';
    }
}

class MobileFactory {
    constructor() {
        this.board = new Board();
        this.battery = new Battery();
        this.screen = new Screen();
    }

    createBoard() {
        throw new Error("Method should override");
    }

    createScreen() {
        throw new Error("Method should override");
    }

    createBettary() {
        throw new Error("Method should override");
    }

    power() {
        this.board.powerSwitch();
    }

    playGame() {

    }
}

// -- Board --

class RedmiBoard extends board {
    constructor() {
        this.chip = "Qualcomm Snapdragon 888";
        this.osType = "Andriod 11";
        this.name = "Redmi master board";
    }
}

class AppleBoard extends board {
    constructor(chip, osType, name, powerOn) {
        this.chip = "Apple A14";
        this.osType = "iOS 14.5",
            this.name = "iPhone XS Max master board";
    }
}

class Board {
    constructor() {
        this.chip = null;
        this.osType = null;
        this.name = null;
        this.powerOn = false;
    }
    powerSwitch() {
        this.powerOn = !this.powerOn;
    }
    description() {
        console.log(`I'm ${this.name}board, using ${this.chip} for ${this.osType}, now power is ${this.powerOn ? "on" : "off"}`);
    }
}

// -- Battery --

class LGBettery extends Battery {
    constructor() {
        this.batteryCapacity = 2000;
    }
    description() {
        console.log(`Support ${this.batteryCapacity}Mah power`,);
    }
}

class SamsungBettery extends Battery {
    constructor() {
        this.batteryCapacity = 5000;
    }
    description() {
        console.log(`Support ${this.batteryCapacity}Mah power`);
    }
}

class Battery {
    constructor() {
        this.batteryCapacity = 0;
    }
    description() {
        throw new Error('Method should override')
    }
}

// -- Screen --

class AMOLED extends Screen {
    constructor() {
        this.typeName = 'AMOLED';
        this.size = 6.5;
    }
}

class TFTLED extends Screen {
    constructor() {
        this.typeName = 'TFTLED';
        this.size = 5.5;
    }
}

class Screen {
    constructor() {
        this.typeName = null;
        this.size = null;
    }
    description() {
        console.log(`I'm ${this.typeName}, size:${this.size}`);
    }
    display() {
        throw new Error('Method should implement')
    }
}