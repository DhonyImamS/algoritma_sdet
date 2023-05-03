/**
 * Create a string compression program
    Input = aaaabbbccd
        Output = a4b3c2d1
    input = aaabbaaa
        output = a3b2a3
**/
function compressionString(inputString) {
    const storageData = {};
    const arrayString = inputString.split('');
    
    let counter;
    
    for (let index = 0; index < arrayString.length; index++) {
        
        if (Object.hasOwn(storageData, `${arrayString[index]}`)) {
            counter = counter + 1;
            storageData[`${arrayString[index]}`] = counter;
        } else {
            counter = 1
            storageData[`${arrayString[index]}`] = counter;
        }
    }
    
    // construct output
    const outputCompression = [];
    const dataKeys = Object.keys(storageData);
    
    for (let index = 0; index < dataKeys.length; index++) {
        outputCompression.push(dataKeys[index]);
        outputCompression.push(`${storageData[dataKeys[index]]}`);
    }
    
    console.log(outputCompression.join(''))

    
}

compressionString('aaaabbbccd')