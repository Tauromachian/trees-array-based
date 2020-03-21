const chai = require("chai");
const expect = chai.expect;
const should = chai.should();

const NameHierarchicalTree = require(".././src/NameHierarchicalTree");
const TreeNode = require(".././src/TreeNode");

describe("NameHierarchicalTree.js", function() {
  it("Should exist", function() {
    expect(NameHierarchicalTree).to.exist;
  });

  describe("addChild", function() {
    it("Should return -1", function () {
      let nameTree = new NameHierarchicalTree();

      nameTree.addChild(1).should.equal(-1);
      nameTree.addChild([]).should.equal(-1);
      nameTree.addChild(true).should.equal(-1);
    });
    it("Should return 1", function () {
      let nameTree = new NameHierarchicalTree();

      nameTree.addChild("parent");
      nameTree.addChild("testErrorCode.1").should.equal(1);
    });
    it("Should insert succesfully", function() {
      let nameTree = new NameHierarchicalTree();

      nameTree.addChild("parent");
      nameTree.addChild("parent.child1");
      nameTree.addChild("parent.child2");
      nameTree.addChild("parent.child1.child1-1");

      nameTree.head.children[0].name.should.equal("parent");
      nameTree.head.children[0].children[0].name.should.equal("parent.child1");
      nameTree.head.children[0].children[1].name.should.equal("parent.child2");
      nameTree.head.children[0].children[0].children[0].name.should.equal(
        "parent.child1.child1-1"
      );
    });
  });

  describe("getNodeByName", function() {
    it("Should return 0", function () {
      let nameTree = new NameHierarchicalTree();

      nameTree.addChild("parent");
      nameTree.addChild("parent.child1");
      nameTree.addChild("parent.child2");

      nameTree.getChildrenOf("testErrorCode").should.equal(0);      
    }),
    it("Should return the node given the name", function() {
      let nameTree = new NameHierarchicalTree();

      nameTree.addChild("parent");
      nameTree.addChild("parent.child1");
      nameTree.addChild("parent.child2");
      nameTree.addChild("parent.child1.child1-1");

      nameTree.getNodeByName("parent").name.should.equal("parent");
      nameTree
        .getNodeByName("parent.child1")
        .name.should.equal("parent.child1");
      nameTree
        .getNodeByName("parent.child2")
        .name.should.equal("parent.child2");
      nameTree
        .getNodeByName("parent.child1.child1-1")
        .name.should.equal("parent.child1.child1-1");
    });
  });

  describe("getChildrenOf", function() {
    it("Should return 0", function () {
      let nameTree = new NameHierarchicalTree();

      nameTree.addChild("parent");
      nameTree.addChild("parent.child1");
      nameTree.addChild("parent.child2");

      nameTree.getChildrenOf("testErrorCode").should.equal(0);      
    }),
    it("Should return the children of the node", function() {
      let nameTree = new NameHierarchicalTree();

      nameTree.addChild("parent");
      nameTree.addChild("parent.child1");
      nameTree.addChild("parent.child2");
      nameTree.addChild("parent.child1.child1-1");

      nameTree.getChildrenOf("parent")[0].name.should.equal("parent.child1");
      nameTree.getChildrenOf("parent")[1].name.should.equal("parent.child2");
      nameTree
        .getChildrenOf("parent.child1")[0]
        .name.should.equal("parent.child1.child1-1");
    });
  });

  describe("removeChild", function() {
    it("Should return 1", function () {
      let nameTree = new NameHierarchicalTree();

      nameTree.addChild("parent");
      nameTree.addChild("parent.child1");

      nameTree.removeChild("testError").should.equal(1);
    });
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
