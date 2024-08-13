const arrInput = [4, 3, 2, 5, 1];

function insertionGraph(arr) {
    const sortArrMap = {};
    const lengthArrIn = inArr.length;
    const sortArr = [...inArr].sort((a, b) => a - b);
  
    for (let index = 0; index < lengthArrIn; index++) {
      if (!sortArrMap[sortArr[index]]) {
        sortArrMap[sortArr[index]] = index;
      }
    }
  
    // create dataStructure Graph
    const graphStorage = new Array(lengthArrIn).fill(null).map(() => []);
    for (let index = 0; index < lengthArrIn; index++) {
      const valueToMap = inArr[index];
  
      if (sortArrMap[valueToMap] || sortArrMap[valueToMap] === 0) {
        graphStorage[index].push(sortArrMap[valueToMap])
      }
    }
    console.log(graphStorage);

    return graphStorage;
}

insertionGraph(arrInput);