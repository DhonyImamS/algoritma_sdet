function getKPK(inputArray) {
    const primeNumberList = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    
    const sortedArrayDesc = inputArray.sort((a,b) => b - a);
    let factorNumber = {};
    
    for (let idx =0; idx < sortedArrayDesc.length; idx++) {
        let numberObserved = sortedArrayDesc[idx];
        
        let indexPrime = 0;
        let startProcess = true;
        let factorizeStorage = {};
        
        while (startProcess) {
            let resultModulus = numberObserved % primeNumberList[indexPrime];
            let resultDivision = Math.floor(numberObserved / primeNumberList[indexPrime]);
            
            if (resultModulus > 0) {
                indexPrime++;
            } else if (resultModulus === 0) {
                
                if (!factorizeStorage[primeNumberList[indexPrime]])  {
                    factorizeStorage[primeNumberList[indexPrime]] = 1;
                } else {
                    factorizeStorage[primeNumberList[indexPrime]] = factorizeStorage[primeNumberList[indexPrime]] + 1;
                }
                
                // change reference
                numberObserved = resultDivision;
                indexPrime = 0;
            } 
            
            if (resultDivision === 1 && resultModulus === 0) {
                startProcess = false;
            }
        }
        
        // assigning result factor
        for (const[key, value] of Object.entries(factorizeStorage)) {
            if (!factorNumber[key]) {
                factorNumber[key] = value;
            }
        }

    }
    
    console.log(factorNumber)
}

getKPK([3, 5, 9])