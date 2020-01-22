class TreeNode {
  constructor(value, parent) {
    this.value = value;
    this.parent = parent;
    this.brother = null;
    this.children = [];
  }

  addChildren(treeNodeChildren) {
    if (!(treeNodeChildren instanceof TreeNode)) {
      return 1;
    }

    this.children.push(treeNodeChildren);
    return 0;
  }

  addBrother(treeNodeChildren) {
    if (!(treeNodeChildren instanceof TreeNode)) {
      return 1;
    }

    let currentBro = this.brother;
    while (currentBro) {
      currentBro = currentBro.getBrother();
    }

    currentBro.brother = treeNodeChildren;
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

  removeBrother(index) {
    if (!(index instanceof Number)) {
      return 1;
    }

    let currentBro = this.brother;
    let beforeBro = null;
    let i = 0;
    while (currentBro && i != index) {
      beforeBro = currentBro;
      currentBro = currentBro.getBrother();
    }

    if (i != index) {
      return -1;
    }

    if (!currentBro) {
      beforeBro = null;
    } else {
      beforeBro = currentBro.getBrother();
    }

    return 0;
  }

  getChildren() {
    return this.children;
  }

  getBrother() {
    return this.brother;
  }
}
