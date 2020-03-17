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
      node = this._deepSearchFirstMatch(this.head, object.getValue());
    }else{
      node = this._deepSearchFirstMatch(this.head, object);
    }

    if(!node){
      return 1;
    }

    let nodeParent = node.getParent();
    nodeParent.removeChild(object);

    return 0;
  }

  getChildrenOf(object) {
    if(!object){
      return this.head.getChildren();
    }

    const nodeParent = this._deepSearchFirstMatch(this.head, object);

    if(!nodeParent){
      return 0;
    }

    return nodeParent.getChildren();
  }

  getNode(object) {
    return this._deepSearchFirstMatch(this.head, object);
  }

  _addChildrenTreeNode(treeNode, nodeParent) {
    if (!nodeParent) {
      this._addNodeToHead(treeNode);
      return 1;
    }

    let parentNode = this._deepSearchFirstMatch(this.head, nodeParent.name);
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

  _deepSearchAllMatch(parent, name, searched=[]) {
    return parent.children.flatMap(child => {
      searched.concat(this._deepSearchAllMatch(child, name, searched));

      if(this.isEqual(child, name)){
        searched.push(child);
      }

      return searched;
    });
  }

  _deepSearchFirstMatch(parent, name) {
    if (this.isEqual(parent, name)) {
      return parent;
    }

    if (parent.hasChildren(name)) {
      return parent.getChild(name);
    }

    return parent.children.flatMap(child =>
      this._deepSearchFirstMatch(child, name)
    )[0];
  }

  isEqual(nodeOne, nodeTwo) {
    if (nodeOne instanceof TreeNode && nodeTwo instanceof TreeNode) {
      return nodeOne.name === nodeTwo.name;
    }
    if (!(nodeOne instanceof TreeNode || nodeTwo instanceof TreeNode)) {
      return nodeOne === nodeTwo;
    }
    if (nodeOne instanceof TreeNode) {
      return nodeOne.name === nodeTwo;
    } else {
      return nodeOne === nodeTwo.name;
    }
  }
}
module.exports = Tree;
