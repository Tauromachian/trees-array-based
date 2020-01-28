const Tree = require("./Tree");
const TreeNode = require("./TreeNode");
const Validator = require("./Validator");


/**
 * This tree is'nt generic, is specialized to have a name hierarchy.
 */
class NameHierarchichalTree extends Tree {
  constructor() {
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

    let nameArray = childrenName.split(".");

    if (nameArray.length <= 1) {
      this.head.addChildren(new TreeNode(childrenName, this.head));
      return this.head;
    }

    let parentName = "";

    for (let i = 0; i < (nameArray.length - 1); i++) {
      parentName = parentName.concat(nameArray[i],".");      
    }
    parentName = parentName.substring(0, parentName.length - 1);

    let node = this.searchNodeByName(parentName);

    if(!node){
      return 0;
    }

    node.addChildren(new TreeNode(childrenName, node));
    return node;
  }

  removeChildren(childrenName) {
    let node = this.searchNodeByName(childrenName);
    let parentNode = node.getParent();

    const index = parentNode.children.indexOf(node);
    parentNode.children.splice(index);
  }

  getChildrenOf(childrenName) {
    let node = this.getNodeByName(childrenName);
  }

  getNodeByName(nodeName) {
    return this.searchNodeByName(nodeName);
  }

  /**
   * Searchs in the tree a node with the name providen
   * @param  {String} nodeName name of the node to search
   */
  searchNodeByName(nodeName) {
    let node = this._recursiveSearch(this.head, nodeName);

    if (node) {
      return node;
    } else return 0;
  }

  _recursiveSearch(head, nodeName) {
    let parent;
    let children = head.children;
    for (const key in children) {
      parent = this._search(children[key], nodeName);
      if (parent){
        return parent;
      }
    }
    return null;
  }

  _search(parent, nodeName) {
    if (parent.value == nodeName) {
      return parent;
    }
    for (const key in parent.children) {
      if (nodeName.includes(parent.children[key].value)) {
        return this._search(parent.children[key], nodeName);
      }
    }
    return null;
  }
}

module.exports = NameHierarchichalTree;
