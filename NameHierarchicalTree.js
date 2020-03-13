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
   * @param  {String} nodeName The name of the node thats gonna be inserted
   */
  addChild(childrenName) {
    if (!Validator.isString(childrenName)) {
      return -1;
    }

    let nameArray = childrenName.split(".");

    if (nameArray.length <= 1) {
      this.head.addChild(new TreeNode(childrenName, this.head));
      return this.head;
    }

    let parentName = "";

    for (let i = 0; i < nameArray.length - 1; i++) {
      parentName = parentName.concat(nameArray[i], ".");
    }
    parentName = parentName.substring(0, parentName.length - 1);

    let node = this.getNodeByName(parentName);

    if (!node) {
      return 0;
    }

    node.addChild(new TreeNode(childrenName, node));
    return node;
  }

  /**
   * Removes a node
   * @param  {String} childrenName Name of the node to remove
   */
  removeChild(childrenName) {
    let node = this.getNodeByName(childrenName);
    let parentNode = node.getParent();
    parentNode.removeChild(node);
  }

  /**
   * Gets the children of the node name passed as a parameter
   * @param {String} childrenName The name of the parameter
   */
  getChildrenOf(childrenName) {
    let node = this.getNodeByName(childrenName);
    return node.getChildren();
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
      if (child.value === nodeName) {
        return child;
      }

      if (nodeName.includes(child.value)) {
        return this._searchNodeByName(child, nodeName);
      }
    });
  }

  _search(parent, nodeName) {
    if (parent.value == nodeName) {
      return parent;
    }
    for (const key in parent.children) {
      if (nodeName.includes(parent.children[key].value)) {
        return this._search(parent.children[key], nodeName);
      }
    }
    return null;
  }
}

module.exports = NameHierarchichalTree;
