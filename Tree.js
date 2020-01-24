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
   * Searchs in the tree hierarchy and adds a new node in its corresponing place
   * Inserts a node to the end of the name hierarchy
   * @param  {String} nodeName The name of the node thats gonna be inserted
   */
  addChildrenToNodeByName(nodeName) {
    if (!Validator.isString(nodeName)) {
      return -1;
    }

    if (nodeName.split(".").length <= 1) {
      this.head.addChildren(new TreeNode(nodeName, this.head));
      return this.head;
    }

    let node = this.searchNodeByName(nodeName);
    node.addChildren(new TreeNode(nodeName, node));
    return node;
  }

  /**
   * Search a the parent node and insert the children
   * @param  {String} nodeName name of the node to insert
   * @param  {String} node parent of the node that will be inserted
   */
  addChildrenNode(nodeName, nodeParent) {
    if (!Validator.isString(nodeName)) {
      return -1;
    }

    let newTreeNode = new TreeNode(nodeName);

    if (!nodeParent) {
      newTreeNode.putParent(this.head);
      this.head.addChildren(newTreeNode);
      return newTreeNode;
    }

    if (!Validator.isString(nodeParent)) {
      return -1;
    }

    let parentNode = this.searchNodeByName(nodeParent);
    newTreeNode.putParent(parentNode);
    parentNode.addChildren(newTreeNode);
    return newTreeNode;
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
    for (const child in nodeChildren) {
      if (child.name === nodeName) {
        return child;
      }

      if (nodeName.includes(child.name)) {
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
