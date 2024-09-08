// detection prime number

function primeChecker2(number) {
    let stored = {
        'prime' : 0
    };
    let isPrimeNumber = false;
    
    const modulusTwo = number % 2;
    const modulusThree = number % 3;
    
    console.log(modulusTwo, '----', modulusThree)
    
    if ( number === 1 ) return false;
    
    if ( number === 2 || number === 3 ) return true;
    
    if (modulusTwo && modulusThree) {
        
        for (let val = number; val >= 2; val--) {
            let modulusVal = number % val;
            
            if (!modulusVal) {
                stored['prime'] = stored['prime'] + 1;
            }
            
            if (stored['prime'] > 1) {
                isPrimeNumber = false;
                break;
            } else {
                isPrimeNumber = true;
            }
        }
    }
    
    return isPrimeNumber;
}

console.log(primeChecker2(97))
