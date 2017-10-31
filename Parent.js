"use strict";

class Run {
    getName(){
        return "Theepan";
    }

    static use(newMethods) {
        Object.assign(Run.prototype, newMethods);
    }
}

module.exports = Run;