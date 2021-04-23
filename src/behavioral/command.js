// --- using ----
class Client {
    using(){
        let podBayDoor = 'pod bay door';
        let door = SecurityDoor(podBayDoor);

        door.open();
        door.close();
    }
}


// ---- implementation ---
class DoorCommand {
    execute(status){
        throw new Error('Method should implementation')
    }
}

class OpenCommand extends DoorCommand{
    constructor(status){
        this.statis = status;
    }

    execute(){
        return 'The door is ' + this.statis;
    }
}

class CloseCommand extends DoorCommand{
    constructor(status){
        this.statis = status;
    }

    execute(){
        return 'The door is ' + this.statis;
    }
}

class SecurityDoor{
    constructor(door){
        this.openCommand = new OpenCommand(door);
        this.closeCommand = new CloseCommand(door);
    }

    close(){
        return closeCommand.execute();
    }

    open(){
        return this.openCommand.execute();
    }
}