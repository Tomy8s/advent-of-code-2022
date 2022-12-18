const choiceValue = {
    A: 1,
    B: 2,
    C: 3,
    X: 1,
    Y: 2,
    Z: 3,
};

const data = require('fs')
	.readFileSync('input.txt')
	.toString()
	.split('\n')
    .map(x => x.split(' ')
    .map(v => choiceValue[v]));


const score = data.reduce((subTotal, [ opp, me ]) => {
    subTotal += me

    if (opp === me) {
        subTotal += 3;
    } else if (opp % 3 === me - 1) {
        subTotal += 6;
    }

    return subTotal;
}, 0);

console.log(score);
