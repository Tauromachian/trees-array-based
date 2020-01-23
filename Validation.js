const TreeNode = require("./TreeNode");
const Tree = require("./Tree");

class Validation{
  constructor(value){
    this.value = value;
  }

  static isNumber(value){
    return (value instanceof Number);
  }

  static isString(value){
    return (value instanceof String);
  }

  static isTreeNode(value){
    return (value instanceof TreeNode);
  }

  static isTree(value){
    return (value instanceof Tree);
  }
}

module.exports = Validation;