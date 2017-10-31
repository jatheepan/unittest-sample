"use strict";

const plugin = require('./plugin');
const Parent = require('./Parent');
Parent.use(plugin);

let one = new Parent();

console.log(one.getAge());
