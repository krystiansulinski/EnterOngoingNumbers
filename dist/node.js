class Node {
    Node(value) {
        this.value = value;
    }
    insert(value) {
        let node = new Node(value);
        if (value < node.value) {
            node.left = insert(value);
        }
        else {
            node.right = insert(value);
        }
        return node;
    }
    inOrderTraversal(node) {
        if (node !== null) {
            inOrderTraversal(node.left);
            content += node.value + ":" + node.frequency + ", ";
            inOrderTraversal(node.right);
        }
    }
}
//# sourceMappingURL=node.js.map