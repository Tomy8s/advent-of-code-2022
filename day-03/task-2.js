const data = require('fs')
	.readFileSync('input.txt')
	.toString()
	.split('\n')
    .reduce((groups, _, i, all) => {
        if (i % 3 === 0) {
            groups.push([ all[i], all[i + 1], all[i + 2] ]);
        }

        return groups;
    }, []);


const sum = data.reduce((subtotal, packs) => {
    const charIndex = packs[0]
        .split('')
        .findIndex(x =>
            packs[1].includes(x) &&
            packs[2].includes(x)
        );
    const charCode = packs[0].charCodeAt(charIndex);
    const charValue = (charCode - 38) % 58;

    return subtotal + charValue;
}, 0);

console.log(sum);