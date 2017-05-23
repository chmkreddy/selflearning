function add(n) {
    // Let the currying begin!
    function innerFunction(x) {
        return add(n + x);
    };
    innerFunction.valueOf = function() {
        return n;
    }
    return innerFunction;
}
