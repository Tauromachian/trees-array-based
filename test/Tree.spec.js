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

  describe("_wideSearchFirstMatch", function() {
    it("Should return undefined", function() {
      let tree = new Tree();
      let treeNode = new TreeNode("testName");
      tree.head.addChildren(treeNode);

      expect(tree._wideSearchFirstMatch(treeNode, "testError")).to.be.undefined;
    });
    it("Should return the matching node", function() {
      let tree = new Tree();
      let treeNode = new TreeNode("testName1");
      let treeNode2 = new TreeNode("testName2");
      let treeNode3 = new TreeNode("testName3");
      treeNode.addChildren(treeNode2);
      treeNode.addChildren(treeNode3);
      tree.head.addChildren(treeNode);

      tree._wideSearchFirstMatch(treeNode, "testName2").should.equal(treeNode2);
      tree._wideSearchFirstMatch(treeNode, "testName3").should.equal(treeNode3);
    });
    it("Should return the matching node", function() {
      let tree = new Tree();
      let treeNode = new TreeNode("testName1");
      let treeNode2 = new TreeNode("testName2");
      let treeNode3 = new TreeNode("testName3");
      treeNode.addChildren(treeNode2);
      treeNode2.addChildren(treeNode3);
      tree.head.addChildren(treeNode);

      tree._wideSearchFirstMatch(treeNode, "testName2").should.equal(treeNode2);
      tree._wideSearchFirstMatch(treeNode, "testName3").should.equal(treeNode3);
    });
  });

  describe("_wideSearchAllMatch", function() {
    it("Should be empty", function() {
      let tree = new Tree();
      let treeNode = new TreeNode("testName");
      tree.head.addChildren();

      expect(tree._wideSearchAllMatch(treeNode, "testError")).to.be.empty;
    });
    it("Should return all the matching nodes", function() {
      let tree = new Tree();
      let treeNode1 = new TreeNode("testName1");
      let treeNode2 = new TreeNode("testName2");
      let treeNode3 = new TreeNode("testName2");
      let treeNode4 = new TreeNode("testName2");
      let treeNode5 = new TreeNode("testName2");
      treeNode1.addChildren(treeNode2);
      treeNode1.addChildren(treeNode3);
      treeNode2.addChildren(treeNode3);
      treeNode2.addChildren(treeNode4);
      treeNode3.addChildren(treeNode5);
      tree.head.addChildren(treeNode1);

      tree._wideSearchAllMatch(treeNode1, "testName2").should.include(treeNode2);
      tree._wideSearchAllMatch(treeNode1, "testName2").should.include(treeNode3);
      tree._wideSearchAllMatch(treeNode1, "testName2").should.include(treeNode4);
      tree._wideSearchAllMatch(treeNode1, "testName2").should.include(treeNode5);
      tree._wideSearchAllMatch(treeNode1, "testName2").should.not.include(treeNode1);
    });
  });

  describe("getChildOf", function () {
    it("Should return an array", function () {
      let tree = new Tree();
      expect(tree.getChildOf("testError")).to.equal(0);
    });

    it("Should contain the children nodes", function () {
      let tree = new Tree();
      let treeNode1 = new TreeNode("testName1");
      let treeNode2 = new TreeNode("testName2");
      let treeNode3 = new TreeNode("testName2");
      let treeNode4 = new TreeNode("testName4");


      treeNode1.addChildren(treeNode2);
      treeNode1.addChildren(treeNode4);
      treeNode2.addChildren(treeNode3);
      tree.head.addChildren(treeNode1);

      tree.getChildOf("testName1").should.include(treeNode2);
      tree.getChildOf("testName1").should.include(treeNode4);
      tree.getChildOf("testName1").should.not.include(treeNode1);
      tree.getChildOf("testName1").should.not.include(treeNode3);
    });
  });

  describe("addChildren", function() {
    it("Should return a number", function() {
      let tree = new Tree();
      let treeNode = new TreeNode("testName");
      tree.addChildren(treeNode).should.be.a("number");
    });
    it("Should return a 0 Ok code", function() {
      let tree = new Tree();
      let treeNode = new TreeNode("testName");
      tree.addChildren(treeNode).should.equal(0);
    });
    it("Should return a 1 Error code", function() {
      let tree = new Tree();
      tree.addChildren().should.equal(1);
    });
    it("Should insert correctly the node", function () {
      let tree = new Tree();
      let treeNode1 = new TreeNode("testName1");
      let treeNode2 = new TreeNode("testName2");
      tree.addChildren(treeNode1);
      tree.addChildren(treeNode2);

      tree.getChildOf().should.include(treeNode1);
      tree.getChildOf().should.include(treeNode2);
    });
    it("Should insert correctly the node", function () {
      let tree = new Tree();
      let treeNode1 = new TreeNode("testName1");
      let treeNode2 = new TreeNode("testName2");
      let treeNode3 = new TreeNode("testName2");
      let treeNode4 = new TreeNode("testName4");
      
      tree.addChildren(treeNode1);
      tree.addChildren(treeNode2);
      tree.addChildren(treeNode3, treeNode1);
      tree.addChildren(treeNode4, treeNode1);

      tree.getChildOf().should.include(treeNode1);
      tree.getChildOf().should.include(treeNode2);
      tree.getChildOf("testName1").should.include(treeNode3);
      tree.getChildOf("testName1").should.include(treeNode4);

    });
  });

  describe("removeChild", function () {
    it("Should remove the node succesfully", function () {
      let tree = new Tree();
      let treeNode1 = new TreeNode("testName1");
      let treeNode2 = new TreeNode("testName2");

      tree.addChildren(treeNode1);
      tree.addChildren(treeNode2);

      tree.removeChild(treeNode1);

      tree.getChildOf().should.not.include(treeNode1);
      tree.getChildOf().should.include(treeNode2);
    });
  });
});
