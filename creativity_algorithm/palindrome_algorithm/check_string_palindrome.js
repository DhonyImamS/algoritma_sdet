// Check String Palindrome

// const input='dANADE';
const input = 'abccbaabccbaabccbaabccbaabccbaabccbaabccbaabccbaabccbaabccbaabccbaabccbaabccbaabccbaabccba'

function palindromeChecker(textInput) {
    const arrText = textInput.toLowerCase().split('');
    const isEven = arrText.length % 2 === 0 ? true : false;
    const medianIndex = isEven ? Math.floor((arrText.length - 1) / 2 ) : Math.floor(arrText.length / 2 );
    
    // checking palindrome
    let isPalindrome = false;
    
    if (arrText.length > 1) {
        const maximumLoop = isEven ? medianIndex : medianIndex - 1;
        
        for (let i = 0; i <= maximumLoop; i++) {
            
            const pointer1 = i;
            const pointer2 = (arrText.length - 1) - i;
            
            console.log(arrText[pointer1]+" "+pointer1+" "+arrText[pointer2])
            
            if (arrText[pointer1] === arrText[pointer2]) {
                isPalindrome = true;
            } else {
                isPalindrome = false;
                break;
            }
            
        }
    }
    return isPalindrome;
}

console.log(palindromeChecker(input))
