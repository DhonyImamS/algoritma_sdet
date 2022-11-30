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
        
            insertedTargetIndex = null;
            searchProcess = false;
        
        } else if (searchValue > inputArr[medianSortedArrIndex] && searchValue < inputArr[medianSortedArrIndex+1]) {
            
            insertedTargetIndex = medianSortedArrIndex;
            searchProcess = false;
        
        } else if (searchValue < inputArr[medianSortedArrIndex] ) {

            startIndex = 0;
            endingIndex = medianSortedArrIndex - 1;
            
        } else if (searchValue > inputArr[medianSortedArrIndex] ) {

            startIndex = medianSortedArrIndex + 1;
            endingIndex = inputArr.length - 1;
            
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
            sortedArr.splice(idxRef + 1, 0, unsortArr[index]);
        } else {
            sortedArr.splice(idxRef, 0, unsortArr[index]);
        }
        
    }
    
    return sortedArr;
    
}


// const inputArr = [1, 5, 8, 12];

// const result = binarySearchForIndexTobeInserted(inputArr,9)

const inputArr = [24, 13, 99, 72, 2000, 61, 6, 75, 1, 7, 68, 42, 39, 20, 19];

const result = insertionSort(inputArr)

console.log(result);
