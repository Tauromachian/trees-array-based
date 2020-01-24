const Tree = require("./Tree");
const TreeNode = require("./TreeNode");
const Validator = require("./Validator");

class NameHierarchichalTree extends Tree {
  
  constructor(){
    super();
  }
  /**
   * Searchs in the tree hierarchy and adds a new node in its corresponing place
   * Inserts a node to the end of the name hierarchy
   * @param  {String} nodeName The name of the node thats gonna be inserted
   */
  addChildren(childrenName) {
    if (!Validator.isString(childrenName)) {
      return -1;
    }

    if (childrenName.split(".").length <= 1) {
      this.head.addChildren(new TreeNode(childrenName, this.head));
      return this.head;
    }

    let node = super.searchNodeByName(childrenName);
    node.addChildren(new TreeNode(childrenName, node));
    return node;
  }

  removeChildren(childrenName) {
    let node = super.searchNodeByName(childrenName);
    let parentNode = node.getParent();
    for (const key in parentNode) {
      if(parentNode[key].name === childrenName){
        parentNode.splice(key, 1);
      }
    }
  }

  getChildrenOf(childrenName) {
    let node = this.getNodeByName(childrenName);
  }

  getNodeByName(childrenName) {
    return super.searchNodeByName(childrenName);
  }
}

module.exports = NameHierarchichalTree;