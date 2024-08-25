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

function insertionBST(nodeInserted, bSTree) {
    const lastTree = new TreeNode(nodeInserted);
    // console.log(nodeInserted+" ============")
    // console.log(bSTree)
    if (nodeInserted < bSTree.mainNode) {
        // console.log(bSTree.leftNode)
        if (bSTree.leftNode) {
            // console.log("uhuy")
            bSTree.leftNode = insertionBST(nodeInserted, bSTree.leftNode)
        } else {
            bSTree.leftNode = lastTree;
        }
    } else if (nodeInserted >= bSTree.mainNode) {
        // console.log(bSTree.rightNode)
        if (bSTree.rightNode) {
            // console.log("ihir")
            bSTree.rightNode = insertionBST(nodeInserted, bSTree.rightNode)
        } else {
            bSTree.rightNode = lastTree;
        }
    }
    
    return bSTree;
}


function main() {
    const arrInput = [4, 2, 10, 5, 6];
    let firstTree = new TreeNode(arrInput[0]);
    
    for (let i=1; i <= arrInput.length -  1; i++) {
        // fungsi insert BST
        firstTree = insertionBST(arrInput[i], firstTree)
    }
    
    console.log(JSON.stringify(firstTree, null, 2))
}

main();
