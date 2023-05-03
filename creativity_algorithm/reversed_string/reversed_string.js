/***
 * Create a reverse string function Example case : String : “Hello World” Output : “olleH dlroW”
**/

function scanBackwardString(inputString) {
    const backwardStringArr = [];
    const inputWord = inputString.split(' ');
    
    for (let idx = 0; idx < inputWord.length; idx++ ) {
        const lengthInputString = inputWord[idx].split('').length;
    
        for (let index = lengthInputString - 1 ; index >= 0; index--) {
            backwardStringArr.push(inputWord[idx][index]);
        }
        
        backwardStringArr.push(' ')
    }
    
    
    console.log(backwardStringArr.join(''))
}

scanBackwardString('Hello World')