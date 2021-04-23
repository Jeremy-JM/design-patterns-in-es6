class ClientA {
    takeElevator(){
        const elevator = new SingletonElevator().init();
        elevator.call();
    }
}

class SingletonElevator {
    static shared;
    // Keep one instance when each call;
    init() {
        if (shared) {
            return shared;
        } else {
            shared = new Elevator();
        }
    }
}

class Elevator {
    call(){}

    openDoor() { };
    closeDoor() { };
    //...//
    goUp();
    goDwon();
}