// Quick Sort Algorithm

function searchBinaryInsertedIndex(arrInput, value) {
    let startIndex = 0;
    let endIndex = arrInput.length - 1;
    
    let searchMode = true;
    let targetInsertIndex;
    
    while(searchMode) {
        
        let medianIndex = Math.floor((startIndex + endIndex ) / 2);
        
        if ( value > arrInput[endIndex]) {
            targetInsertIndex = endIndex;
            searchMode = false;
        } else if ( value < arrInput[startIndex]) {
            targetInsertIndex = startIndex;
            searchMode = false;
        } else if ( value === arrInput[medianIndex]) {
            targetInsertIndex = medianIndex;
            searchMode = false;
        } else if ( value > arrInput[startIndex] && value < arrInput[startIndex+1]) {
            targetInsertIndex = startIndex;
            searchMode = false;
        } else if ( value < arrInput[endIndex] && value > arrInput[endIndex-1]) {
            targetInsertIndex = endIndex-1;
            searchMode = false;
        } else if ( value < arrInput[medianIndex]) {
            endIndex = medianIndex - 1;
        } else if ( value > arrInput[medianIndex]) {
            startIndex = medianIndex + 1;
        }
    }
    
    return targetInsertIndex;
}

function insertMergeSortArr(inputSortArr, value) {
    let arr1;
    let arr2;
    let result;
    const insertTargetIndex = searchBinaryInsertedIndex(inputSortArr, value);
    
    
    if (value < inputSortArr[insertTargetIndex]) {
        
        arr1 = inputSortArr.slice(0, insertTargetIndex);
        arr2 = inputSortArr.slice(insertTargetIndex, inputSortArr.length);
        result = arr1.concat([value]).concat(arr2);
        
    } else if (value >= inputSortArr[insertTargetIndex]) {
        
        arr1 = inputSortArr.slice(0, insertTargetIndex+1);
        arr2 = inputSortArr.slice(insertTargetIndex+1, inputSortArr.length);
        result = arr1.concat([value]).concat(arr2);
    }
    
    return result;
}


function quickSort(unsortArr) {
    let baseArr = [];
    let arrRight = [];
    let arrLeft = [];
    let resultArr;
    let value;
    
    baseArr.push(unsortArr[0]);
    
    for (let index = 1; index < unsortArr.length; index++) {
        
        value = unsortArr[index];
        
        if ( value < baseArr[0]) {
            
            if (arrLeft.length > 0) {
                arrLeft = insertMergeSortArr(arrLeft, value);
            } else {
                arrLeft.push(value);
            }
        } else if ( value >= baseArr[0]) {
            
            if (arrRight.length > 0) {
                arrRight = insertMergeSortArr(arrRight, value);
            } else {
                arrRight.push(value);
            }
        }
        
        
    }
    
    resultArr = arrLeft.concat(baseArr).concat(arrRight);
    
    return resultArr;
}

const inputArr = [1, 1, 2, 1, 2,  1, 2,  1, 2,  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,  1, 1, 1, 2,  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10000, 24, 7599, 13, 10000, 99, 72, 2000, 61, 6, 75, 7, 1, 7, 68, 42, 39, 20, 19,7];

console.log(quickSort(inputArr))


