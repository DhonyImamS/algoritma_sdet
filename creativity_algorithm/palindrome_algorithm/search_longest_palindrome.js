/**
 * This is test for finding the longest palindrome on beginning of, middle of and end of text strings
 * hellomynameisannasmith
 * ana
 * anna
 * racecar
 * raceecar
 */

function reverseArr(arrInput) {
    let reverseArr = [...arrInput];
    reverseArr.reverse();
    
    return reverseArr;
}

function findingLongestPalindrome(str) {
    let result = {};
    const arrStr = str.split('');
    const lastIndex = arrStr.length - 1;
    
    for (let index=0; index <= lastIndex; index++) {
        let wordPalindrome = undefined;
        let predictNextWord = undefined;
        let predictNextWord2 = undefined;
        
        for(let pickerChar = index + 1; pickerChar <= lastIndex; pickerChar++) {
            const endPick = pickerChar + 1;
            let mergeArr;
            
            wordPalindrome = arrStr.slice(index, endPick);
            predictNextWord = arrStr.slice(pickerChar, pickerChar + (endPick - index));
            predictNextWord2 = arrStr.slice(pickerChar + 1, pickerChar + (endPick - index) + 1);
            
            // console.log(wordPalindrome, '=======', predictNextWord, '=========', predictNextWord2)
            
            if (wordPalindrome.length > 1 && wordPalindrome.join('') === reverseArr(predictNextWord).join('')) {
                mergeArr = wordPalindrome.concat(predictNextWord.slice(1));
                result[mergeArr.length] = mergeArr.join('');
            } else if (wordPalindrome.length > 1 && wordPalindrome.join('') === reverseArr(predictNextWord2).join('')) {
                mergeArr = wordPalindrome.concat(predictNextWord2);
                result[mergeArr.length] = mergeArr.join('');
            }
        }

    }

    const arrayMaxLength = Math.max(...Object.keys(result));

    console.log(result);

    console.log(result[arrayMaxLength])
}

findingLongestPalindrome('hellomynameisannasmith')