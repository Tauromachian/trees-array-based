const Validator = require("./Validator");

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
    if (!(treeNodeChildren instanceof TreeNode)) {
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
    if (!Validator.isNumber(index)) {
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