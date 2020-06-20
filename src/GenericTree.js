const TreeNode = require("./TreeNode");

class GenericTree {
  constructor() {
    this.head = new TreeNode(null);
  }

  addChild() {}

  removeChild(nodeName) {
    if (!this._isEntryValid(nodeName)) {
      return 1;
    }

    const node = this._searchNode(nodeName);
    const nodeParent = node.getParent();
    nodeParent.removeChild(node);
    return 0;
  }

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