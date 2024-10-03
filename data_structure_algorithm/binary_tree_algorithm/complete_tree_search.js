class TreeNode {
    constructor(value) {
        this.mainNode = value;
        this.leftNode = null;
        this.rightNode = null;
    }
}

function insertionDataIntoTree(arrIn, root, i, lengthArr) {
    if (i < lengthArr) {
        const nextTree = new TreeNode(arrIn[i]);
        
        nextTree.leftNode = insertionDataIntoTree(arrIn, nextTree.leftNode, 2 * i + 1, lengthArr);
        nextTree.rightNode = insertionDataIntoTree(arrIn, nextTree.rightNode, 2 * i + 2, lengthArr);
        
        return nextTree; // Return the constructed node
    }
    
    return null; // If index is out of bounds, return null
}

function isNumberFoundUseBFS(root, target) {
    if (!root) return false;
    
    let queue = [root];
    
    while (queue.length > 0) {
        let currentNode = queue.shift();
        
        if (currentNode.mainNode === target) {
            return true;
        }
        
        if (currentNode.leftNode) {
            queue.push(currentNode.leftNode);
        }
        
        if (currentNode.rightNode) {
            queue.push(currentNode.rightNode);
        }
    }
    
    return false;
}

function main() {
    const arrInput = [4, 2, 10, 5, 6];
    const binaryCompleteTreeData = insertionDataIntoTree(arrInput, null, 0, arrInput.length);
    
    console.log(binaryCompleteTreeData); // Log the entire tree
    console.log(isNumberFoundUseBFS(binaryCompleteTreeData, 11))
}

main();
