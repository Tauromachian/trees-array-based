const Validator = require("./Validator");

class TreeNode {
  constructor(value, parent) {
    this.value = value;
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
   * @param  {Number} index
   */
  removeChildren(index) {
    if (!Validator.isNumber(index)) {
      return 1;
    }
    this.children.splice(index, 1);
    return 0;
  }

  getChildren() {
    return this.children;
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

  setValue(value){
    this.value = value;
  }

  getValue(){
    return this.value;
  }
}
module.exports = TreeNode;
