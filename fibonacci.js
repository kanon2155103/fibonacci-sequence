'use strict';
var option = function (option, number) {
    if (option === 'fib') {
        fibSequence(number);
    }
    else if (option === 'trib') {
        tribSequence(number);
    }
    else if (option === 'tetra') {
        tetraSequence(number);
    }
    else {
        console.log('Prease select fib or trib or tetra!');
    }
};
var fibSequence = function (n) {
    var num = new Map();
    num.set(0, 0);
    num.set(1, 1);
    var fibonacci = function (n) {
        if (num.has(n)) {
            var value = num.get(n);
            if (value === undefined) {
                throw new Error('num is undefined');
            }
            return value;
        }
        var fib = fibonacci(n - 1) + fibonacci(n - 2);
        num.set(n, fib);
        return fib;
    };
    for (var i = 0; i <= n; i++) {
        console.log(fibonacci(i));
    }
    return NaN;
};
var tribSequence = function (n) {
    var num = new Map();
    num.set(0, 0);
    num.set(1, 0);
    num.set(2, 1);
    var tribonacci = function (n) {
        if (num.has(n)) {
            var value = num.get(n);
            if (value === undefined) {
                throw new Error('num is underined');
            }
            return value;
        }
        var trib = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
        num.set(n, trib);
        return trib;
    };
    for (var i = 0; i <= n; i++) {
        console.log(tribonacci(i));
    }
    return NaN;
};
var tetraSequence = function (n) {
    var num = new Map();
    num.set(0, 0);
    num.set(1, 0);
    num.set(2, 0);
    num.set(3, 1);
    var tetranacci = function (n) {
        if (num.has(n)) {
            return num.get(n);
        }
        var tetra = tetranacci(n - 1) + tetranacci(n - 2) + tetranacci(n - 3) + tetranacci(n - 4);
        num.set(n, tetra);
        return tetra;
    };
    for (var i = 0; i <= n; i++) {
        console.log(tetranacci(i));
    }
    return NaN;
};
option('trib', 19);
