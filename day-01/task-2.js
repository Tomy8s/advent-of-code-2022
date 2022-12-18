const data = require('fs')
	.readFileSync('input.txt')
	.toString()
	.split('\n');
let totals = [];
let subTotal = 0;


for (const value of data) {
	if (value === '') {
		totals = [...totals, subTotal];
		subTotal = 0;
		continue;
	}
	subTotal += Number(value);
}


totals.sort((a,b) => b - a);
const sum = totals.slice(0, 3).reduce((a, n) => a + n, 0);


console.log(sum);
