"use strict";

class Run {
    constructor(name) {
        this.name = name;
    }

    getName(){
        return this.name;
    }

    getEverything() {
        return Promise.reject(new Error("Something cool"));
    }

    static use(newMethods) {
        Object.assign(Run.prototype, newMethods);
    }

    getUser() {
      // return Promise.reject(new Error ('Something went wront'));
      return new Promise((resolve, reject) => {
        reject( new Error( "Something wont terriblly wrong!"));
      })
    }
}

module.exports = Run;
