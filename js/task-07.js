let input;
const CODE_WORD = 'Abrakadabra';

while(input !== CODE_WORD) {

    let input = prompt('Please enter code-word! TIP: typical magic spell via capital.');
    if(input === null) {
        alert('oh, honey, please come back for little magic.');
        break;
    } 

    if(input !== CODE_WORD) {
        alert('WRONG! Use your "Abrakadabra" things to open this ;)');
    } else {
        alert('Welcome! That was you first step!');
        break;
    } 
}