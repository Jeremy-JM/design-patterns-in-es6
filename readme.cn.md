# design-patterns-in-es6

我们从最常用的设计模式开始吧
## [English version](https://github.com/Jeremy-JM/design-patterns-in-es6)
# Factory
工厂模式用于替换类构造函数，抽象对象生成过程，以便于可以运行时确定实例化的对象类型。

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
抽象工厂模式用于向客户端提供一组相关或依赖的对象。与工场模的区别是，抽象工厂有一系列的“族”对象是在运行时确定的。

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

# 建造者模式
一种对象构建模式。它可以将复杂对象的建造过程抽象出来（抽象类别），使这个抽象过程的不同实现方法可以构造出不同表现（属性）的对象。

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