// Zadanie 1

const foo = 'Hello';
const bar = 'World';

console.log(`${foo} ${bar}`);

// Zadanie 2

const multiply = (x, y = 1) => {return x * y};

console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(89));

// Zadanie 3

const average = (...args) => {
	let sum = 0;
	args.forEach(arg => sum += arg);
	return sum / args.length;
}

console.log(average(1)); // 1
console.log(average(1, 3)); // 2
console.log(average(1, 3, 6, 6)); // 4
console.log(average(6658, 13589, 896588, 0, 78451258)); // 15873618.6

// Zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

// Zadanie 5

const data = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname] = data;

console.log(firstname);
console.log(lastname);