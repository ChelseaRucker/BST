// BINARY SEARCH TREE

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(value) {
        this.root = new Node(value)
        this.count = 1
    }

    size() {
        return this.count
    }
    insert(value){
        this.count++

        let newNode = new Node(value)

        // this recursive search fx will call itself when it see another node 
        const searchTree = node => {
            // if value < node.value, go left
            if (value < node.left) {
                //if no left child, append newNode
                if (!node.left) {
                    node.left = newNode
                } 
                // if left child exsists, call searchTree() <---- this is our RECURSIVE CASE
                else {
                    searchTree(node.left)
                }
            }
            // if value > node.value, go right
            else if (value > node.right) {
                // if no right child, append newNode
                if (!node.right) {
                    node.right = newNode
                } 
                // if right child exsists, call searchTree() <---- this is our RECURSIVE CASE
                else {
                    searchTree(node.right)
                }
            }
        }

        searchTree(this.root)
    }

    min() {
        let currentNode = this.root

        // this will continue traversing left until no more children
        while (currentNode.left) {
            currentNode - currentNode.left
        }
        return currentNode.value
    }

    max() {
        let currentNode = this.root

        // this will continue traversing right until no more children
        while (currentNode.right) {
            currentNode - currentNode.right
        }
        return currentNode.value
    }

    contains(value) {
        let currentNode = this.root

        while (currentNode) {
            if (value === currentNode.value) {
                return true
            }
            if (value < currentNode.value)  {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }

        return false
    }

    // SEARCH ALGORITHMS
    // Depth First Search looks branch by brach


    // inorder: left, root, right
    // returns in this order 4, 17, 19, 20, 22, 23, 28 
    dfsInOrder() {
        let result = []

        const traverse = node => {
            // if left child exsists, go left again
            if (node.left) traverse(node.left)
            // capture root node value
            result.push(node.value)
            //if right child exsists, go right again
            if (node.right) traverse(node.rigt)
        }

        return result
    }
    
    // preoder: root, left, right
    // returns in this order 20, 17, 4, 19, 23, 22, 28 
    dfsPreOrder() {
        let result = []

        const traverse = node => {
            // capture root node value
            result.push(node.value)
            // if left child exsists, go left again
            if (node.left) traverse(node.left)
            // if right child exsists, go right again
            if (node.right) traverse(node.right)


        }

        return result
    }
    
    //post order: left, right, root
    //returns in this order 4, 19, 17, 22, 28, 23, 20, 
    dfsPostOrder() {
        let result = []

        const traverse = node => {
            // if left child exsists, go left again
            if (node.left) traverse(node.left)
            // if right child exsists, go right again
            if (node.right) traverse(node.right)
            // capture root node value
            result.push(node.value)


        }

        return result
    }

    //Breadth-First Search looks level by level

    // uses a queue!
    // returns in this order 20, 
    bfs(){
        let result = []
        let queue = []

        // this pushes root node into queue
        queue.push(this.root)

        while(queue.length) {
            let currentNode = queue.shift()
            
            result.push(currentNode)

            // if left child exsists, push into the queue
            if(currentNode.left) {
                queue.push(currentNode.left)
            }

            // if right child exsists, push into the queue
            if(currentNode.right) {
                queue.push(currentNode.right)
            }
        }

        return result
    }
}


const bst = new BST(20)

bst.insert(17)
bst.insert(23)
bst.insert(4)
bst.insert(19)
bst.insert(22)
bst.insert(28)

bst.size()

bst.min()
bst.max()

bst.contains(2)
bst.contains(9)
