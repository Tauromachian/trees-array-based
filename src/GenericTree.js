const TreeNode = require("./TreeNode");

class GenericTree {
  constructor() {
    this.head = new TreeNode(null);
  }

  addChild() {}

  /**
   * Removes a node who's name is passed
   * @param {nodeName} nodeName the name of the node that needs to be removed
   */
  removeChild(nodeName) {
    if (!this._isEntryValid(nodeName)) {
      return 1;
    }

    const node = this._searchNode(nodeName);
    const nodeParent = node.getParent();
    nodeParent.removeChild(node);
    return 0;
  }

  /**
   * 
   * @param {nodeName} nodeName the name of the node who's names are going to be returned
   */
  getChildrenOf(nodeName) {
    const node = this.getNode(nodeName);

    if (!node) {
      return 0;
    }

    return node.getChildren();
  }

  getNode(nodeName) {
    if (!this._isEntryValid(nodeName)) {
      return 0;
    }

    const node = this._searchNode(node);

    if (!node) {
      return 0;
    }

    return node;
  }

  getValue(nodeName) {
    const node = this.getNode(nodeName);

    if (!node) {
      return 0;
    }

    return node.getValue();
  }

  _isEntryValid(nodeName) {}

  _searchNode(nodeName) {}
}

module.exports = GenericTree;