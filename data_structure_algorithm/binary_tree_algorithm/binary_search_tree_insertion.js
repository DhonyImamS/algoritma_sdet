const util = require('util')

class BinarySearchTree {

    constructor(root = null) {
        this._root = root;
        this._leftChild = null;
        this._rightChild = null;
        
        this._heightBranch = 0;
    }

    insertValue(val, direction) {

        switch (direction) {
            case 'right':
                this._reference = this._rightChild;
                break;
            case 'left':
                this._reference = this._leftChild;
                break;
            default:
                this._reference = this;
                break;
        }
        
        // move to the right
        if ( val > this._reference._root ) {
            
            if (!this.isContainsLeaf('right', this._reference)) {
                this._reference._rightChild = new BinarySearchTree(val);
                this._reference._heightBranch++;
            } else { 
                this._reference.insertValue(val, 'right');
            }
        }
        
        // move to the left
        if ( val < this._reference._root ) {

            if (!this.isContainsLeaf('left', this._reference)) {
                this._reference._leftChild = new BinarySearchTree(val);
                this._reference._heightBranch++;
            } else { 
                this._reference.insertValue(val, 'left');
            }
        }

        return this;
    }
    
    isContainsLeaf(direction, reference) {
        let isHavingLeaf = true;
        
        if (direction === 'right' && reference._rightChild === null) isHavingLeaf = false;

        if (direction === 'left' && reference._leftChild === null) isHavingLeaf = false;
        
        return isHavingLeaf;
    }

}


function insertionBinarySearchTree(inputArr) {
    let tree = new BinarySearchTree(inputArr[0]);
    
    for(let i = 1; i < inputArr.length; i++) {
        tree = tree.insertValue(inputArr[i])
    }
    
    console.log(util.inspect(tree, false, null, true))
}

insertionBinarySearchTree([3,4,2,9,10,5,1])


