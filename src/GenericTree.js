const TreeNode = require("./TreeNode");

class GenericTree {
  constructor() {
    this.head = new TreeNode(null);
  }

  addChild() { }

  /**
   * Removes a node who's name is passed
   * @param {String} nodeName the name of the node that needs to be removed
   */
  removeChild(nodeName) {
    if (!this._isEntryValid(nodeName)) {
      return 1;
    }

    const node = this._searchNode(nodeName);

    if (!node) {
      return 1;
    }

    const nodeParent = node.getParent();
    nodeParent.removeChild(node);
    return 0;
  }

  /**
   * 
   * @param {String} nodeName the name of the node who's names are going to be returned
   */
  getChildrenOf(nodeName) {
    if (!nodeName) {
      return this.head.getChildren();
    }

    const node = this.getNode(nodeName);

    if (!node) {
      return 0;
    }

    return node.getChildren();
  }

  /**
   * Returns a node who's name is the object parameter.
   * @param {String} object Name of the node.
   */
  getNode(nodeName) {
    if (!this._isEntryValid(nodeName)) {
      return 0;
    }

    const node = this._searchNode(nodeName);

    if (!node) {
      return 0;
    }

    return node;
  }

  /**
   * Gets the value of a node whos value is passed as an argument
   * @param {String} nodeName The name of the node whos value is going to be returned
   */
  getValue(nodeName) {
    const node = this.getNode(nodeName);

    if (!node) {
      return 0;
    }

    return node.getValue();
  }

  _isEntryValid(nodeName) { }

  _searchNode(nodeName) { }
}

module.exports = GenericTree;