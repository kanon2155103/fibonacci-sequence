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
    var memo = new Map();
    memo.set(0, 0);
    memo.set(1, 1);
    var fib = function (n) {
        if (memo.has(n)) {
            return memo.get(n);
        }
        var value = fib(n - 1) + fib(n - 2);
        memo.set(n, value);
        return value;
    };
    for (var i = 0; i <= n; i++) {
        console.log(fib(i));
    }
    return NaN;
};
var tribSequence = function (n) {
    var memo = new Map();
    memo.set(0, 0);
    memo.set(1, 0);
    memo.set(2, 1);
    var trib = function (n) {
        if (memo.has(n)) {
            return memo.get(n);
        }
        var value = trib(n - 1) + trib(n - 2) + trib(n - 3);
        memo.set(n, value);
        return value;
    };
    for (var i = 0; i <= n; i++) {
        console.log(trib(i));
    }
    return NaN;
};
var tetraSequence = function (n) {
    var memo = new Map();
    memo.set(0, 0);
    memo.set(1, 0);
    memo.set(2, 0);
    memo.set(3, 1);
    var tetra = function (n) {
        if (memo.has(n)) {
            return memo.get(n);
        }
        var value = tetra(n - 1) + tetra(n - 2) + tetra(n - 3) + tetra(n - 4);
        memo.set(n, value);
        return value;
    };
    for (var i = 0; i <= n; i++) {
        console.log(tetra(i));
    }
    return NaN;
};
option('fib', 86);
