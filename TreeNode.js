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

    treeNodeChildren.setParent(this);
    this.children.push(treeNodeChildren);
    return 0;
  }

  
  removeChildren(object){
    if(!object){
      return -1;
    }

    if(!this.hasChildren(object)){
      return 1;
    }

    const index = this._indexOf(object);
    return this._removeChildrenByIndex(index);
  }

  _indexOf(object){
    this.children.find(child => child.value === object);
  }

  _removeChildrenByIndex(index) {
    if (!Validator.isNumber(index)) {
      return 1;
    }
    this.children.splice(index, 1);
    return 0;
  }

  getChildren(value) {
    if(!value){
      return this.children;
    }
    else{
      return this.children.filter(child => child.value === value);
    }
  }

  getChild(value) {
    return this.children.find(child => child.value === value);
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

  hasChildren(node){
    if(!node){
      return false;
    }

    if(node instanceof TreeNode){
      return this.children.includes(node);
    }

    if(this.getChild(node)){
      return true;
    }

    return false;
  }
}
module.exports = TreeNode;
