function binarySearchForIndexTobeInserted(inputArr, searchValue) {
    let insertedTargetIndex = null;
    let startIndex = 0;
    let endingIndex = inputArr.length - 1;
    
    let searchProcess = true;
    
    while(searchProcess) {

        let medianSortedArrIndex = Math.floor((startIndex + endingIndex) / 2);
        
        // searching process
        if (searchValue > inputArr[endingIndex]) {

            insertedTargetIndex = endingIndex;
            searchProcess = false;

        } else if (searchValue <= inputArr[startIndex]) {

            insertedTargetIndex = startIndex;
            searchProcess = false;
            
        } else if (searchValue === inputArr[medianSortedArrIndex]) {
        
            insertedTargetIndex = medianSortedArrIndex - 1;
            searchProcess = false;
        
        } else if (searchValue > inputArr[medianSortedArrIndex] && searchValue < inputArr[medianSortedArrIndex+1]) {
            
            insertedTargetIndex = medianSortedArrIndex;
            searchProcess = false;
        
        } else if (searchValue < inputArr[medianSortedArrIndex] ) {

            endingIndex = medianSortedArrIndex - 1;
            
        } else if (searchValue > inputArr[medianSortedArrIndex] ) {

            startIndex = medianSortedArrIndex + 1;
            
        }
        
    }

    return insertedTargetIndex;
}

function countSwap(sortedArr, indexInsert, valueToBeInsert) {
    const lengthArr = sortedArr.length;
    const lastIndex = lengthArr - 1;
    const refValue = sortedArr[indexInsert];
    
    let swapTimes = 0;
    
    if ( valueToBeInsert >= refValue ) {
        swapTimes = lastIndex - indexInsert;
    } else if ( valueToBeInsert < refValue ) {
        swapTimes = lastIndex - indexInsert + 1;
    }
    
    return swapTimes;
}

function insertValueToArr(sortedArr, indexInsert, value) {
    let arrLeft;
    let arrRight;
    let resultArr;

    if (value >= sortedArr[indexInsert]) {
            
        arrLeft = sortedArr.slice(0, indexInsert + 1);
        arrRight = sortedArr.slice(indexInsert + 1, sortedArr.length);

        resultArr = arrLeft.concat([value]).concat(arrRight);
    } else {
        
        arrLeft = sortedArr.slice(0, indexInsert);
        arrRight = sortedArr.slice(indexInsert, sortedArr.length);

        resultArr = arrLeft.concat([value]).concat(arrRight);
    }

    return resultArr;
}

/*
 * Complete the 'insertionSort' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function insertionSort(arr) {
    // Write your code here
    let sortedArr = [];
    let timeSwap = 0;
    
    sortedArr.push(arr[0]);
    
    for (let idx = 1; idx < arr.length; idx++) {

        const indexInsert = binarySearchForIndexTobeInserted(sortedArr, arr[idx])
        const shiftValue = countSwap(sortedArr, indexInsert, arr[idx])
        
        sortedArr = insertValueToArr(sortedArr, indexInsert, arr[idx])
        timeSwap = timeSwap + shiftValue;

        // console.log(sortedArr);
        // console.log(tempShift);
    }
    
    if (JSON.stringify(sortedArr) === JSON.stringify(arr)) return 0;
    
    return timeSwap;
}

console.log(insertionSort([5,  1,  6, 11,12, 14, 15]))


// 2,1, 3, 1, 2

// 1 2 3 1 2 --> 1

// 1 1 2 3 2 --> 2

// 1 1 2 2 3 --> 1

// 2,1, 3,    1, 2