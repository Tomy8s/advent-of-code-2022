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
    .map(x => {
        const [ oppChoice, outcome ] = x.split(' ');

        const opp = choiceValue[oppChoice];
        const me = (opp + choiceValue[outcome]) % 3 + 1;

        return [ opp, me ];
    });


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
