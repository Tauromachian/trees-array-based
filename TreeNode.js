const Validation = require("./Validation");

class TreeNode {
  constructor(name, parent) {
    this.name = name;
    this.parent = parent;
    this.children = [];
  }
  /**
   * This method adds a children to the TreeNode
   * @param  {TreeNode} treeNodeChildren The tree node children to add
   */
  addChildren(treeNodeChildren) {
    if (!Validation.isTreeNode(treeNodeChildren)) {
      return 1;
    }

    this.children.push(treeNodeChildren);
    return 0;
  }

  /**
   * Gets the parent of this TreeNode
   */
  getParent() {
    return this.parent;
  }

  
  /**
   * @param  {Number} index
   */
  removeChildren(index) {
    if (!Validation.isNumber(index)) {
      return 1;
    }
    this.children.splice(index);
    return 0;
  }

  getChildren() {
    return this.children;
  }

}
module.exports = TreeNode;