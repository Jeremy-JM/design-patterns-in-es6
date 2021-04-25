# design-patterns-in-es6

Let's start with the commonly used patterns.

## [简体中文](https://github.com/Jeremy-JM/design-patterns-in-es6/blob/master/readme.cn.md)


# Factory
The factory pattern is used to replace class constructors, abstracting the process of object generation so that the type of the object instantiated can be determined at run-time..

```ES6
const Country = {
    Chinese: 'Chinese',
    UnitedStates: 'UnitedStates',
    UK: 'UK',
    Greece: 'Greece',
}

class CurrencyDescribing {
    constructor(symbol, code) {
        this.symbol = symbol;
        this.code = code;
    }
}

class ChineseRMB extends CurrencyDescribing {
    constructor(){
        super({
            symbol: '¥',
            code: 'CNY',
        });
    }
}

class UnitedStatesDolar extends CurrencyDescribing {
    constructor(){
        super({
            symbol: '$',
            code: 'USD',
        });
    }
}

class CurrencyFactory {
    static currency(country){
        switch (country) {
            case Country.Chinese: {
                return new ChineseRMB();
            }
            case Country.UnitedStates: {
                return new UnitedStatesDolar();
            }
            default:
                throw new Error("There is no factory type");
                break;
        }
    }
}
```

# Abstract Factory
The abstract factory pattern is used to provide a client with a set of related or dependant objects. The "family" of objects created by the factory are determined at run-time.

```ES6
class Worker {
    structCar(){
        let iPhone = new AppleFactory();
        iPhone.power();
        iPhone.playGame();
    }
}

/** Factory */
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

    createBoard(){
        throw new Error("Method should override");
    }

    createScreen(){
        throw new Error("Method should override");
    }

    createBettary(){
        throw new Error("Method should override");
    }

    power(){
        this.board.powerSwitch();
    }

    playGame(){

    }
}

// -- Board --

class RedmiBoard extends board {
    constructor(){
        this.chip = "Qualcomm Snapdragon 888";
        this.osType = "Andriod 11";
        this.name = "Redmi master board";
    }
}

class AppleBoard extends board {
    constructor(chip, osType, name, powerOn){
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
        console.log(`I'm ${0}board, using ${1} for ${2}, now power is ${3}`, this.name, this.chip, this.osType, this.powerOn ? "on" : "off");
    }
}

// -- Battery --

class LGBettery extends Battery {
    constructor() {
        this.batteryCapacity = 2000;
    }
    description() {
        console.log(`Support ${0}Mah power`, this.batteryCapacity);
    }
}

class SamsungBettery extends Battery {
    constructor() {
        this.batteryCapacity = 5000;
    }
    description() {
        console.log(`Support ${0}Mah power`, this.batteryCapacity);
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
        console.log(`I'm ${0}, size:${1}`, this.typeName, this.size);
    }
    display() {
        throw new Error('Method should implement')
    }
}
```

# Builder
A mode of object construction. It can abstract the construction process of complex objects (abstract category), and different implementation methods of the abstract process can construct objects with different manifestations (attributes).

```ES6
class Client {
    getUrl() {
        let builder = new URLBuilder('jd.com');
        builder.addParameters({ searchKey: encodeURI('DJI mavic air 2s') });
        return builder.build();
    }
}

class URLBuilder {
    constructor(domain) {
        this.url = new URL(domain);
    }

    setProtocol(protocol) {
        this.url.protocol = protocol;
    }

    addParameters(parameters) {
        this.url.parameters = parameters;
    }

    build() {
        let params = [];
        for (const key in this.url.parameters) {
            if (Object.hasOwnProperty.call(this.url.parameters, key)) {
                const element = this.url.parameters[key];
                params.push(`${key}=${element}`);
            }
        }
        let { protocol, domain } = this.url;
        return `${protocol}://${domain}?${params.join('&')}`;
    }
}

class URL {
    constructor(domain) {
        this.protocol = 'https',
            this.domain = domain;
        this.parameters = null;
    }

}
```