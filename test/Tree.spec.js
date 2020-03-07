const chai = require("chai");
const expect = chai.expect;
const should = chai.should();

const Tree = require("./../Tree");
const TreeNode = require("./../TreeNode");

describe("Tree.js", function() {
  it("Should exist", function() {
    expect(Tree).to.exist;
  });

  describe("Trees addChildren", function() {
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
