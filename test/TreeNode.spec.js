const chai = require("chai");
const expect = chai.expect;
const should = chai.should();

const TreeNode = require("./../TreeNode");

describe("TreeNode.js", function() {
  it("Should exist", function() {
    expect(TreeNode).to.exist;
  });

  describe("addChildren", function() {
    it("Should return 0 Ok code", function() {
      let parentNode = new TreeNode("parent");
      let childNode = new TreeNode("child");
      parentNode.addChildren(childNode).should.equal(0);
    });
    it("Should return 1 Error code", function () {
      let parentNode = new TreeNode("parent");
      parentNode.addChildren(null).should.equal(1);
    });
  });
});
