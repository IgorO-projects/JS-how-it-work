
toUpperCase
let input = 'abRaKADabRa';
let final = ''

console.log('before cycle "for":', input);

for(let i = 0; i < input.length; i++) { // -> i += 1, i = i +1.
    if(i === 0) {
        final += input[i].toUpperCase();
        console.log('cycle "for":', input[i].toUpperCase());
        continue;
    }
    final += input[i].toLowerCase();
} 
console.log('after cycle "for":', final);

// ******************************************************************************
