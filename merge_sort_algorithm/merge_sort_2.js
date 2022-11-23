function merge(arr1, arr2) {
    
    // console.log(arr1 + ' -------- ' + arr2)
    
    const resultMerge = [];
    let lengthRecursive = arr1.length + arr2.length;
    let leftPointer = 0;
    let rightPointer = 0;
    
    for (let index = 0; index < lengthRecursive; index++) {
        
        // console.log(leftPointer + ' -------- ' + rightPointer)
        
        if (arr1[leftPointer] && !arr2[rightPointer]) {
            
            resultMerge.push(arr1[leftPointer]);
            leftPointer++;
        } else if (!arr1[leftPointer] && arr2[rightPointer]) {
            
            resultMerge.push(arr2[rightPointer]);
            rightPointer++;
        } else if (arr1[leftPointer] < arr2[rightPointer]) {
            
            resultMerge.push(arr1[leftPointer]);
            leftPointer++;
        } else if (arr1[leftPointer] > arr2[rightPointer]) {
            
            resultMerge.push(arr2[rightPointer]);
            rightPointer++;
        }
        
    }
    
    return resultMerge;
    
}

function divideArr(arr) {
    const lengthArr = arr.length;
    const medianArr = (lengthArr % 2) === 0 ? (lengthArr/2) : (lengthArr/2) + 1;
    
    const arr1 = arr.slice(0, medianArr);
    const arr2 = arr.slice(medianArr, lengthArr);
    
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

// console.log(merge([1,2,5], [3,4,6]))

// divideArr([1,3,4,5,6])


console.log(recursiveMergeSort([2,5,1,3,6,90,7,23,4]))