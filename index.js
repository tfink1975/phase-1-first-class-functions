const { spy } = require("chai");

function receivesAFunction(spy) {
    return spy();
};



function returnsANamedFunction() {
    let fn = function () {

    };
    return fn;
}

function returnsAnAnonymousFunction() {
    return function() {

    };
};

