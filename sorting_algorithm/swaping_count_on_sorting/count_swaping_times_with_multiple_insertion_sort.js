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

function devideInsertionSortProcess(unsortArr) {
    
    const medianIndex = Math.floor(unsortArr.length / 2);

    const arr1 = unsortArr.slice(0, medianIndex), arr2 = unsortArr.slice(medianIndex, unsortArr.length);

    return [arr1, arr2];
}

function merge(arr1, arr2) {
    
    // console.log(arr1 + ' -------- ' + arr2)
    
    const resultMerge = [];
    let lengthRecursive = arr1.length + arr2.length;
    let leftPointer = 0;
    let rightPointer = 0;
    
    for (let index = 0; index < lengthRecursive; index++) {
        
        // console.log(leftPointer + ' -------- ' + rightPointer)
        if (leftPointer !== arr1.length || rightPointer !== arr2.length) {
            if (arr1[leftPointer] === undefined) {
            
                resultMerge.push(arr2[rightPointer]);
                rightPointer++;
            } else if (arr2[rightPointer] === undefined) {
                
                resultMerge.push(arr1[leftPointer]);
                leftPointer++;
            } else if (parseInt(arr1[leftPointer]) < parseInt(arr2[rightPointer])) {
                
                resultMerge.push(arr1[leftPointer]);
                leftPointer++;
            } else if (parseInt(arr1[leftPointer]) > parseInt(arr2[rightPointer])) {
                
                resultMerge.push(arr2[rightPointer]);
                rightPointer++;
            } else if (arr1[leftPointer] === arr2[rightPointer] && (arr1[leftPointer] && arr2[rightPointer])) {
                
                resultMerge.push(arr1[leftPointer]);
                resultMerge.push(arr2[rightPointer]);
                rightPointer++;
                leftPointer++;
            }
        }
        
    }
    
    return resultMerge;
    
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

    if (arr.length === 0) return sortedArr;
    
    sortedArr.push(arr[0]);
    
    for (let idx = 1; idx < arr.length; idx++) {

        const indexInsert = binarySearchForIndexTobeInserted(sortedArr, arr[idx])
        const shiftValue = countSwap(sortedArr, indexInsert, arr[idx])
        
        sortedArr = insertValueToArr(sortedArr, indexInsert, arr[idx])
        timeSwap = timeSwap + shiftValue;

        // console.log(sortedArr);
        // console.log(tempShift);
    }
    
    // if (JSON.stringify(sortedArr) === JSON.stringify(arr)) return 0;

    // return timeSwap;
    
    return sortedArr;
}


function process_start(arr) {
    let sortArrLeft;
    let sortArrRight;

    if (arr.length < 2) return arr;

    console.log('======== process ======== ', arr);

    const [arrLeft, arrRight] = devideInsertionSortProcess(arr);

    console.log(arrLeft, " ========== ", arrRight);

    sortArrLeft = insertionSort(arrLeft);

    sortArrRight = insertionSort(arrRight);

    console.log(sortArrLeft, " +++++++++++ ", sortArrRight);

    let resultArr = merge(process_start(sortArrLeft), process_start(sortArrRight));

    return resultArr;
}

console.log(process_start([5,  1,  6, 11, 14, 15, 12]))

// console.log(insertionSort([5,  1,  6, 11,12, 14, 15]))


// 2,1, 3, 1, 2

// 1 2 3 1 2 --> 1

// 1 1 2 3 2 --> 2

// 1 1 2 2 3 --> 1

// 2,1, 3,    1, 2