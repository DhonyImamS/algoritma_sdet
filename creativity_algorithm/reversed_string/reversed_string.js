// Reverse String

const input = 'ABCDEFGHIJ';

function reverseStr(text) {
    const arrText = text.split('');
    let tempStr = '';
    
    for (const char of arrText) {
        tempStr = char + tempStr;
    }
    
    return tempStr;
}

console.log(reverseStr(input));
