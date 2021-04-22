# design-patterns-in-es6

Let's start with the commonly used patterns.

# Factory
The factory pattern is used to replace class constructors, abstracting the process of object generation so that the type of the object instantiated can be determined at run-time..

```
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

class Euro extends CurrencyDescribing {
    constructor(){
        super({
            symbol: '€',
            code: 'EUR',
        });
    }
}

class UK extends CurrencyDescribing {
    constructor(){
        super({
            symbol: '£',
            code: 'GBP',
        })
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
            case Country.Chese: {
                return new UnitedStatesDolar();
            }
            case Country.UK: {
                return new UK();
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