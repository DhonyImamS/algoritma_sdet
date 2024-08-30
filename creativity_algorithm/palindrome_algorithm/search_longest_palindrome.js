// searching Palindrome in String

/**
 * This is test for finding the longest palindrome on beginning of, middle of and end of text strings
 * hellomynameisannasmith
 * ana
 * anna
 * racecar
 * raceecar
 */

const wordInput = 'hellomynameisannasmith';

function scanPalindrome(words, startIdx, endIdx) {
    const texts = words.slice(startIdx, (endIdx + 1));
    const isEven = texts.length % 2 === 0 ? true : false;
    const medianIndex = isEven ? Math.floor((texts.length - 1) / 2) : Math.floor(texts.length / 2);
    const maximumLoop = isEven ? medianIndex : medianIndex - 1;
    
    
    let isPalindrome = false;
    let pointer1 = 0;
    let pointer2 = texts.length - 1;
    
    for (let index = 0; index <= maximumLoop; index++) {
        pointer1 = index;
        pointer2 = pointer2 - index;
        
        if (texts[pointer1] === texts[pointer2]) {
            isPalindrome = true;
        } else {
            isPalindrome = false;
            break;
        }
    }
    
    if (isPalindrome) {
        const result = {
            len: texts.length,
            word: texts.join('')
        };
        
        console.log(result)
        
        return result;
    }
    
}

function getLongestPalindrome(word) {
    const textArr = word.split('');
    const resultScan = {};
    
    // scan palindrome
    for (let char = 0; char < textArr.length; char++) {
        
        for (let endChar = textArr.length - 1; endChar > char; endChar--) {
            const res = scanPalindrome(textArr, char, endChar);
            
            if (res) {
                resultScan[res.len] = res.word;
            }
        }
    }
    
    console.log(resultScan)
    
}

getLongestPalindrome(wordInput)
