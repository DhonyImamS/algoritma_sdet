function atomicElementSort(arr1, arr2) {
    let memorizeArray = [];
    let pointer1 = 0;
    let pointer2 = 0;
    const arrLength1 = arr1.length;
    const arrLength2 = arr2.length;

    // Run merge sort algorithm
    for (let index = 0; index < (arrLength2 + arrLength1); index++) {

        if (pointer1 !== arrLength1 || pointer2 !== arrLength2) {
            if (arr1[pointer1] === undefined) {
                memorizeArray.push(arr2[pointer2]);
                pointer2++;
            } else if (arr2[pointer2] === undefined) {
                memorizeArray.push(arr1[pointer1]);
                pointer1++;
            } else if (arr1[pointer1] <= arr2[pointer2]) {
                memorizeArray.push(arr1[pointer1]);
                pointer1++;
            } else if (arr1[pointer1] > arr2[pointer2]) {
                memorizeArray.push(arr2[pointer2]);
                pointer2++;
            }
        }
    }
    return memorizeArray;
}

function sortArrayWithRemoveDuplicates(inputArr) {
    let sortedResult = [];
    let array1 = [];
    let array2 = [];
    let uniqueArray = [];

    // processing remove duplicate
    for (let index = 0; index < inputArr.length; index++) {
        if (!uniqueArray.includes(inputArr[index])) uniqueArray.push(inputArr[index]);
    }

    let boundariesIndex = Math.floor(uniqueArray.length / 2);

    // recursive side 1
    for (let idx = 0; idx < boundariesIndex; idx++) {
        let tempArr = [];
        tempArr.push(uniqueArray[idx]);
        array1 = atomicElementSort(array1, tempArr);
    }

    // recursive side 2
    for (let idx = boundariesIndex; idx < uniqueArray.length; idx++) {
        let tempArr = [];
        tempArr.push(uniqueArray[idx]);
        array2 = atomicElementSort(array2, tempArr);
    }

    sortedResult = atomicElementSort(array1, array2);
    console.log(sortedResult);
}

sortArrayWithRemoveDuplicates([9, 9, 9, 8, 6, 6, 3, 81, 8, 2, 1, 5, 19])