function isArrSortedAsc(arrInput) {
    
    let sortedArr = [...arrInput];
    let isSorted = false;

    sortedArr.sort((a,b) => a-b);

    console.log('====>', arrInput);
    console.log('====>', sortedArr);
    
    if (sortedArr.join('') === arrInput.join('')) isSorted = true;
    
    return isSorted;
}

function getIndexInsrtAndShiftVal(sortedArr, valueTobeInsert) {
    let insertedIndex = null;
    let shiftVal = 0;
    let lastIndex = sortedArr.length - 1;

    if (sortedArr.length === 1) {
        insertedIndex = 0;
        if (valueTobeInsert < sortedArr[0]) shiftVal++;

        return {
            shiftValue: shiftVal,
            indexInsert: insertedIndex
        }
    }
    
    for(let index = lastIndex; index >= 0; index--) {
        let valueRef = sortedArr[index];

        if (valueTobeInsert >= valueRef) {
            insertedIndex = index;

            index = -1;

            return {
                shiftValue: shiftVal,
                indexInsert: insertedIndex
            }
        } else if (valueTobeInsert < valueRef && index === 0) {
            insertedIndex = index;
            shiftVal++;

            index = -1;

            return {
                shiftValue: shiftVal,
                indexInsert: insertedIndex
            }
        }

        shiftVal++;
    }
}

function insertValueToArr(sortedArr, indexInsert, value) {
    let arrLeft;
    let arrRight;
    let resultArr;

    if (value >= sortedArr[indexInsert]) {
            
        arrLeft = sortedArr.slice(0, indexInsert + 1);
        arrRight = sortedArr.slice(indexInsert + 1, sortedArr.length);

        resultArr = arrLeft.concat([value]).concat(arrRight);
    } else {
        
        arrLeft = sortedArr.slice(0, indexInsert);
        arrRight = sortedArr.slice(indexInsert, sortedArr.length);

        resultArr = arrLeft.concat([value]).concat(arrRight);
    }

    return resultArr;
}

/*
 * Complete the 'insertionSort' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function insertionSort(arr) {
    // Write your code here
    let tempShift = [];
    let sortedArr = [];

    // if(isArrSortedAsc(arr)) return 0;
    
    sortedArr.push(arr[0]);
    
    for (let idx = 1; idx < arr.length; idx++) {
        const { shiftValue, indexInsert } = getIndexInsrtAndShiftVal(sortedArr, arr[idx]);
        
        sortedArr = insertValueToArr(sortedArr, indexInsert, arr[idx])
        tempShift.push(shiftValue);

        console.log(sortedArr);
        console.log(tempShift);
    }
    
    
    const amountShift = tempShift.reduce((val1, val2) => val1 + val2);
    
    return amountShift;
}

console.log(insertionSort([1,  5,  6, 11,12, 14, 15]))


// 2,1, 3, 1, 2

// 1 2 3 1 2 --> 1

// 1 1 2 3 2 --> 3

// 1 1 2 2 3 --> 1