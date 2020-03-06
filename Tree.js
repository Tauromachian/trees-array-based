const TreeNode = require("./TreeNode");

/**
 * Generic array tree based structure
 */
class Tree {
  constructor() {
    this.head = new TreeNode(null);
  }

  addChildren(object, nodeParent) {
    if (object instanceof TreeNode) {
      this.addChildrenTreeNode(object, nodeParent);
    }
    if (object instanceof String) {
      this.addChildrenValue(nodeValue, nodeParent);
    }
    return 0;
  }

  addChildrenTreeNode(treeNode, nodeParent) {
    if(!nodeParent){
      this._addNodeToHead(treeNode);
      return 1;
    }

    let parentNode = this._wideSearch(this.head, nodeParent);
    parentNode.addChildren(treeNode);

    return 1;
  }
  
  addChildrenValue(nodeValue, nodeParent){
    let node = new TreeNode(nodeValue);
    this.addChildrenTreeNode(node, nodeParent);
  }

  _addNodeToHead(node){
    this.head.addChildren(node);
  }

  _wideSearch(parent, node) {
    if (this.isEqual(parent, node)) {
      return parent;
    }

    if (parent.children) {
      return parent.children.map(child => this._wideSearch(child, node));
    }

    return;
  }

  isEqual(nodeOne, nodeTwo) {
    if (nodeOne.value === nodeTwo.value) {
      return 1;
    }
    return 0;
  }
}
module.exports = Tree;
