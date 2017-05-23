function calc(val, func) {

    if (func == undefined) {

        return val;

    } else

        return func(val);

}

function zero(func) {
    return calc(0, func);
}

function one(func) {
    return calc(1, func);
}

function two(func) {
    return calc(2, func);
}

function three(func) {
    return calc(3, func);
}

function four(func) {
    return calc(4, func);
}

function five(func) {
    return calc(5, func);
}

function six(func) {
    return calc(6, func);
}

function seven(func) {
    return calc(7, func);
}

function eight(func) {
    return calc(8, func);
}

function nine(func) {
    return calc(9, func);
}



function plus(val2) {
    return function(val1) {
        return val1 + val2
    };
}

function minus(val2) {
    return function(val1) {
        return val1 - val2
    };
}

function times(val2) {
    return function(val1) {
        return val1 * val2
    };
}

function dividedBy(val2) {
    return function(val1) {
        return val1 / val2
    };
}
