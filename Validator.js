const TreeNode = require("./TreeNode");
const Tree = require("./Tree");

class Validator {
  static isNumber(value) {
    return value instanceof Number;
  }

  static isString(value) {
    return typeof value === "string";
  }

}
module.exports = Validator;
