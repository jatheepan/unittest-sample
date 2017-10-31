"use strict";

const request = require('request');
const expect = require('chai').expect;
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const mod = require('../mod');

chai.use(sinonChai);

const mockedData = {
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "userId": 1
};
before(done => {
    sinon.stub(request, 'get').yields(null, null, JSON.stringify(mockedData));
    done();
});

after(done => {
    request.get.restore();
    done();
});


describe("Unit testing on index", () => {
    describe('fetch()', () => {

        beforeEach(done => {
            this.callback = sinon.spy();
            mod.fetch(1, this.callback);
            done();
        });

        it('should return some values', done => {
            mod.fetch(1, (err, data) => {
                expect(data).to.have.any.keys('title', 'body', 'id', 'userId');
                done();
            });
        });

        it('should call with', done => {
            expect(this.callback).to.have.been.calledWith(null, mockedData);
            done();
        });

        it('should call once', done => {
            expect(this.callback).callCount(1);
            done();
        })
    });
});