// MaxHeapSort
// ------------

const sourceArr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7, 30, 15, 23];

function buildMaxHeapfyTree(arry, indexRef, maxIndexCut = undefined) {
    let maxArrayIndex = arry.length - 1;
    if (maxIndexCut) maxArrayIndex = maxIndexCut;
    
    const leftNodeIndexRef = 2*indexRef + 1;
    const rightNodeIndexRef = 2*indexRef + 2;
    
    let indexTargetSwap = indexRef;
    
    if (leftNodeIndexRef <= maxArrayIndex && arry[leftNodeIndexRef] > arry[indexTargetSwap]) {
        indexTargetSwap = leftNodeIndexRef;
    }
    
    if (rightNodeIndexRef < maxArrayIndex && arry[rightNodeIndexRef] > arry[indexTargetSwap]) {
        indexTargetSwap = rightNodeIndexRef;
    }
    
    // swap value on triangle mini heap tree
    if (indexTargetSwap !== indexRef) {
        const tempVal = arry[indexRef];
        
        arry[indexRef] = arry[indexTargetSwap];
        arry[indexTargetSwap] = tempVal;
        
        buildMaxHeapfyTree(arry, indexTargetSwap, maxArrayIndex)
    }

}

function constructMaxHeapTree(arry) {
    let medianIndex = Math.floor((arry.length - 1) / 2);
    
    while ( medianIndex >= 0 ) {
        buildMaxHeapfyTree(arry, medianIndex)
        
        console.log(arry, `build maxheap tree iterasi ke ${medianIndex}`)
        
        medianIndex -= 1;
    }
}
