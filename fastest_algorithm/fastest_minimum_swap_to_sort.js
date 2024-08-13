// Learn Graph Data Structure and DFS for minimum sorting for identical value

const inputArr = [1, 2, 3, 4]
// const sortArr = [4, 7, 2, 1]

function minimumSwapToSort(inArr) {
  let minSwap = 0;
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
  console.log(graphStorage)

  // DFS Algorithm to find Cyclic Node in Graph
  const visitedIndex = new Array(lengthArrIn).fill(false);
  const inStack = new Array(lengthArrIn).fill(false);

  function dfs(valIndex, visitedIndex, inStack, stack) {
    visitedIndex[valIndex] = true;
    inStack[valIndex] = true;
    stack.push(valIndex);

    for ( const neighborIndex of graphStorage[valIndex]) {
      if (!visitedIndex[neighborIndex]) {
        if (dfs(neighborIndex, visitedIndex, inStack, stack)) {
          return true;
        }
      } else if (inStack[neighborIndex]) {
        return true;
      }
    }

    stack.pop();
    inStack[valIndex] = false;
    return false;
  }

  // counting minimum swap
  for (let i=0; i < lengthArrIn; i++) {
    if (!visitedIndex[i]) {
      const stack = [];

      if (dfs(i, visitedIndex, inStack, stack)) {
        const cycleLength = stack.length;
        if (cycleLength > 1) {
          minSwap += cycleLength - 1;
        }
      }
    }
  }
  console.log(minSwap)
  return minSwap;
}

function main() {
  minimumSwapToSort(inputArr)
}

main();
