'use strict';
const option = (option: string, number: number) => {
	if (option === 'fib') {
		fibSequence(number);
	} else if (option === 'trib') {
		tribSequence(number);
	} else if (option === 'tetra') {
		tetraSequence(number);
	} else {
		console.log('Prease select fib or trib or tetra!');
	}
}

const fibSequence = (n: number): number => {
	const num = new Map<number, number>();
	num.set(0, 0);
	num.set(1, 1);
	const fibonacci = (n: number): number => {
		if (num.has(n)) {
			const value =  num.get(n);
			if (value === undefined) {
				throw new Error('num is undefined')
			}
			return value;
		}
		const fib = fibonacci(n - 1) + fibonacci(n -2);
		num.set(n, fib);
		return fib;
	}
	for (let i = 0; i <= n; i++) {
		console.log(fibonacci(i));
	}
	return NaN;
}

const tribSequence = (n: number): number => {
	const num = new Map<number, number>();
	num.set(0, 0);
	num.set(1, 0);
	num.set(2, 1);
	const tribonacci = (n: number): number => {
		if (num.has(n)) {
			const value = num.get(n);
			if (value === undefined) {
				throw new Error ('num is underined');
			}
			return value;
		}
		const trib = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
		num.set(n, trib);
		return trib;
	}
	for (let i = 0; i <= n; i++) {
		console.log(tribonacci(i));
		}
	return NaN;

}
const tetraSequence = (n: number): number => {
	const num = new Map<number, number>();
	num.set(0, 0);
	num.set(1, 0);
	num.set(2, 0);
	num.set(3, 1);
	const tetranacci = (n: number): number => {
		if (num.has(n)) {
			return num.get(n)!;
		}
		const tetra = tetranacci(n - 1) + tetranacci(n - 2) + tetranacci(n - 3) + tetranacci(n - 4);
		num.set(n, tetra);
		return tetra;
	}
	for (let i = 0; i <= n; i++) {
		console.log(tetranacci(i));
	}
	return NaN;
}

option('fib', 19);
