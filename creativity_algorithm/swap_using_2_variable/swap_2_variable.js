function swap2var(a,b) {
    let input1 = a;
    let input2 = b;
    
    console.log(`input1 = ${input1} & input2 = ${input2}`);
    
    // Algorythm Swap Using 3 Variable

    // const input3 = input1;
    // input1 = input2;
    // input2 = input3;
    
    // Algorythm Swap Using 2 Variable 

    // input1 = ab;
    // input2 = ab-b;
    // input1 = ab - (ab-b)
    
    input1 = input1 + input2;
    input2 = input1 - input2;
    input1 = input1 - input2;
    
    console.log(`input1 = ${input1} & input2 = ${input2}`);
}

swap2var(-5, -10);