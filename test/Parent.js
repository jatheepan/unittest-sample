"use strict";

const chai = require('chai');
const expect = chai.expect;
const Run = require('../Parent');

describe('class Run from Parent', () => {
    const args = ['Theepan'];
    let instance = null;

    before(done => {
        instance = new Run(...args);
        done();
    });

    it('Get the name', () => {
        const name = instance.getName();

        expect(name).to.be.a('string');
        expect(name).to.equal(args[0]);
    });
});