const Country = {
    Chinese: 'Chinese',
    UnitedStates: 'UnitedStates',
    UK: 'UK',
    Euro: 'Euro',
}

class CurrencyDescribing {
    constructor(symbol, code) {
        this.symbol = symbol;
        this.code = code;
    }

    description() {
        console.log(`My code is${this.code}, and symbol is ${this.symbol}`);
    }
}

class ChineseRMB extends CurrencyDescribing {
    constructor() {
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
    static currency(country) {
        switch (country) {
            case Country.Chinese: {
                return new ChineseRMB();
            }
            case Country.UnitedStates: {
                return new UnitedStatesDolar();
            }
            default:
                throw new Error("There is no factory type");
        }
    }
}

export default CurrencyFactory;