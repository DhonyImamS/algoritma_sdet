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

function main() {
    const arrInput = [4, 2, 10, 5, 6];
    const root = insertionDataIntoTree(arrInput, null, 0, arrInput.length);
    
    console.log(root); // Log the entire tree
}

main();
