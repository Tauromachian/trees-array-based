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
   * Searchs in the tree hierarchy and adds a new node in its corresponing place
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
   * Search a the parent node and insert the children
   * @param  {String} nodeName name of the node to insert
   * @param  {String} node parent of the node that will be inserted
   */
  addChildrenNode(nodeName, nodeParent) {
    if (!(Validation.isString(nodeName) || Validation.isString(nodeParent))) {
      return -1;
    }

    let node = this.searchNodeByName(nodeParent);
    node.addChildren(new TreeNode(nodeName, node));
  }

  
  /**
   * Searchs in the tree a node with the name providen
   * @param  {String} nodeName name of the node to search
   */
  searchNodeByName(nodeName) {
    let node = this.recursiveSearch(head.children, nodeName);
    if (node) {
      return node;
    } else return 0;
  }

  _recursiveSearch(nodeChildren, nodeName) {
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
