const TreeNode = require("./TreeNode");

/**
 * Generic array tree based structure
 */
class Tree {
  constructor() {
    this.head = new TreeNode(null);
  }

  addChildren(object, nodeParent) {
    if (!object) {
      return 1;
    }

    if (object instanceof TreeNode) {
      this._addChildrenTreeNode(object, nodeParent);
      return 0;
    }
    this.addChildrenValue(nodeValue, nodeParent);
    return 0;
  }

  removeChildren(object) {}

  getChildrenOf(object) {}

  getNode() {}

  _addChildrenTreeNode(treeNode, nodeParent) {
    if (!nodeParent) {
      this._addNodeToHead(treeNode);
      return 1;
    }

    let parentNode = this._wideSearchFirstMatch(this.head, nodeParent.value);
    parentNode.addChildren(treeNode);

    return 1;
  }

  _addChildrenValue(nodeValue, nodeParent) {
    let node = new TreeNode(nodeValue);
    this._addChildrenTreeNode(node, nodeParent);
  }

  _addNodeToHead(node) {
    this.head.addChildren(node);
  }

  _wideSearchAllMatch(parent, value) {
    if (this.isEqual(parent, value)) {
      return parent;
    }

    return parent.children.flatMap(child =>
      this._wideSearchAllMatch(child, value)
    );
  }

  _wideSearchFirstMatch(parent, value) {
    if (this.isEqual(parent, value)) {
      return parent;
    }

    if (parent.children) {
      if (parent.hasChildren(value)) {
        return parent.getChild(value);
      }

      return parent.children.map(child =>
        this._wideSearchFirstMatch(child, value)
      )[0];
    }

    return 1;
  }

  isEqual(nodeOne, nodeTwo) {
    if (nodeOne instanceof TreeNode && nodeTwo instanceof TreeNode) {
      return nodeOne.value === nodeTwo.value;
    }
    if (!(nodeOne instanceof TreeNode || nodeTwo instanceof TreeNode)) {
      return nodeOne === nodeTwo;
    }
    if (nodeOne instanceof TreeNode) {
      return nodeOne.value === nodeTwo;
    } else {
      return nodeOne === nodeTwo.value;
    }
  }
}
module.exports = Tree;
