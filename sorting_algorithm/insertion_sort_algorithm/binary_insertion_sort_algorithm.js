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

        } else if (searchValue < inputArr[startIndex]) {

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

// insertion sort with input unsort no duplicate value
function insertionSort(unsortArr) {
    let sortedArr = [];
    let reference = {};
    
    sortedArr.push(unsortArr[0]);
    
    for (let index = 1; index < unsortArr.length; index++) {
        let array1, array2;

        // set the reference from sortedArr
        let targetInsertedIndex = binarySearchForIndexTobeInserted(sortedArr,unsortArr[index]);

        if (targetInsertedIndex != null) {
            reference = {
                idxRef: targetInsertedIndex,
                valueRef: sortedArr[targetInsertedIndex]
            };
        }
        
        const { idxRef, valueRef } = reference;
        
        
        if (unsortArr[index] >= valueRef) {
            
            array1 = sortedArr.slice(0, idxRef + 1);
            array2 = sortedArr.slice(idxRef + 1, sortedArr.length);

            sortedArr = array1.concat(unsortArr[index]).concat(array2);
        } else {
            
            array1 = sortedArr.slice(0, idxRef);
            array2 = sortedArr.slice(idxRef, sortedArr.length);

            sortedArr = array1.concat(unsortArr[index]).concat(array2);
        }
        
    }
    
    return sortedArr;
    
}


// const inputArr = [1, 5, 8, 12];

// const result = binarySearchForIndexTobeInserted(inputArr,9)

const inputArr = [1, 1, 2, 1, 2,  1, 2,  1, 2,  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,  1, 1, 1, 2,  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10000, 24, 7599, 13, 10000, 99, 72, 2000, 61, 6, 75, 7, 1, 7, 68, 42, 39, 20, 19,7];

const result = insertionSort(inputArr)

console.log(result);
