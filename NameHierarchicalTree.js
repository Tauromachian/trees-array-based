const Tree = require("./Tree");

class NameHierarchichalTree extends Tree {
  addChildren(childrenName) {
    if (!Validator.isString(nodeName)) {
      return -1;
    }

    if (nodeName.split(".").length <= 1) {
      this.head.addChildren(new TreeNode(nodeName, this.head));
      return this.head;
    }

    let node = super.searchNodeByName(nodeName);
    node.addChildren(new TreeNode(nodeName, node));
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
