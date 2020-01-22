class TreeNode {
  constructor(value, parent) {
    this.value = value;
    this.parent = parent;
    this.children = [];
  }

  addChildren(treeNodeChildren) {
    if (!(treeNodeChildren instanceof TreeNode)) {
      return 1;
    }

    this.children.push(treeNodeChildren);
    return 0;
  }

  getParent() {
    return this.parent;
  }

  removeChildren(index) {
    if (!(index instanceof Number)) {
      return 1;
    }
    this.children.splice(index);
    return 0;
  }

  getChildren() {
    return this.children;
  }

}
