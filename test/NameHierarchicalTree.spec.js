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
      nameTree.head.children[0].children[0].children[0].value.should.equal(
        "parent.child1.child1-1"
      );
    });
  });

  describe("getNodeByName", function() {
    it("Should return the node given the name", function() {
      let nameTree = new NameHierarchicalTree();

      nameTree.addChild("parent");
      nameTree.addChild("parent.child1");
      nameTree.addChild("parent.child2");
      nameTree.addChild("parent.child1.child1-1");

      nameTree.getNodeByName("parent").value.should.equal("parent");
      nameTree
        .getNodeByName("parent.child1")
        .value.should.equal("parent.child1");
      nameTree
        .getNodeByName("parent.child2")
        .value.should.equal("parent.child2");
      nameTree
        .getNodeByName("parent.child1.child1-1")
        .value.should.equal("parent.child1.child1-1");
    });
  });

  describe("getChildrenOf", function() {
    it("Should return the children of the node", function() {
      let nameTree = new NameHierarchicalTree();

      nameTree.addChild("parent");
      nameTree.addChild("parent.child1");
      nameTree.addChild("parent.child2");
      nameTree.addChild("parent.child1.child1-1");

      nameTree.getChildrenOf("parent")[0].value.should.equal("parent.child1");
      nameTree.getChildrenOf("parent")[1].value.should.equal("parent.child2");
      nameTree
        .getChildrenOf("parent.child1")[0]
        .value.should.equal("parent.child1.child1-1");
    });
  });

  describe("removeChild", function() {
    it("Should remove succesfully", function() {
      let nameTree = new NameHierarchicalTree();

      nameTree.addChild("parent");
      nameTree.addChild("parent.child1");
      nameTree.addChild("parent.child2");
      nameTree.addChild("parent.child1.child1-1");


      nameTree.removeChild("parent.child1.child1-1");
      nameTree.getChildrenOf("parent.child1").should.be.empty;
      
      nameTree.removeChild("parent");
      nameTree.getNodeByName("parent").should.equal(0);
    });
  });
});
