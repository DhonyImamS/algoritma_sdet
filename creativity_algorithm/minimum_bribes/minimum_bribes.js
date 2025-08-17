function minimumBribes(q) {
    // Write your code here
    let counterSwap = 0;
    let isTooChaotic = false;
    
    // recognizing pattern from 2nd behind to front finding lower value
    for (let scanIndex = q.length - 1; scanIndex >= 0; scanIndex--) {
        const originalIndex = q[scanIndex] - 1;
        const deltaMovementCheck = originalIndex - scanIndex;
        
        if (deltaMovementCheck > 2) {
            isTooChaotic = true;
            break;
        } 

        
        for (let idx =Math.max(0, q[scanIndex] - 2); idx < scanIndex; idx++ ) {
            if (q[idx] > q[scanIndex]) {
                counterSwap++
            }
        }
        
    }
    
    if (isTooChaotic) {
        console.log('Too chaotic')
    } else {
        console.log(counterSwap);
    }
}