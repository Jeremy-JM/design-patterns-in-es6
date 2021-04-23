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
    openDoor() { };
    closeDoor() { };
    //...//
    goUp();
    goDwon();
}