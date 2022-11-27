const fs = require('fs');
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
            } else if (parseInt(arr1[pointer1]) <= parseInt(arr2[pointer2])) {
                memorizeArray.push(arr1[pointer1]);
                pointer1++;
            } else if (parseInt(arr1[pointer1]) > parseInt(arr2[pointer2])) {
                memorizeArray.push(arr2[pointer2]);
                pointer2++;
            } else if (arr1[leftPointer] === arr2[rightPointer] && (arr1[leftPointer] && arr2[rightPointer])) {
                memorizeArray.push(arr1[leftPointer]);
                memorizeArray.push(arr2[rightPointer]);
                pointer2++;
                pointer1++;
            }
        }
    }
    return memorizeArray;
}

// in case you need recursive pattern
const mergeSort = arr => {
    if (arr.length < 2){
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return atomicElementSort(mergeSort(left), mergeSort(right));
};

 // sorted for traditional way
const sortArrayWithRemoveDuplicates = inputArr => {
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

function mergeSortBigData() {
    fs.readFile('./input.txt', 'utf8', (err, data) => {
        const inputBigArray = data.split('\n');
        const output = mergeSort(inputBigArray);
        console.log(output);

        const file = fs.createWriteStream('output.txt');
        output.forEach( dataElement => {
            file.write(dataElement + '\n');
        });
        file.end();
    });
}

// sortArrayWithRemoveDuplicates([9, 9, 9, 8, 6, 6, 3, 81, 8, 2, 1, 5, 19])

// mergeSort([23, 4, 67, 32, 1, 7, 56, 5, 89]);

// mergeSortBigData();