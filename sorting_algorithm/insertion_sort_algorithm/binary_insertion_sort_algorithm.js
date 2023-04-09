function searchInsertedIndex(arrayData, value) {
    const lengthData = arrayData.length;
    let startIndex = 0;
    let lastIndex = lengthData - 1;
    
    let startingSearch = true;
    let foundIndex;
    
    while (startingSearch) {
        
        let medianIndex = Math.floor((lastIndex + startIndex) / 2);
        
        if ( value === arrayData[medianIndex] ) {
            startingSearch = false;
            foundIndex = medianIndex;
        } else if ( value > arrayData[medianIndex] && value < arrayData[medianIndex + 1]) {
            startingSearch = false;
            foundIndex = medianIndex;
        } else if ( value < arrayData[medianIndex] && value > arrayData[medianIndex - 1]) {
            startingSearch = false;
            foundIndex = medianIndex - 1;
        } else if ( value > arrayData[medianIndex] && medianIndex === lastIndex) {
            startingSearch = false;
            foundIndex = medianIndex + 1;
        } else if ( value < arrayData[medianIndex] && medianIndex === startIndex) {
            startingSearch = false;
            foundIndex = medianIndex - 1;
        } else if ( value > arrayData[medianIndex] && medianIndex < lastIndex) {
            startIndex = medianIndex + 1;
        } else if ( value < arrayData[medianIndex] && medianIndex > startIndex) {
            lastIndex = medianIndex - 1;
        }
    }

    return foundIndex;
}
// console.log(searchInsertedIndex([1, 2, 3, 8, 10], 4))

function insertionSort(arrayData) {
    let insertedArr = [arrayData[0]];

    for ( let index = 1; index < arrayData.length; index++ ) {
        
        let sortedArr = [];
        let dataPushed = arrayData[index];
        let insertedIndex = searchInsertedIndex(insertedArr, dataPushed);
        
        sortedArr.push(dataPushed);
        
        if ( insertedIndex < 0 ) {
            sortedArr = sortedArr.concat(insertedArr);
        } else if ( insertedIndex >= insertedArr.length ) {
            sortedArr = insertedArr.concat(sortedArr);
        } else {
            sortedArr = insertedArr.slice(0, insertedIndex+1).concat(sortedArr, insertedArr.slice(insertedIndex+1, insertedArr.length));
        }
        
        insertedArr = [...sortedArr];
        
    }
    
    return insertedArr;
    
}


// const inputArr = [1, 5, 8, 12];

// const result = binarySearchForIndexTobeInserted(inputArr,9)

const inputArr = [1, 1, 2, 1, 2,  1, 2,  1, 2,  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,  1, 1, 1, 2,  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10000, 24, 7599, 13, 10000, 99, 72, 2000, 61, 6, 75, 7, 1, 7, 68, 42, 39, 20, 19,7];

const result = insertionSort(inputArr)

console.log(result);
