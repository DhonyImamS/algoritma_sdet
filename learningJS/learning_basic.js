function sum(bilangan1, bilangan2, parameterFungsi) {
    let result = bilangan1 + bilangan2;
    result = parameterFungsi(result);
    // result = setTimeout(function() {
    //     exponential(result)
    // }, 1000);
    console.log("menunggu callback");
    console.log("hasil akhir setelah callback", result);
}

function multiply(bilangan2, bilangan3, callback) {
    let result = bilangan2 * bilangan3;
    result = callback(result);
    console.log("menunggu callback");
    console.log("hasil akhir setelah callback", result);
}

// callback function
function exponential(input) {
    console.log("input kedalam fungsi Callback", input);
    return input*input;
}


sum(1, 2, exponential);
multiply(2, 2, exponential);

console.log("---- Setelah Menggunakan Timeout -----");

setTimeout(function(){
    sum(1, 2, exponential);
}, 1000);

setTimeout(function(){
    multiply(2, 2, exponential);
}, 500);

let promiseTest = new Promise(function(resolve, reject){
    let determinationValue = 10;

    if (determinationValue === 0) {
        resolve("OK");
    } else {
        reject("NO");
    }
});

promiseTest.then(function(inputSukses){
    console.log("==== PROMISE RESOLVED ====");
    console.log(inputSukses);
}, function(inputReject){
    console.log("==== PROMISE REJECTED ====");
    console.log(inputReject);
});


