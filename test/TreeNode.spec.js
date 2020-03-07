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
    it("Should return 1 Error code", function() {
      let parentNode = new TreeNode("parent");
      parentNode.addChildren(null).should.equal(1);
    });
    it("Should add the parent node to the child'is parent property",function () {
      let parentNode = new TreeNode("parent");
      let childNode = new TreeNode("child");
      parentNode.addChildren(childNode);
      expect(childNode.parent).to.equal(parentNode);
    })
    it("Should insert correctly in the array of the node parent", function() {
      let parentNode = new TreeNode("parent");
      let parentNode2 = parentNode;
      let childNode = new TreeNode("child");
      parentNode2.children.push(childNode);
      parentNode.addChildren(childNode);
      expect(parentNode).to.equal(parentNode2);
    });
    it("Should insert correctly in the array of the node parent", function() {
      let parentNode = new TreeNode("parent");
      let parentNode2 = parentNode;
      let childNode = new TreeNode("child");
      let childNode2 = new TreeNode("child2");
      parentNode2.children.push(childNode);
      parentNode2.children.push(childNode2);
      parentNode.addChildren(childNode);
      parentNode.addChildren(childNode2);
      expect(parentNode).to.equal(parentNode2);
    });
  });

  describe("getChildren", function () {
    it("Should return all the node's children",function () {
      let parentNode = new TreeNode("parent");
      let childNode = new TreeNode("child");
      let childNode2 = new TreeNode("child2");
      parentNode.addChildren(childNode);
      parentNode.addChildren(childNode2);
      
      parentNode.getChildren().should.equal(parentNode.children);
    });
    it("Should return the matching node children and no more",function () {
      let parentNode = new TreeNode("parent");
      let childNode = new TreeNode("child");
      let childNode2 = new TreeNode("child2");
      parentNode.addChildren(childNode);
      parentNode.addChildren(childNode2);
      
      parentNode.getChildren("child").should.not.equal(parentNode.children);
    });
    it("Should return the matching node children",function () {
      let parentNode = new TreeNode("parent");
      let childNode = new TreeNode("child");
      let childNode2 = new TreeNode("child2");
      parentNode.addChildren(childNode);
      parentNode.addChildren(childNode2);
      
      parentNode.getChildren("child").should.not.equal([childNode]);
    });
    it("Should return all the matching nodes children",function () {
      let parentNode = new TreeNode("parent");
      let childNode = new TreeNode("child");
      let childNode0 = new TreeNode("child");
      let childNode2 = new TreeNode("child2");
      parentNode.addChildren(childNode);
      parentNode.addChildren(childNode2);
      
      parentNode.getChildren("child").should.not.equal([childNode, childNode0]);
    });
  });
});
