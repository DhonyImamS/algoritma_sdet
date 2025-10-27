/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function proceedJulian(inputYear) {
    const resultDivision = inputYear % 4;
    
    if (resultDivision === 0) {
        return `12.09.${inputYear}`;
    } else {
        return `13.09.${inputYear}`;
    }
}

function proceedGregorian(inputYear) {
    const resultDivision1 = inputYear % 4;
    const resultDivision2 = inputYear % 100;
    const resultDivsion3 = inputYear % 400;
    
    if ((resultDivision1 === 0 && resultDivision2 != 0 )|| resultDivsion3 === 0) {
        return `12.09.${inputYear}`;
    } else {
        return `13.09.${inputYear}`;
    }
}

function dayOfProgrammer(year) {
    let programmerDay;
    // Write your code here
    if ( year < 1700 || year > 2700 ) throw new Exception("Invalid Year");
    
    if (year < 1918) {
        programmerDay = proceedJulian(year);
    } else if (year > 1918) {
        programmerDay= proceedGregorian(year);
    } else {
        // year transition 1918
        programmerDay = '26.09.1918';
    }
    
    console.log(programmerDay);
    return programmerDay;
}