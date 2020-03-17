const chai = require("chai");
const expect = chai.expect;
const should = chai.should();

const Tree = require("./../Tree");
const TreeNode = require("./../TreeNode");

describe("Tree.js", function() {
  it("Should exist", function() {
    expect(Tree).to.exist;
  });

  describe("isEqual", function() {
    it("Should return a boolean", function() {
      let tree = new Tree();
      let treeNode1 = new TreeNode("testName");
      let treeNode2 = new TreeNode("testName");
      tree.isEqual(treeNode1, treeNode2).should.be.an("boolean");
    });
    it("Should return true", function() {
      let tree = new Tree();
      let treeNode1 = new TreeNode("testName");
      let treeNode2 = new TreeNode("testName");
      tree.isEqual(treeNode1, treeNode2).should.equal(true);
    });
    it("Should return true", function() {
      let tree = new Tree();
      tree.isEqual("testName", "testName").should.equal(true);
    });
    it("Should return true", function() {
      let tree = new Tree();
      let treeNode1 = new TreeNode("testName");
      tree.isEqual(treeNode1, "testName").should.equal(true);
    });
    it("Should return true", function() {
      let tree = new Tree();
      let treeNode2 = new TreeNode("testName");
      tree.isEqual("testName", treeNode2).should.equal(true);
    });
    it("Should return false", function() {
      let tree = new Tree();
      let treeNode1 = new TreeNode("testName");
      let treeNode2 = new TreeNode("testName2");
      tree.isEqual(treeNode1, treeNode2).should.equal(false);
    });
  });

  describe("_deepSearchFirstMatch", function() {
    it("Should return undefined", function() {
      let tree = new Tree();
      let treeNode = new TreeNode("testName");
      tree.head.addChild(treeNode);

      expect(tree._deepSearchFirstMatch(treeNode, "testError")).to.be.undefined;
    });
    it("Should return the matching node", function() {
      let tree = new Tree();
      let treeNode = new TreeNode("testName1");
      let treeNode2 = new TreeNode("testName2");
      let treeNode3 = new TreeNode("testName3");
      treeNode.addChild(treeNode2);
      treeNode.addChild(treeNode3);
      tree.head.addChild(treeNode);

      tree._deepSearchFirstMatch(treeNode, "testName2").should.equal(treeNode2);
      tree._deepSearchFirstMatch(treeNode, "testName3").should.equal(treeNode3);
    });
    it("Should return the matching node", function() {
      let tree = new Tree();
      let treeNode = new TreeNode("testName1");
      let treeNode2 = new TreeNode("testName2");
      let treeNode3 = new TreeNode("testName3");
      treeNode.addChild(treeNode2);
      treeNode2.addChild(treeNode3);
      tree.head.addChild(treeNode);

      tree._deepSearchFirstMatch(treeNode, "testName2").should.equal(treeNode2);
      tree._deepSearchFirstMatch(treeNode, "testName3").should.equal(treeNode3);
    });
  });

  describe("_deepSearchAllMatch", function() {
    it("Should be empty", function() {
      let tree = new Tree();
      let treeNode = new TreeNode("testName");
      tree.head.addChild();

      expect(tree._deepSearchAllMatch(treeNode, "testError")).to.be.empty;
    });
    it("Should return all the matching nodes", function() {
      let tree = new Tree();
      let treeNode1 = new TreeNode("testName1");
      let treeNode2 = new TreeNode("testName2");
      let treeNode3 = new TreeNode("testName2");
      let treeNode4 = new TreeNode("testName2");
      let treeNode5 = new TreeNode("testName2");
      treeNode1.addChild(treeNode2);
      treeNode1.addChild(treeNode3);
      treeNode2.addChild(treeNode3);
      treeNode2.addChild(treeNode4);
      treeNode3.addChild(treeNode5);
      tree.head.addChild(treeNode1);

      tree
        ._deepSearchAllMatch(treeNode1, "testName2")
        .should.include(treeNode2);
      tree
        ._deepSearchAllMatch(treeNode1, "testName2")
        .should.include(treeNode3);
      tree
        ._deepSearchAllMatch(treeNode1, "testName2")
        .should.include(treeNode4);
      tree
        ._deepSearchAllMatch(treeNode1, "testName2")
        .should.include(treeNode5);
      tree
        ._deepSearchAllMatch(treeNode1, "testName2")
        .should.not.include(treeNode1);
    });
  });

  describe("getChildrenOf", function() {
    it("Should return an array", function() {
      let tree = new Tree();
      expect(tree.getChildrenOf("testError")).to.equal(0);
    });

    it("Should contain the children nodes", function() {
      let tree = new Tree();
      let treeNode1 = new TreeNode("testName1");
      let treeNode2 = new TreeNode("testName2");
      let treeNode3 = new TreeNode("testName2");
      let treeNode4 = new TreeNode("testName4");

      treeNode1.addChild(treeNode2);
      treeNode1.addChild(treeNode4);
      treeNode2.addChild(treeNode3);
      tree.head.addChild(treeNode1);

      tree.getChildrenOf("testName1").should.include(treeNode2);
      tree.getChildrenOf("testName1").should.include(treeNode4);
      tree.getChildrenOf("testName1").should.not.include(treeNode1);
      tree.getChildrenOf("testName1").should.not.include(treeNode3);
    });
  });

  describe("addChild", function() {
    it("Should return a number", function() {
      let tree = new Tree();
      let treeNode = new TreeNode("testName");
      tree.addChild(treeNode).should.be.a("number");
    });
    it("Should return a 0 Ok code", function() {
      let tree = new Tree();
      let treeNode = new TreeNode("testName");
      tree.addChild(treeNode).should.equal(0);
    });
    it("Should return a 1 Error code", function() {
      let tree = new Tree();
      tree.addChild().should.equal(1);
    });
    it("Should insert correctly the node", function() {
      let tree = new Tree();
      let treeNode1 = new TreeNode("testName1");
      let treeNode2 = new TreeNode("testName2");
      tree.addChild(treeNode1);
      tree.addChild(treeNode2);

      tree.getChildrenOf().should.include(treeNode1);
      tree.getChildrenOf().should.include(treeNode2);
    });
    it("Should insert correctly the node", function() {
      let tree = new Tree();
      let treeNode1 = new TreeNode("testName1");
      let treeNode2 = new TreeNode("testName2");
      let treeNode3 = new TreeNode("testName2");
      let treeNode4 = new TreeNode("testName4");

      tree.addChild(treeNode1);
      tree.addChild(treeNode2);
      tree.addChild(treeNode3, treeNode1);
      tree.addChild(treeNode4, treeNode1);

      tree.getChildrenOf().should.include(treeNode1);
      tree.getChildrenOf().should.include(treeNode2);
      tree.getChildrenOf("testName1").should.include(treeNode3);
      tree.getChildrenOf("testName1").should.include(treeNode4);
    });
  });

  describe("removeChild", function() {
    it("Should remove the node succesfully", function() {
      let tree = new Tree();
      let treeNode1 = new TreeNode("testName1");
      let treeNode2 = new TreeNode("testName2");

      tree.addChild(treeNode1);
      tree.addChild(treeNode2);

      tree.removeChild(treeNode1);

      tree.getChildrenOf().should.not.include(treeNode1);
      tree.getChildrenOf().should.include(treeNode2);
    });
  });

  describe("getNode", function() {
    it("Should return the node equivalent to the name", function() {
      let tree = new Tree();

      let treeNode1 = new TreeNode("testName1");
      let treeNode2 = new TreeNode("testName2");

      tree.addChild(treeNode1);
      tree.addChild(treeNode2, treeNode1);

      tree.getNode("testName1").should.equal(treeNode1);
      tree.getNode("testName2").should.equal(treeNode2);
    });
  });

  describe("getValue", function () {
    it("Should return 0", function () {
      let tree = new Tree();

      let treeNode1 = new TreeNode("testName1");
      let treeNode2 = new TreeNode("testName2");

      tree.addChild(treeNode1, null, "testValue1");
      tree.addChild(treeNode2, treeNode1, "testValue2");

      tree.getValue(null).should.equal(0);
      tree.getValue(treeNode2).should.equal(0);
    });
    it("Should return the node value", function () {
      let tree = new Tree();

      let treeNode1 = new TreeNode("testName1");
      let treeNode2 = new TreeNode("testName2");

      tree.addChild(treeNode1, null, "testValue1");
      tree.addChild(treeNode2, treeNode1, "testValue2");

      tree.getValue("testName1").should.equal("testValue1");
      tree.getValue("testName2").should.equal("testValue2");
    });
  });
});
