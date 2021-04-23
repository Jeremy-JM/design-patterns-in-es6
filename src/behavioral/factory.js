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
        console.log(`My code is${0}, and symbol is ${1}`, this.code, this.symbol);
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
    constructor() {
        super({
            symbol: '$',
            code: 'USD',
        });
    }
}

class Euro extends CurrencyDescribing {
    constructor() {
        super({
            symbol: '€',
            code: 'EUR',
        });
    }
}

class UK extends CurrencyDescribing {
    constructor() {
        super({
            symbol: '£',
            code: 'GBP',
        })
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
            case Country.Euro: {
                return new Euro();
            }
            case Country.UK: {
                return new UK();
            }
            default:
                throw new Error("There is no factory type");
        }
    }
}

export default CurrencyFactory;