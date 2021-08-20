// required to get Node and Tree
const fun = require('./input');
const Node = fun.bstNode;
const Tree = fun.bstTree;

// Tests to check the code and see that it is working as intended
describe("Tests input function", () =>{
    it('Two inserts', () => {
        const testTree = new Tree();
        testTree.insert(6);
        testTree.insert(3);
        expect(testTree.root).not.toBe(null);
        expect(testTree.root.value).toBe(6);
        expect(testTree.root.left).not.toBe(null);
        expect(testTree.root.left.value).toBe(3);
    })
    it('Three inserts', () => {
        const testTree = new Tree();
        testTree.insert(7);
        testTree.insert(3);
        testTree.insert(1);
        expect(testTree.root).not.toBe(null);
        expect(testTree.root.value).toBe(7);
        expect(testTree.root.left).not.toBe(null);
        expect(testTree.root.left.value).toBe(3);
        expect(testTree.root.left.left).not.toBe(null);
        expect(testTree.root.left.left.value).toBe(1);
    });
    it("5 inserts in different order", () => {
        const testTree = new Tree();
        testTree.insert(5);
        testTree.insert(7);
        testTree.insert(3);
        testTree.insert(4);
        testTree.insert(9);
        expect(testTree.root).not.toBe(null);
        expect(testTree.root.value).toBe(5);
        expect(testTree.root.left).not.toBe(null);
        expect(testTree.root.left.value).toBe(3);
        expect(testTree.root.left.right).not.toBe(null);
        expect(testTree.root.left.right.value).toBe(4);
        expect(testTree.root.right).not.toBe(null);
        expect(testTree.root.right.value).toBe(7);
        expect(testTree.root.right.right).not.toBe(null);
        expect(testTree.root.right.right.value).toBe(9);    
    });
});