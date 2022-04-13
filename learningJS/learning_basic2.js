function sum(bilangan1, bilangan2, parameterFungsi) {
    let result = bilangan1 + bilangan2;
    result = parameterFungsi(result);
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

// setTimeout(function(){
//     sum(1, 2, exponential);
// }, 1000);

// setTimeout(function(){
//     multiply(2, 2, exponential);
// }, 500);

// let promiseMe = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         resolve(multiply(3, 3, exponential));
//     }, 200);
// });

// promiseMe.then(function(resultResolve){
//     console.log(resultResolve);
// });

function sumWithPromise(bilangan1, bilangan2, parameterFungsi) {
    let result = bilangan1 + bilangan2;
    let element;

    result = new Promise(function(resolve, reject){
        resolve(parameterFungsi(result));
    });

    result.then(function(resultResolve){
        const resullAkhir = resultResolve;
        console.log("hasil akhir setelah callback", resullAkhir);
    });



    console.log("menunggu callback");
    
}

sumWithPromise(1, 9, exponential);

// async function processCallback(input, functionX) {

//     result = functionX(input);
//     // result = new Promise(function(resolve, reject){
      
//     //     resolve(parameterFungsi(input));
//     // });

//     return result;
// };

// async function sumWithAsyncAwait(bilangan1, bilangan2, parameterFungsi) {
//     let result = bilangan1 + bilangan2;
//     result = await processCallback(result, parameterFungsi);
//     console.log("hasil akhir setelah callback", result);

//     // console.log("menunggu callback");
//     // console.log("hasil akhir setelah callback", result);

//     // result.then(function(resultResolve){
//     //     const resullAkhir = resultResolve;
//     //     console.log("hasil akhir setelah callback", resullAkhir);
//     // });
//     // console.log("menunggu callback");
// }

// sumWithAsyncAwait(1, 9, exponential);

