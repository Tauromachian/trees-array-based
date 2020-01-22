class Tree {
  constructor() {
    this.head = new TreeNode(null);
  }

  addChildrenToNodeByName(nodeName) {
    if (!(nodeName instanceof String)) {
      return -1;
    }

    let node = this.searchNodeByName(nodeName);
    node.addChildren(new TreeNode(nodeName, node));
    return node;
  }

  searchNodeByName(nodeName) {
    let node = this.recursiveSearch(head.children, nodeName);
    if (node){
      return node;
    }
    else return 0;
  }

  recursiveSearch(nodeChildren, nodeName) {
    nodeChildren.forEach(child => {
      if (child.value === nodeName) {
        return child;
      }

      if (nodeName.includes(child.value)) {
        nodeChildren = node.nodeChildren;
        return this.recursiveSearch(nodeChildren, nodeName);
      }
    });
    return null;
  }

  isEqual(nodeName, node) {
    if (node.value === nodeName) {
      return 1;
    }
    return 0;
  }
}
