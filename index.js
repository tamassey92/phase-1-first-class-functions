function receivesAFunction(cb) {
    return cb()
}

function returnsANamedFunction() {
    return function fn() {
        console.log("");
    } 
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("");
    } 
}
