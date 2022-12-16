const data = require('fs')
	.readFileSync('input.txt')
	.toString()
	.split('\n');
let max = 0;
let subTotal = 0;

for (const value of data) {
	if (value === '') {
		max = subTotal > max ? subTotal : max;
		subTotal = 0;
		continue;
	}
	subTotal += Number(value);
}

console.log(max);

