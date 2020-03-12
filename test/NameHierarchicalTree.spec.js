const chai = require("chai");
const expect = chai.expect;
const should = chai.should();

const NameHierarchicalTree = require("./../NameHierarchicalTree");
const TreeNode = require("./../TreeNode");

describe("NameHierarchicalTree.js", function() {
  it("Should exist", function() {
    expect(NameHierarchicalTree).to.exist;
  });

  describe("addChild", function() {
    it("Should insert succesfully", function() {
      let nameTree = new NameHierarchicalTree();

      nameTree.addChild("parent");
      nameTree.addChild("parent.child1");
      nameTree.addChild("parent.child2");
      nameTree.addChild("parent.child1.child1-1");

      nameTree.head.children[0].value.should.equal("parent");
      nameTree.head.children[0].children[0].value.should.equal("parent.child1");
      nameTree.head.children[0].children[1].value.should.equal("parent.child2");
      nameTree.head.children[0].children[0].children[0].value.should.equal("parent.child1.child1-1");
    });
  });
});
