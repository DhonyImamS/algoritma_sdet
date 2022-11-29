class BinarySearchTree {

    constructor(root = null) {
        this._root = root;
        this._leftChild = null;
        this._rightChild = null;
        
        this._heightBranch = 0;
    }

    insertValue(val) {

        if (!this._reference) this._reference = this;
        
        // move to the right
        if ( val > this._reference._root ) {
            
            if (!this.isContainsLeaf('right')) {
                this._rightChild = new BinarySearchTree(val);
                this._heightBranch++;
            } else { 
                this._reference = this._rightChild;
                this._reference.insertValue(val);
            }
        }
        
        // move to the left
        if ( val < this._reference._root ) {

            if (!this.isContainsLeaf('left')) {
                this._leftChild = new BinarySearchTree(val);
                this._heightBranch++;
            } else { 
                this._reference = this._leftChild;
                this._reference.insertValue(val);
            }
        }

        return this;
    }
    
    isContainsLeaf(direction) {
        let isHavingLeaf = true;
        
        if (direction === 'right' && this._rightChild === null) isHavingLeaf = false;

        if (direction === 'left' && this._leftChild === null) isHavingLeaf = false;
        
        return isHavingLeaf;
    }

}


function insertionBinarySearchTree(inputArr) {
    let tree = new BinarySearchTree(inputArr[0]);
    
    for(let i = 1; i < inputArr.length; i++) {
        tree = tree.insertValue(inputArr[i])
    }
    
    console.log(tree);
}

insertionBinarySearchTree([3,2,1])


