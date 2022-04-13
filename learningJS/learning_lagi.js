/*
    javascript is functional programming
*/
function sum(A, B) {
    return A+B;
}

console.log(sum(3,5))

// Nested function or chaining method

function objectPrint(a, b) {
    return {
        hasil: sum(a, b),
        terbilang: "xxxxxx"
    }
}

let result = nestedSum(3,5).hasil;
let terbilang = nestedSum(2,3).terbilang;


// callback
function pencetak(a) {
    return `hasilnya adalah angka ${a}`
}

async function sumWithCallback(a, b, iniBuatCallback) {
    const result = a + b;
    const result_callback = await iniBuatCallback;

    console.log(result_callback);
    console.log(result);
}

sumWithAsyncAwait(3, 5, pencetak(8))