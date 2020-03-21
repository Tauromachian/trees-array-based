const Tree = require("./Tree");
const TreeNode = require("./TreeNode");
const Validator = require("./Validator");

/**
 * This tree is'nt generic, is specialized to have a name hierarchy.
 */
class NameHierarchichalTree extends Tree {
  constructor() {
    super();
  }
  /**
   * Searchs in the tree hierarchy and adds a new node in its corresponing place
   * Inserts a node to the end of the name hierarchy
   * @param  {String} childrenName The name of the node thats gonna be inserted
   */
  addChild(childrenName, value) {
    if (!Validator.isString(childrenName)) {
      return -1;
    }

    const indexOfLastDot = childrenName.lastIndexOf(".");
    if (indexOfLastDot === -1){
      this.head.addChild(new TreeNode(childrenName, this.head, value));
      return 0;
    }

    const parentName = childrenName.substring(0, indexOfLastDot);
    let node = this.getNodeByName(parentName);

    if (!node) {
      return 1;
    }

    node.addChild(new TreeNode(childrenName, node, value));
    return 0;
  }

  /**
   * Removes a node
   * @param  {String} childrenName Name of the node to remove
   */
  removeChild(childrenName) {
    let node = this.getNodeByName(childrenName);

    if(!node){
      return 1;
    }

    let parentNode = node.getParent();
    parentNode.removeChild(node);
    return 0;
  }

  /**
   * Gets the children of the node name passed as a parameter
   * @param {String} childrenName The name of the parameter
   */
  getChildrenOf(childrenName) {
    let node = this.getNodeByName(childrenName);
    if(node){
      return node.getChildren();
    }
    return 0;
  }

  /**
   * Searchs in the tree a node with the name providen
   * @param  {String} nodeName name of the node to search
   */
  getNodeByName(nodeName) {
    const node = this._searchNodeByName(this.head, nodeName);
    if (node) {
      return node;
    }
    return 0;
  }
  
  _searchNodeByName(parent, nodeName) {
    const children = this._searchNodeByNameRecursive(parent, nodeName);
    return children.filter(child => child)[0];
  }

  _searchNodeByNameRecursive(parent, nodeName) {
    return parent.children.flatMap(child => {
      if (child.name === nodeName) {
        return child;
      }

      if (nodeName.includes(child.name)) {
        return this._searchNodeByName(child, nodeName);
      }
    });
  }

  _search(parent, nodeName) {
    if (parent.name == nodeName) {
      return parent;
    }
    for (const key in parent.children) {
      if (nodeName.includes(parent.children[key].name)) {
        return this._search(parent.children[key], nodeName);
      }
    }
    return null;
  }
}

module.exports = NameHierarchichalTree;
