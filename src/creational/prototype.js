//using
class Vender { 
    makeNoodles(){
        let noodles = new Noodles('Pasta', '200g');
        noodles.clone();
    }
}

class Noodles {
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }

    clone(){
        return new Noodles(this.name, this.weight);
    }
}