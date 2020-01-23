const TreeNode = require("./TreeNode");
const Validation = require("./Validation");

/**
 * This tree is'nt generic, is specialized to have a name hierarchy.
 */
class Tree {
  constructor() {
    this.head = new TreeNode(null);
  }

  
  /**
   * Inserts a node to the end of the name hierarchy
   * @param  {String} nodeName The name of the node thats gonna be inserted
   */
  addChildrenToNodeByName(nodeName) {
    if (!Validation.isString(nodeName)) {
      return -1;
    }

    if (nodeName.split(".").length <= 1) {
      this.head.children.push(new TreeNode(nodeName, this.head));
      return this.head;
    }

    let node = this.searchNodeByName(nodeName);
    node.addChildren(new TreeNode(nodeName, node));
    return node;
  }

  
  /**
   * @param  {String} nodeName name of the node to insert
   * @param  {TreeNode} node parent of the node that will be inserted
   */
  addChildrenNode(nodeName, node) {
    if (!(Validation.isString(nodeName) || Validation.isTreeNode(node))) {
      return -1;
    }

    node = this.searchNodeByName(node.name);
    node.addChildren(new TreeNode(nodeName, node));
  }

  searchNodeByName(nodeName) {
    let node = this.recursiveSearch(head.children, nodeName);
    if (node) {
      return node;
    } else return 0;
  }

  recursiveSearch(nodeChildren, nodeName) {
    nodeChildren.forEach(child => {
      if (child.name === nodeName) {
        return child;
      }

      if (nodeName.includes(child.name)) {
        nodeChildren = node.nodeChildren;
        return this.recursiveSearch(nodeChildren, nodeName);
      }
    });
    return null;
  }

  isEqual(nodeName, node) {
    if (node.name === nodeName) {
      return 1;
    }
    return 0;
  }
}
module.exports = Tree;
