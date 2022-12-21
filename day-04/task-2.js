const count = require('fs')
	.readFileSync('input.txt')
	.toString()
	.split('\n')
    .map(pair => pair
        .split(',')
        .map(range => range
            .split('-')
            .map(Number)))
    .reduce((count, pair) => count + Number(
        !(pair[0][1] < pair[1][0] || pair[1][1] < pair[0][0])
    ), 0);

console.log(count);
