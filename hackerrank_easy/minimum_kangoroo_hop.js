function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    const maximum_attempt_hop = Math.abs(x2 - x1);
    let result = "NO";
    
    let position1 = x1 + v1;
    let position2 = x2 + v2;
    
    for (let iterateHop = 0; iterateHop < maximum_attempt_hop; iterateHop++) {
        
        if (position1 === position2) {
            result = "YES";
            break;
        }
        
        position1 = position1 + v1;
        position2 = position2 + v2;
    }
    
    return result;
}