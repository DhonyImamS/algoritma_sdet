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

buatSegitigaAsterik(10);

cetakSegitigaSimetris(10);