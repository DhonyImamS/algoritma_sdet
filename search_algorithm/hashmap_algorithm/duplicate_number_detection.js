/**
 * This is Function for find duplicate number and calculate its combination pairing 
 */ 

function solve(array) {
    // Write your code here
    const hashMapTemp = {};
    let counter = 0;
    let arrTotalDupNumber;

    for (const number of array) {
        counter = 0;
        if (hashMapTemp[number]) {
            // increase total duplicate
            hashMapTemp[number] = hashMapTemp[number] + 1;
        } else {
            hashMapTemp[number] = 1;
        }
    }

    arrTotalDupNumber = Object.values(hashMapTemp).filter(data => (data > 1));

    // calculate combinations
    let totalPaired = 0;

    if (arrTotalDupNumber.length > 0) {
        totalPaired = arrTotalDupNumber.map(data => (data*(data-1))).reduce((a,b) => (a+b));
    }

    return totalPaired;
}
