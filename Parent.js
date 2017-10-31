"use strict";

class Run {
    constructor(name) {
        this.name = name;
    }

    getName(){
        return this.name;
    }

    static use(newMethods) {
        Object.assign(Run.prototype, newMethods);
    }
}

module.exports = Run;