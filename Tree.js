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

  removeChildren(object){
  }

  getChildrenOf(object){

  }

  getNode(){

  }

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

    if (parent.children) {
      return parent.children.map(child =>
        this._wideSearchAllMatch(child, value)
      );
    }

    return;
  }

  _wideSearchFirstMatch(parent, value) {
    if (this.isEqual(parent, value)) {
      return parent;
    }

    if (parent.children) {
      if(parent.hasChildren(value)){
        return parent.getChild(value);
      }

      return parent.children.find(child =>
        this._wideSearchFirstMatchRecursive(child, value)
      );
    }

    return 1;
  }

  _wideSearchFirstMatchRecursive(parent, value) {
    if (this.isEqual(parent, value)) {
      return true;
    }

    if (parent.children) {
      return parent.children.find(child =>
        this._wideSearchFirstMatch(child, value)
      );
    }

    return;
  }

  isEqual(nodeOne, nodeTwo) {
    return nodeOne.value === nodeTwo.value;
  }
}
module.exports = Tree;
