class Stock {
    constructor(symbol, price){
        this.symbol = symbol;
        this.price = price;
        this.inverstors = [];
    }

    attach(inverstor){
        this.inverstors.push(inverstor);
    }

    detach(inverstor){
        this.inverstors = this.inverstors.filters((e) => e.name != inverstor.name);
    }

    notify(){
        this.inverstors.forEach(inverstor => {
            inverstor.update(this);
        });
    }

    price(price){
        this.price = price;
        this.notify();
    }
}

class IBMStock extends Stock{
    constructor(){
        super();
    }
}

class IInverstor {
    update(stock){
        throw new Error("Method should implement");
    }
}

class Inverstor extends IInverstor{
    constructor(name){
        this.name = name;
        this.stock = null;
    }

    update(inverstor){
        console.log(`Notified ${stock.symbol} of ${inverstor.name}s chage to ${stock.price}` )
    }

    get stock() {
        return this.stock;
    }
    set stock(value) {
        this.stock = value;
    }
}