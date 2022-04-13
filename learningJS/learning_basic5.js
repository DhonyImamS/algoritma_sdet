function displayer(value) {
    return console.log("menampilkan nilai ", value);
}

function multiply(input) {
    return input * input;
}

function processingPromise(input) {
    return new Promise(function(resolve, reject) {
        let defineValue = multiply(input);

        if ( defineValue % 2 === 1) {
            resolve(true);
        } else {
            reject(false);
        }
    });
}



function main(input) {
    Promise.resolve(displayer("dhony"));

    let resultIsVariableOdd = new Promise(function(resolve, reject) {
        let defineValue = multiply(input);

        if ( defineValue % 2 === 1) {
            resolve(true);
        } else {
            reject(false);
        }
    });

    resultIsVariableOdd.then(function(resolveResult) {
        console.log("menampilkan hasil", resolveResult);
    }, function(rejectResult) {
        console.log("gagal");
    });

    console.log("menunggu proses");
}


async function main2(input) {
    await Promise.resolve(displayer("dhony"));

    try {
        let resultIsVariableOdd = await processingPromise(input);

        console.log("hasil nya adalah", resultIsVariableOdd);
    } catch(err) {
        console.log("gagal");
    }
}

// main(2);
main2(2);