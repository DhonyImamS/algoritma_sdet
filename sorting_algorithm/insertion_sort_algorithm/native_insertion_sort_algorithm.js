function insertionSort (ar) {

    for(let i = 1; i < ar.length; i++){
        const value = ar[i];
        let j = i - 1;
        
        while(j >= 0 && ar[j] >= value){
            ar[j + 1] = ar[j];
            j = j - 1;
        }
        
        ar[j + 1] = value;
    }
    return ar;
}

const unsortedArr = [7 , 14, 19, 5, 8, 1, 2, 7, 6];

console.log(insertionSort(unsortedArr));