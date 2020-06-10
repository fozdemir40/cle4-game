/// <reference path="../gameobject.ts"/>

class Enemy1 extends GameObject {
    // Fields

    private xVelo : number = 0
    private yVelo : number = 0

    private leftspeed : number = 0
    private rightspeed : number = 0

    private alive : boolean = true

    // Constructor
    constructor(xStart : number, yStart : number, name : string) {
        super(xStart, yStart, name)
    }

    // Loop Functions
    public update() {
    this.leftspeed =+ 1

    let newX = this._x - this.leftspeed + this.rightspeed
        // check of het monster binnen het beeld blijft
        if (newX < (1440 - this._div.clientWidth)){
         this._x = newX
        }
        if (newX < 0 - this._div.clientWidth) {
            this._div.remove()
        }
        this._div.style.transform = `translate(${this._x}px, ${this._y}px)`
    }

    // General Functions
    public getRectangle() {
        return this._div.getBoundingClientRect()
    }

    public kill() {
        this.alive = false
        this._div.remove()
    }
}