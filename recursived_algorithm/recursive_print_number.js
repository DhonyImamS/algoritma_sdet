/**
 * Create function that able to print 1 to N without loop ( using recursive )
    
    Example :
    Input 10
    Output : 1 2 3 4 5 6 7 8 9 10
*/

function recursiveWrite1(inputData) {
    if ( inputData === 0 ) return;
    
    console.log(inputData);
    
    const currentData = inputData - 1;
    
    recursiveWrite(currentData)
    
}
recursiveWrite1(10)