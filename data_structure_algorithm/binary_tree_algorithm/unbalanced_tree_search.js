class TreeNode {
    constructor(value) {
        this.mainNode = value;
        this.leftNode = null;
        this.rightNode = null;
    }
    
    mainNodeVal() {
        return this.mainNode;
    }
}

function insertionDataIntoTree(nodeInserted, bSTree) {
    const lastTree = new TreeNode(nodeInserted);

    if (nodeInserted < bSTree.mainNode) {
        
        if (bSTree.leftNode) {
            bSTree.leftNode = insertionDataIntoTree(nodeInserted, bSTree.leftNode)
        } else {
            bSTree.leftNode = lastTree;
        }
    } else {

        if (bSTree.rightNode) {
            bSTree.rightNode = insertionDataIntoTree(nodeInserted, bSTree.rightNode)
        } else {
            bSTree.rightNode = lastTree;
        }
    }
    
    return bSTree;
}

function isNumberFoundUseDFS(root, target) {
    if (!root) return false;
    
    if (root.mainNode === target) {
        return true;
    }
    
    if (target >= root.mainNode) {
        return isNumberFoundUseDFS(root.rightNode, target);
    } else {
        return isNumberFoundUseDFS(root.leftNode, target);
    }
}


function main() {
    const arrInput = [4, 2, 10, 5, 6];
    let firstTree = new TreeNode(arrInput[0]);
    
    for (let i=1; i < arrInput.length; i++) {
        // fungsi insert BST
        firstTree = insertionDataIntoTree(arrInput[i], firstTree);
    }
    
    console.log(JSON.stringify(firstTree, null, 2));
    console.log(isNumberFoundUseDFS(firstTree, 10));
}

main();
