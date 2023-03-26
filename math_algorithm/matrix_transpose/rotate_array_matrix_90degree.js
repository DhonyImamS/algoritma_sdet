/**
 * This is algorithm to transpose matrix 90 degree clocked wise by finding this pattern
 * 
    1 2 3 
    4 5 6
    7 8 9

    become this 

    7 4 1 
    8 5 2 
    9 6 3

    And become this again

    9 8 7
    6 5 4 
    3 2 1
 * 

    const squareNumber = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const rotatedNumber1st = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];
    const rotatedNumber2nd = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
 */


function printResultArray(arrayNumber) {
    for(let i = 0; i < 1; i++) {
        for(let j = 0; j < arrayNumber[i].length; j++) {
            console.log(arrayNumber[j]);
        }
        console.log('\n');
    }
}
    
function rotationNumber90Degree(squaredArray, numberRotated = 1) {
        
    let inputArr = squaredArray;
    let counter = 0;
    
    
    while ( counter < numberRotated ) {
        const result = [];
        const [ upperArr, middleArr, lowerArr ] = inputArr;
    
        console.log('>>>>> START ROTATION <<<<<');
        printResultArray(inputArr);
    
        // inserting value process 
        const tempUpperArr = [lowerArr[0], middleArr[0], upperArr[0]];
        const tempMiddleArr = [lowerArr[1], middleArr[1], upperArr[1]];
        const tempLowerArr = [lowerArr[2], middleArr[2], upperArr[2]];
    
        result.push(tempUpperArr);
        result.push(tempMiddleArr);
        result.push(tempLowerArr);
    
        console.log('>>>>> AFTER ROTATION <<<<<');
        printResultArray(result);
            
        // end processing
        counter++;
        inputArr = result;
    }
};
    
const squareNumber = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    
rotationNumber90Degree(squareNumber, 4);