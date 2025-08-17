function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let totalFruitApple = 0;
    let totalFruitOrange = 0;
    
    const totalLengthApples = apples.length;
    const totalLengthOranges = oranges.length;
    
    const sumIterationCheck = totalLengthApples + totalLengthOranges;
    
    for(let iterationIdx = 0; iterationIdx < sumIterationCheck; iterationIdx++) {
        let valueApple = 0;
        let valueOrange = 0;
        
        if (iterationIdx < totalLengthApples) {
            valueApple = apples[iterationIdx] + a;
            totalFruitApple = countFruitInRange(s, t, valueApple, totalFruitApple);
        }
        
        if (iterationIdx < totalLengthOranges) {
            valueOrange = oranges[iterationIdx] + b;
            totalFruitOrange = countFruitInRange(s, t, valueOrange, totalFruitOrange);
        }
        
        if (iterationIdx >= totalLengthApples && iterationIdx >= totalLengthOranges) {
            break;
        }
    }
    
    console.log(totalFruitApple);
    console.log(totalFruitOrange);
}