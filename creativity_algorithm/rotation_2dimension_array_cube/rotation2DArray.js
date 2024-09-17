// rotate 2D Dimensional Array

/**
 * [1, 2, 3]
 * [4, 5, 6]
 * [7, 8, 9]
 * ------------- Rotate ------------
 * [7, 4, 1]
 * [8, 5, 2]
 * [9, 6, 3]
**/

function rotate2x3DArr(arr2D) {
    const [arr1st, arr2nd, arr3rd] = arr2D;
    
    // construct rotation
    const rotArr1st = [arr3rd[0], arr2nd[0],arr1st[0]];
    const rotArr2nd = [arr3rd[1], arr2nd[1],arr1st[1]];
    const rotArr3rd = [arr3rd[2], arr2nd[2],arr1st[2]];
    
    return [rotArr1st, rotArr2nd, rotArr3rd];
}

const arr2D = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(rotate2x3DArr(arr2D))

const secondRound = rotate2x3DArr(arr2D);
console.log(rotate2x3DArr(secondRound))
