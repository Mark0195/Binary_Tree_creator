//treeify used to see tree in console log
const treeify = require('treeify');

//function to grab number inputs and show results
const inputs = async (req, res) => {
    let number = await req.body.binary
    number = number.split(',');
        let search = new bstTree();
        for (let i = 0; i < number.length; i++) {
            search.insert(number[i]);
        }
        res.send(`<pre>${treeify.asTree(search, true)}</pre>`)
        console.log(treeify.asTree(search, true));
};

class bstNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
//class to order numbers from highest to lowest 
class bstTree {
    constructor(root = null) {
        this.root = root;
    }
    insert(value) {
        const recursive = (node) => {
            if(node === null) {
                return new bstNode(value);
            }else if(value < node.value) {
                node.left = recursive(node.left);
            }else if(value > node.value) {
                node.right = recursive(node.right);
            }else{
                throw new Error("Can't be equal!")
            }
            
            if(nodeBalance(node) > 1) {
                return nodeRotateLeft(node);
            }else if(nodeBalance < -1) {
                return nodeRotateRight(node);
            }else{
                return node;
            }
        }
        this.root = recursive(this.root);
        }
            search(value){
            const recursiveSearch = (node) => {
                if(node === null) {
                    return false;
                }else if(value < node.value){
                    return recursiveSearch(node.left);
                }else if (value > node.value){
                    return recursiveSearch(node.right);
                }else{
                    return true;
                }
            }
            return recursiveSearch(this.root)
        }
    }
    function nodeHeight(node){
        if(node === null) {
            return -1;
        }else if(node.left === null && node.right === null){
            return 0;
        }else{
            return 1 + Math.max(nodeHeight(node.left), nodeHeight(node.right));
        }
        
    }
    function nodeBalance(node){
        return nodeHeight(node.right) - nodeHeight(node.left);
    }
    function nodeRotateLeft(node){
        if(node === null || node.right === null){
            return node;
        }
        const newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;
        return newRoot;
    }
    function nodeRotateRight(node){
        if(node === null || node.left === null){
            return node;
        }
        const newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;
        return newRoot;
};

//exports to other files
module.exports = {
    inputs,
    bstNode,
    bstTree
}