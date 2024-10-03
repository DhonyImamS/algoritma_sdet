/*
    Given Sorted Array [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

function binarySearch(sortedNumsArr, searchNumber) {
    let isSearchFinish = false;
    let startIdx = 0;
    let endIdx = sortedNumsArr.length - 1;
    
    function getMedianIdx(startIdx, endIdx) {
        return Math.floor((startIdx + endIdx) / 2);
    }
    
    while (!isSearchFinish) {
        const medianIndex = getMedianIdx(startIdx, endIdx);
        
        if (searchNumber === sortedNumsArr[medianIndex]) {
            console.log(`Number already Found`);
            isSearchFinish = true;
        } else if ( searchNumber > sortedNumsArr[medianIndex]) {
            if (searchNumber <= sortedNumsArr[medianIndex + 1]) {
                startIdx = medianIndex;    
            } else {
                console.log(`Number not Found`);
                isSearchFinish = true;
            }
        } else if ( searchNumber < sortedNumsArr[medianIndex]) {
            if (searchNumber >= sortedNumsArr[medianIndex - 1]) {
                endIdx = medianIndex;
            } else {
                console.log(`Number not Found`);
                isSearchFinish = true;
            }
        } 
    }
}

binarySearch([1, 2, 3, 4, 5, 6, 8, 10], 0)
