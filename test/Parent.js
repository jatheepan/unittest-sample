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

    it('gives you a promise reject', () => {
      instance.getUser().catch( error => {
        expect( error ).is.not.ok;
      });
    });

});
