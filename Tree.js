const TreeNode = require("./TreeNode");

/**
 * Generic array tree based structure
 */
class Tree {
  constructor() {
    this.head = new TreeNode(null);
  }

  addChild(object, nodeParent) {
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

  removeChild(object) {
    if(!object){
      return -1;
    }

    let node;
    
    if(object instanceof TreeNode){
      node = this._wideSearchFirstMatch(this.head, object.getValue());
    }else{
      node = this._wideSearchFirstMatch(this.head, object);
    }

    if(!node){
      return 1;
    }

    console.log(node);
    
    let nodeParent = node.getParent();
    nodeParent.removeChild(object);

    return 0;
  }

  getChildOf(object) {
    if(!object){
      return this.head.getChildren();
    }

    const nodeParent = this._wideSearchFirstMatch(this.head, object);

    if(!nodeParent){
      return 0;
    }

    return nodeParent.getChildren();
  }

  getNode() {}

  _addChildrenTreeNode(treeNode, nodeParent) {
    if (!nodeParent) {
      this._addNodeToHead(treeNode);
      return 1;
    }

    let parentNode = this._wideSearchFirstMatch(this.head, nodeParent.value);
    parentNode.addChild(treeNode);

    return 1;
  }

  _addChildrenValue(nodeValue, nodeParent) {
    let node = new TreeNode(nodeValue);
    this._addChildrenTreeNode(node, nodeParent);
  }

  _addNodeToHead(node) {
    this.head.addChild(node);
  }

  _wideSearchAllMatch(parent, value, searched=[]) {
    return parent.children.flatMap(child => {
      searched.concat(this._wideSearchAllMatch(child, value, searched));

      if(this.isEqual(child, value)){
        searched.push(child);
      }

      return searched;
    });
  }

  _wideSearchFirstMatch(parent, value) {
    if (this.isEqual(parent, value)) {
      return parent;
    }

    if (parent.hasChildren(value)) {
      return parent.getChild(value);
    }

    return parent.children.flatMap(child =>
      this._wideSearchFirstMatch(child, value)
    )[0];
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
