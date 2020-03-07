const chai = require("chai");
const expect = chai.expect;
const should = chai.should();

const Tree = require("./../Tree");
const TreeNode = require("./../TreeNode");

describe("Tree.js", function() {
  it("Should exist", function() {
    expect(Tree).to.exist;
  });

  describe("isEqual", function () {
    it("Should return a boolean", function () {
      let tree = new Tree();
      let treeNode1 = new TreeNode("testName");
      let treeNode2 = new TreeNode("testName");
      tree.isEqual(treeNode1, treeNode2).should.be.an("boolean");
    });
    it("Should return true", function () {
      let tree = new Tree();
      let treeNode1 = new TreeNode("testName");
      let treeNode2 = new TreeNode("testName");
      tree.isEqual(treeNode1, treeNode2).should.equal(true);
    });
    it("Should return true", function () {
      let tree = new Tree();
      let treeNode1 = new TreeNode("testName");
      let treeNode2 = new TreeNode("testName");
      tree.isEqual("testName", "testName").should.equal(true);
    });
    it("Should return false", function () {
      let tree = new Tree();
      let treeNode1 = new TreeNode("testName");
      let treeNode2 = new TreeNode("testName2");
      tree.isEqual(treeNode1, treeNode2).should.equal(false);
    });
  });

  describe("_wideSearchFirstMatch", function () {
    it("Should return 1 Error code", function () {
      let tree = new Tree();
      let treeNode = new TreeNode("testName");
      tree.head.addChildren(treeNode);

      tree._wideSearchFirstMatch(treeNode, "testError").should.equal(1);
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
  });
});
