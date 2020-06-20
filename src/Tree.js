const TreeNode = require("./TreeNode");
const GenericTree = require("./GenericTree");

/**
 * Generic array tree based structure
 */
class Tree extends GenericTree {
  constructor() {
    super();
  }

  /**
   * This method adds a child (TreeNode) to a parent(TreeNode).
   * @param {String, TreeNode, Number} object The name or int of the tree name. 
   * If a TreeNode type is provided it will be inserte as is.
   * @param {String, TreeNode, undefined, null} nodeParent Node parent of the children to insert. 
   * If no noParent is provided the child will be inserted to the head.
   * @param {any} value Value of the Node. 
   */
  addChild(object, nodeParent, value) {
    if (!this._isEntryValid(object)) {
      return 1;
    }

    let node;

    if (typeof object === "number") {
      object = String(object);
    }

    if (typeof object === "string") {
      node = new TreeNode(object);
    }

    node.setValue(value);
    this._addChildrenTreeNode(node, nodeParent);
    return 0;
  }

  _addChildrenTreeNode(treeNode, nodeParent) {
    if (!nodeParent) {
      this._addNodeToHead(treeNode);
      return 1;
    }

    let nodeParentName;
    if (nodeParent instanceof TreeNode) {
      nodeParentName = nodeParent.name;
    } else {
      nodeParentName = nodeParent;
    }

    let parentNode = this._deepSearchFirstMatch(this.head, nodeParentName);
    parentNode.addChild(treeNode);

    return 1;
  }

  _toTreeNode(object) {
    if(object instanceof TreeNode) {
      return object;
    }

    let node;

    if (typeof object === "number") {
      object = String(object);
    }

    if (typeof object === "string") {
      node = new TreeNode(object);
    }

    return node;
  }

  _addNodeToHead(node) {
    this.head.addChild(node);
  }

  _deepSearchAllMatch(parent, name, searched = []) {
    return parent.children.flatMap(child => {
      searched.concat(this._deepSearchAllMatch(child, name, searched));

      if (this.isEqual(child, name)) {
        searched.push(child);
      }

      return searched;
    });
  }

  _deepSearchFirstMatch(parent, name) {
    const treeNodeOneElementArray = this._deepSearchFirstMatchRecursive(parent, name);
    if (Array.isArray(treeNodeOneElementArray)) {
      return treeNodeOneElementArray.pop();
    }
    return treeNodeOneElementArray;
  }

  _deepSearchFirstMatchRecursive(parent, name) {
    if (this.isEqual(parent, name)) {
      return parent;
    }

    if (parent.hasChildren(name)) {
      return parent.getChild(name);
    }

    return parent.children.flatMap(child =>
      this._deepSearchFirstMatchRecursive(child, name)
    );
  }

  isEqual(nodeOne, nodeTwo) {
    if (nodeOne instanceof TreeNode && nodeTwo instanceof TreeNode) {
      return nodeOne.name === nodeTwo.name;
    }
    if (!(nodeOne instanceof TreeNode || nodeTwo instanceof TreeNode)) {
      return nodeOne === nodeTwo;
    }
    if (nodeOne instanceof TreeNode) {
      return nodeOne.name === nodeTwo;
    } else {
      return nodeOne === nodeTwo.name;
    }
  }

  _searchNode(nodeName) {
    let node;

    if (nodeName instanceof TreeNode) {
      node = this._deepSearchFirstMatch(this.head, nodeName.getName());
    } else {
      node = this._deepSearchFirstMatch(this.head, nodeName);
    }

    return node;
  }

  _isEntryValid(nodeName) {
    if (typeof nodeName === "string" || typeof nodeName === "number" || nodeName instanceof TreeNode) {
      return true;
    }
    return false;
  }

}
module.exports = Tree;
