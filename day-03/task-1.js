const data = require('fs')
	.readFileSync('input.txt')
	.toString()
	.split('\n')
    .map(x => [
        x.substring(0, x.length / 2),
        x.substring(x.length / 2)
    ]);


const sum = data.reduce((subtotal, [comp1, comp2]) => {
    const charIndex = comp1.split('').findIndex(x => comp2.includes(x));
    const charCode = comp1.charCodeAt(charIndex);
    const charValue = (charCode - 38) % 58;

    return subtotal + charValue;
}, 0);

console.log(sum);