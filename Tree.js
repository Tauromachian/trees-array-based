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
      this.addChildrenNode(object, nodeParent);
    }
    if (object instanceof String) {
      let node = new TreeNode(object, nodeParent);
      this.addChildrenNode(node, nodeParent);
    }
    return 0;
  }

  addChildrenNode(treeNode, nodeParent) {
    let parentNode = this._wideSearch(this.head, []);
    parentNode.addChildren(treeNode);
  }

  _wideSearch(nodeParent, nodeArray) {
    if(!nodeParent.children){
      return nodeArray;
    }

    for (const i in nodeParent.children) {
      if(this.isEqual(children[i], node)){
        nodeArray.push(children[i]);
      }
    }

    return nodeArray.concat(this._wideSearch(nodeParent, nodeArray));
  }

  isEqual(nodeOne, nodeTwo) {
    if (nodeOne.value === nodeTwo.value) {
      return 1;
    }
    return 0;
  }
}
module.exports = Tree;
