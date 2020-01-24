const TreeNode = require("./TreeNode");
const Validator = require("./Validator");

/**
 * This tree is'nt generic, is specialized to have a name hierarchy.
 */
class Tree {
  constructor() {
    this.head = new TreeNode(null);
  }

  /**
   * Searchs in the tree a node with the name providen
   * @param  {String} nodeName name of the node to search
   */
  searchNodeByName(nodeName) {
    let node = this._recursiveSearch(this.head.children, nodeName);
    if (node) {
      return node;
    } else return 0;
  }

  _recursiveSearch(nodeChildren, nodeName) {
    for (const key in nodeChildren) {
      if (nodeChildren[key].name === nodeName) {
        return nodeChildren[key];
      }

      if (nodeName.includes(nodeChildren[key].name)) {
        nodeChildren = node.nodeChildren;
        return this._recursiveSearch(nodeChildren, nodeName);
      }
    }
  }

  isEqual(nodeName, node) {
    if (node.name === nodeName) {
      return 1;
    }
    return 0;
  }
}
module.exports = Tree;
