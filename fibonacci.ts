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
	const memo = new Map<number, number>();
	memo.set(0, 0);
	memo.set(1, 1);
	const fib = (n: number): number => {
		if (memo.has(n)) {
			return memo.get(n);

		}
		const value = fib(n - 1) + fib(n -2);
		memo.set(n, value);
		return value;
	}
	for (let i = 0; i <= n; i++) {
		console.log(fib(i));
	}
	return NaN;
}

const tribSequence = (n: number): number => {
	const memo = new Map<number, number>();
	memo.set(0, 0);
	memo.set(1, 0);
	memo.set(2, 1);
	const trib = (n: number): number => {
		if (memo.has(n)) {
			 memo.get(n);
		}
		const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
		memo.set(n, value)
		return value;
	}
	for (let i = 0; i <= n; i++) {
		console.log(trib(i));
		}
	return NaN;

}
const tetraSequence = (n: number): number => {
	const memo = new Map<number, number>();
	memo.set(0, 0);
	memo.set(1, 0);
	memo.set(2, 0);
	memo.set(3, 1);
	const tetra = (n: number): number => {
		if (memo.has(n)) {
			 memo.get(n);
		}
		const value = tetra(n - 1) + tetra(n - 2) + tetra(n - 3) + tetra(n - 4);
		memo.set(n, value)
		return value;
	}
	for (let i = 0; i <= n; i++) {
		console.log(tetra(i));
	}
	return NaN;
}

option('fib', 19);
