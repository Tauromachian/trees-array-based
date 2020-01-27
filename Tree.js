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
      this.addChildrenNode(object, nodeParent);
    }
    return 0;
  }

  addChildrenNode(treeNode, nodeParent){

  }

  

  isEqual(nodeName, node) {
    if (node.name === nodeName) {
      return 1;
    }
    return 0;
  }
}
module.exports = Tree;
