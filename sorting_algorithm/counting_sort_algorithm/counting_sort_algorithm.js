function findMaxArrayValue(arr) {
    
    let maxArray = arr[0];
    
    for (let index = 1; index < arr.length; index++) {
        
        let value = arr[index];
        if (value > maxArray) maxArray = value;
    }
    
    return maxArray;
}

function countingSort(arr) {
    // Write your code here
    let arrayCounter = [];
    let arraySort = [];
    let maxRangeValueArr = findMaxArrayValue(arr);
    
    // creating array counter
    for(let index = 0; index <= maxRangeValueArr; index++) {
        arrayCounter.push(0);
    }
    
    // process counting
    for(let index = 0; index < arr.length; index++) {
        let oldValue = arrayCounter[arr[index]];
        let increment =  oldValue + 1;
        
        arrayCounter[arr[index]] = increment;
    }
    
    // process sorting ascending from counter array
    for(let index = 0; index < arrayCounter.length; index++) {
        if (arrayCounter[index] !== 0) {
            
            let timesPushed = 0;
            
            while(timesPushed < arrayCounter[index]) {
                arraySort.push(index);
                timesPushed++;
            }
        }
    }

    return arraySort;
}

console.log(countingSort([1,1,3,2,1,9,4,3,4]))