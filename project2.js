class Carcl{

constructor(firstname,speed){
    this.firstname = firstname
    this.speed = speed

}

acclerate(){
    console.log(`${this.firstname} going at ${this.speed}`);
    }

    brake(){
        console.log(`${this.firstname}  is slowing at ${this.speed}`);
    }

set speedUs(currentspeed){
    this._speed = currentspeed
    return this._currentspeed * 1.6
    }

    get speedUs(){
        return this._speed / 1.6;
    }
}
const car = new Carcl('ford',98)

const experiment = new Carcl('bugati',190);


car.acclerate()
car.brake()