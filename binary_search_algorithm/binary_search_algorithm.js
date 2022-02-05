/*
    Given Sorted Array [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

function binarySearch(arrayInput, searchValue) {
    let startReference = 0;
    let endReference = arrayInput.length - 1;
    let medianReference;
    let isSearching = true;
    let foundingIndex = 'Not Found';;

    while(isSearching) {
        [startReference, medianReference, endReference] = calculateBoundaries(startReference, endReference);
        console.log(startReference, "|", medianReference, "|", endReference);

        if (searchValue > arrayInput[endReference]) {
            isSearching = false;
        } else {
            if (searchValue > arrayInput[medianReference]) {
                startReference = medianReference + 1;
            } else if ( searchValue < arrayInput[medianReference]) {
                endReference = medianReference - 1;
            } else {
                if (searchValue === arrayInput[medianReference]) foundingIndex = `Found at index - ${medianReference}`;
                isSearching = false;
            }
        }
    }
    return console.log(foundingIndex);
}

function calculateBoundaries(startIndex, endingIndex) {
    const medianValue = Math.floor((startIndex + endingIndex) / 2);
    return [startIndex, medianValue, endingIndex];
}

binarySearch([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4);