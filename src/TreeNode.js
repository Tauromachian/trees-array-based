class TreeNode {
  constructor(name, parent, value) {
    this.name = name;
    this.value = value;
    this.parent = parent;
    this.children = [];
  }
  /**
   * This method adds a children to the TreeNode
   * @param  {TreeNode} treeNodeChildren The tree node children to add
   */
  addChild(treeNodeChildren) {
    if (!(treeNodeChildren instanceof TreeNode)) {
      return 1;
    }

    treeNodeChildren.setParent(this);
    this.children.push(treeNodeChildren);
    return 0;
  }

  removeChild(object) {
    if (!object) {
      return -1;
    }

    if (!this.hasChildren(object)) {
      return 1;
    }

    let index;

    if (object instanceof TreeNode) {
      index = this._indexOf(object.name);
    } else {
      index = this._indexOf(object);
    }

    return this._removeChildrenByIndex(Number(index));
  }

  _indexOf(object) {
    for (const index in this.children) {
      if (this.children[index].name === object) {
        return index;
      }
    }
  }

  _removeChildrenByIndex(index) {
    if (typeof index !== "number") {
      return 1;
    }
    this.children.splice(index, 1);
    return 0;
  }

  getChildren(name) {
    if (!name) {
      return this.children;
    } else {
      return this.children.filter((child) => child.name === name);
    }
  }

  getChild(name) {
    return this.children.find((child) => child.name === name);
  }

  /**
   * @param  {TreeNode} parent Parent of the node
   */
  setParent(parent) {
    this.parent = parent;
  }

  /**
   * Gets the parent of this TreeNode
   */
  getParent() {
    return this.parent;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setValue(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  hasChildren(node) {
    if (!node) {
      return false;
    }

    if (node instanceof TreeNode) {
      return this.children.includes(node);
    }

    if (this.getChild(node)) {
      return true;
    }

    return false;
  }

  isEqual(node) {
    if(!(node instanceof TreeNode || typeof node === 'string')) {
      throw new Error("Expected node to be either type of string or instance of TreeNode");
    }

    if (node instanceof TreeNode) {
      return node.name === this.name;
    } else {
      return node === this.name;
    }
  }
}
module.exports = TreeNode;
