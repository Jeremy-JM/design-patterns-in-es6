class Client {
    using() { //using
        let target = new Adapter();
        target.request();
    }
}

class Adapter extends Target {
    request() {
        this.SpecificRequest();
    }
}

class Adaptee {
    SpecificRequest() { }
}

class Target {
    request() {
        console.log("method should implement");
    }
}