"use strict";

const request = require("request");

const methods = {
    fetch(id, callback) {
        const url = "https://jsonplaceholder.typicode.com/";
        const addUrl = "posts/1";

        request.get(url + addUrl, (err, res, body) => {
            try {
                body = JSON.parse(body);
            } catch(e) {
                err = e;
                body = null;
            }

            console.log("I got data");

            return callback(err, body);
        });
    }
};

module.exports = methods;