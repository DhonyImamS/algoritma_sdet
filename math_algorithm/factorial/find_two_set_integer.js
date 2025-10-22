/** 
 * There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

    The elements of the first array are all factors of the integer being considered
    The integer being considered is a factor of all elements of the second array

These numbers are referred to as being between the two arrays. Determine how many such numbers exist.
 * **/

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  
  function getIntegerFactor(sortedArr, referenceBoundary) {
      const initialBaseFactor = sortedArr[0];
      const baseFactor = [];
      
      // check base factor from MaxNumber as reference
      baseFactor.push(initialBaseFactor);
      for(let index=1; index < sortedArr.length; index++) {
          
          const resultModulo = initialBaseFactor % sortedArr[index];
          if (resultModulo !== 0) {
             // filled again
             baseFactor.push(sortedArr[index]); 
          }
      }
      
      // process baseFactor
      let result = baseFactor.reduce((acc, curr) => (acc * curr) / gcd(acc, curr));
      return result;
  }
  
  function generateRangeFactorNumber(baseFactorNumber, referenceArray, boundaryLimit) {
      const rangeFactorNumber = [];
      let referenceBoundary;
      
      if (boundaryLimit) {
          referenceBoundary = boundaryLimit;
      } else {
          referenceBoundary = referenceArray[0];
      }
      
      let multiplier = 1;
      let startProcess = true;
      
      while(startProcess) {
          const resultMultiplier = multiplier * baseFactorNumber;
              
          if (resultMultiplier > referenceBoundary) {
              startProcess = false;
              break;
          }
              
          // scanning
          const resultModulo = referenceBoundary % resultMultiplier;
          if (resultModulo === 0) {
              
              // process sanitize
              let isEligible = false;
              for (let index = 0; index < referenceArray.length; index++ ) {
                  const modulusResult = referenceArray[index] % resultMultiplier;
                  if (modulusResult === 0) {
                      isEligible = true;
                  } else {
                      isEligible = false;
                      break;
                  }
              }
              // filled
              if (isEligible) rangeFactorNumber.push(resultMultiplier);
              
          }
              
          multiplier++;
          console.log(rangeFactorNumber)
              
      }
  
      return rangeFactorNumber;
  }
  
  function getTotalX(arrayIntegerA, arrayIntegerB) {
      // Write your code here
      const sortedDescArr = arrayIntegerA.sort((a,b) => b-a);
      const sortedAscArr = arrayIntegerB.sort((a,b) => a-b);
      
      const factorNumber1 = getIntegerFactor(sortedDescArr, sortedDescArr[sortedDescArr.length - 1]);
      
      // final process
      const listFactorNumbers = generateRangeFactorNumber(factorNumber1, sortedAscArr);
      return listFactorNumbers.length;
      
  }
  
  console.log(getTotalX([3, 9, 6], [36, 72]))
  
  