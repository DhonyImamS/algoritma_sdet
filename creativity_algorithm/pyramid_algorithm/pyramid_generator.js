function cetakSegitigaSimetris(banyakDicetak) {
    const lineAsterikRow = [];
    const panjangAsteriks = banyakDicetak + ( banyakDicetak + 1);
    const eachIndexMedian = Math.floor(( panjangAsteriks ) / 2);

    for(let index = 0; index < panjangAsteriks; index++) {
        lineAsterikRow.push(' ');
    }
    
    for(let index = 0; index < banyakDicetak; index++) {
        lineAsterikRow[eachIndexMedian] = '*';
        lineAsterikRow[eachIndexMedian-index] = '*';
        lineAsterikRow[eachIndexMedian+index] = '*';

        console.log(lineAsterikRow.join(' ').toString());
    }
}

function buatSegitigaAsterik(n) {
    
    for(let index = 0; index < n; index++) {
        let cetakAsterik = '';

        for(let idx = 0; idx < index; idx++) {
            cetakAsterik = cetakAsterik + '*';
        }
    
        console.log(cetakAsterik);
    }
}

function cetakSegitigaNumberSimetric(banyakDicetak) {
    const lineAsterikRow = [];
    const panjangAsteriks = banyakDicetak + ( banyakDicetak + 1);
    const eachIndexMedian = Math.floor(( panjangAsteriks ) / 2);
    

    for(let index = 0; index < panjangAsteriks; index++) {
        lineAsterikRow.push(' ');
    }
    
    for(let index = 0; index < banyakDicetak; index++) {
        let counter = 1;
        
        lineAsterikRow[eachIndexMedian] = `${index + 1}`;
        
        for(let idx = eachIndexMedian-index; idx < eachIndexMedian; idx++) {
            
            lineAsterikRow[idx] = counter;
            counter ++;
            
        }
        
        counter = 1;
        for(let idx = eachIndexMedian+index; idx > eachIndexMedian; idx--) {
            
            lineAsterikRow[idx] = counter;
            counter ++;
            
        }
        
        console.log(lineAsterikRow.join(' ').toString());
    }
}

buatSegitigaAsterik(10);

// Learn Pyramid asterik
function createPyramidAsterix(lengthPyramid) {
    
    if (lengthPyramid % 2 === 0) throw Error('It can not created Pyramid - for this length');
    const offset = 1;
    const medianIndex = Math.floor((lengthPyramid - 1) / 2 );
    
    for (let idx = 0; idx + medianIndex < lengthPyramid; idx++) {
        const lineArrayPerIdx = new Array(lengthPyramid).fill(' ');
        
        // fill asterix
        lineArrayPerIdx.fill('*', medianIndex-idx, medianIndex+idx+offset);
        
        console.log(lineArrayPerIdx.join(''))
    }
}

createPyramidAsterix(17)

cetakSegitigaSimetris(10);

cetakSegitigaNumberSimetric(10)
