"use strict";

const plugin = require('./plugin');
const Parent = require('./Parent');
Parent.use(plugin);

let one = new Parent();

one.getEverything().catch(item => console.log(item));


// console.log(one.getAge());
