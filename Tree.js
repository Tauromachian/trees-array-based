const TreeNode = require("./TreeNode");

/**
 * This tree is'nt generic, is specialized to have a name hierarchy.
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
    let parentNode = this._wideSearch(this.head.children, nodeParent, []);
    parentNode.addChildren(treeNode);
  }

  _wideSearch(children, node, nodeArray) {
    for (const i in children) {
      if(this.isEqual(children[key], node)){
        nodeArray.push(children[key]);
      }
    }
  }

  isEqual(nodeOne, nodeTwo) {
    if (nodeOne.value === nodeTwo.value) {
      return 1;
    }
    return 0;
  }
}
module.exports = Tree;
