function mergeSort(sortArr1, sortArr2) {
    let pointerLeftArr = 0;
    let pointerRightArr = 0;
    let mergeSortArray = [];
    const totalLength = sortArr1.length + sortArr2.length;
    
    for(let attempt = 0; attempt < totalLength; attempt++) {
        
        if (!sortArr1[pointerLeftArr] && sortArr2[pointerRightArr]) {
            mergeSortArray.push(sortArr2[pointerRightArr]);
            pointerRightArr++;
        } else if (sortArr1[pointerLeftArr] && !sortArr2[pointerRightArr]) {
            mergeSortArray.push(sortArr1[pointerLeftArr]);
            pointerLeftArr++;
        } else if (sortArr1[pointerLeftArr] < sortArr2[pointerRightArr]) {
            mergeSortArray.push(sortArr1[pointerLeftArr]);
            pointerLeftArr++;
        } else if (sortArr1[pointerLeftArr] > sortArr2[pointerRightArr]) {
            mergeSortArray.push(sortArr2[pointerRightArr]);
            pointerRightArr++;
        } 
    }
    
    return mergeSortArray;
}

function divide(arrInput) {
        const lengthArr = arrInput.length;
        const medianArr = (lengthArr % 2) === 0 ? (lengthArr/2) : (lengthArr/2) + 1;
        
        const arr1 = arrInput.slice(0, medianArr);
        const arr2 = arrInput.slice(medianArr, lengthArr);
        
        // console.log(arr1 + ' -------- ' + arr2)
        
        return [arr1, arr2];
}

function mySort(unsortArr) {
    if (unsortArr.length < 2) {
        return unsortArr;
    }
    
    const [arr1, arr2] = divide(unsortArr);
    
    const result = mergeSort(mySort(arr1), mySort(arr2));
    
    return result
}

/*
 * Complete the 'closestNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function closestNumbers(arrInput) {
    // Write your code here
    
    let arr = mySort(arrInput);
    let arrClosest = [];
    let minimumValue = 0;
    let deltaValue;
    
    for(let index = 0; index < arr.length - 1; index++) {
        let nextIndex = index+1;
        
        deltaValue = Math.abs(arr[index] - arr[nextIndex]);
        
        if (index === 0) minimumValue = deltaValue;
        
        if (deltaValue < minimumValue) {
            arrClosest = [];
            minimumValue = deltaValue;
                
            arrClosest.push(arr[index]);
            arrClosest.push(arr[nextIndex]);
        } else if (deltaValue === minimumValue) {
            arrClosest.push(arr[index]);
            arrClosest.push(arr[nextIndex]);
        }
    }
    
    return arrClosest;
}