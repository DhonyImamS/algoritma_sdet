const fs = require('fs');
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

function divideArr(arr) {
    // const lengthArr = arr.length;
    const medianArr = Math.floor(arr.length / 2);
    
    const arr1 = arr.slice(0, medianArr);
    const arr2 = arr.slice(medianArr, arr.length);
    
    // console.log(arr1 + ' -------- ' + arr2)
    
    return [arr1, arr2];
}


function recursiveMergeSort(inputArr) {
    if (inputArr.length < 2){
        return inputArr;
    }
    
    let resultSort;
    const [ arrLeft, arrRight ] = divideArr(inputArr);
    
    resultSort = merge(recursiveMergeSort(arrLeft), recursiveMergeSort(arrRight))
    
    return resultSort;
}

function mergeSortBigData() {
    fs.readFile('./sorting_algorithm/merge_sort_algorithm/input.txt', 'utf8', (err, data) => {
        const inputBigArray = data.split(' ');
        const output = recursiveMergeSort(inputBigArray);
        const medianIndex = Math.floor(output.length / 2);

        console.log(medianIndex);
        console.log(output[medianIndex]);
        console.log(output);

        const file = fs.createWriteStream('./sorting_algorithm/merge_sort_algorithm/output.txt');
        output.forEach( dataElement => {
            file.write(dataElement + '\n');
        });
        file.end();
    });
}

mergeSortBigData()

// console.log(merge([1,2,5], [3,4,6]))

// divideArr([1,3,4,5,6])


// console.log(recursiveMergeSort([2,5,1,3,6,90,7,23,4]))