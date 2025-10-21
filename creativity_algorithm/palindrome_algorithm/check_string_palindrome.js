// Check String Palindrome V2

// palindrome checking
function palindromeDetection(inputString) {
    const arrayInput = inputString.split('');
    const medianIndex = Math.floor((arrayInput.length - 1) / 2);
    
    let arrayLeft;
    let arrayRight;
    let totalAttempt;
    
    // medianIndex Odd Even
    if (arrayInput.length % 2 === 1) {
        console.log("masuk sini")
        arrayLeft = arrayInput.slice(0, medianIndex);
        arrayRight = arrayInput.slice(medianIndex+1, arrayInput.length); 
        
        totalAttempt= medianIndex - 1;
    } else if (arrayInput.length % 2 === 0) {
        console.log("masuk sana")
        arrayLeft = arrayInput.slice(0, medianIndex+1);
        arrayRight = arrayInput.slice(medianIndex+1, arrayInput.length);
        
        totalAttempt= medianIndex;
    }
    
    console.log(medianIndex)
    
    console.log(arrayLeft, '***', arrayRight)
    
    let pointerLeft = 0;
    let pointerRight = (arrayRight.length) - 1;
    let isPalindrome = false;
    
    for (let attempt = 0; attempt <= totalAttempt; attempt++) {
        
        pointerLeft = 0 + attempt;
        pointerRight = ((arrayRight.length) - 1) - attempt;
        
        // console.log(arrayLeft[pointerLeft], '+++', arrayRight[pointerRight])
        console.log(pointerLeft, '###', pointerRight)
        
        if (arrayLeft[pointerLeft] === arrayRight[pointerRight]) {
            isPalindrome = true;
        } else {
            isPalindrome = false;
        }
    }
    
    console.log(isPalindrome)
}

palindromeDetection('AAAAA')


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
