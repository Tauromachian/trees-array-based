const TreeNode = require("./TreeNode");
const GenericTree = require("./GenericTree");

/**
 * This tree is'nt generic, is specialized to have a name hierarchy.
 */
class NameHierarchichalTree extends GenericTree {
  constructor(separator=".") {
    super();
    this._separator = separator;
  }
  /**
   * Searchs in the tree hierarchy and adds a new node in its corresponing place
   * Inserts a node to the end of the name hierarchy
   * @param  {String} childrenName The name of the node thats gonna be inserted
   */
  addChild(childrenName, value) {
    if (!this._isEntryValid(childrenName)) {
      return 1;
    }

    const indexOfLastDot = childrenName.lastIndexOf(this._separator);
    if (indexOfLastDot === -1){
      this.head.addChild(new TreeNode(childrenName, this.head, value));
      return 0;
    }

    const parentName = childrenName.substring(0, indexOfLastDot);
    let node = this._searchNode(parentName);

    if (!node) {
      return 1;
    }

    node.addChild(new TreeNode(childrenName, node, value));
    return 0;
  }

  /**
   * Searchs in the tree a node with the name providen
   * @param  {String} nodeName name of the node to search
   */
  _searchNode(nodeName) {
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

  _isEntryValid(nodeName) {
    if (typeof nodeName === "string") {
      return true;
    }
    return false;
  }

}

module.exports = NameHierarchichalTree;
