const chai = require("chai");
const expect = chai.expect;
const should = chai.should();

const TreeNode = require("./../TreeNode");

describe("TreeNode.js", function() {
  it("Should exist", function() {
    expect(TreeNode).to.exist;
  });

  describe("addChild", function() {
    it("Should return 0 Ok code", function() {
      let parentNode = new TreeNode("parent");
      let childNode = new TreeNode("child");
      parentNode.addChild(childNode).should.equal(0);
    });
    it("Should return 1 Error code", function() {
      let parentNode = new TreeNode("parent");
      parentNode.addChild(null).should.equal(1);
    });
    it("Should add the parent node to the child'is parent property", function() {
      let parentNode = new TreeNode("parent");
      let childNode = new TreeNode("child");
      parentNode.addChild(childNode);
      expect(childNode.parent).to.equal(parentNode);
    });
    it("Should insert correctly in the array of the node parent", function() {
      let parentNode = new TreeNode("parent");
      let parentNode2 = parentNode;
      let childNode = new TreeNode("child");
      parentNode2.children.push(childNode);
      parentNode.addChild(childNode);
      expect(parentNode).to.equal(parentNode2);
    });
    it("Should insert correctly in the array of the node parent", function() {
      let parentNode = new TreeNode("parent");
      let parentNode2 = parentNode;
      let childNode = new TreeNode("child");
      let childNode2 = new TreeNode("child2");
      parentNode2.children.push(childNode);
      parentNode2.children.push(childNode2);
      parentNode.addChild(childNode);
      parentNode.addChild(childNode2);
      expect(parentNode).to.equal(parentNode2);
    });
  });

  describe("getChildren", function() {
    it("Should exist", function() {
      let parentNode = new TreeNode("parent");
      expect(parentNode.getChildren).to.exist;
    });
    it("Should return array", function() {
      let parentNode = new TreeNode("parent");
      parentNode.getChildren().should.be.an("array");
    });
    it("Should return empty array", function() {
      let parentNode = new TreeNode("parent");
      parentNode.getChildren("child").should.be.an("array");
    });
    it("Should return array", function() {
      let parentNode = new TreeNode("parent");
      let childNode = new TreeNode("child");
      let childNode0 = new TreeNode("child");
      let childNode2 = new TreeNode("child2");
      parentNode.addChild(childNode);
      parentNode.addChild(childNode2);

      parentNode.getChildren("child").should.be.an("array");
    });
    it("Should return all the node's children", function() {
      let parentNode = new TreeNode("parent");
      let childNode = new TreeNode("child");
      let childNode2 = new TreeNode("child2");
      parentNode.addChild(childNode);
      parentNode.addChild(childNode2);

      parentNode.getChildren().should.equal(parentNode.children);
    });
    it("Should return the matching node children and no more", function() {
      let parentNode = new TreeNode("parent");
      let childNode = new TreeNode("child");
      let childNode2 = new TreeNode("child2");
      parentNode.addChild(childNode);
      parentNode.addChild(childNode2);

      parentNode.getChildren("child").should.not.equal(parentNode.children);
    });
    it("Should return the matching node children", function() {
      let parentNode = new TreeNode("parent");
      let childNode = new TreeNode("child");
      let childNode2 = new TreeNode("child2");
      parentNode.addChild(childNode);
      parentNode.addChild(childNode2);

      let children = parentNode.getChildren("child");

      children.should.include(childNode);
      children.should.not.include(childNode2);
    });
    it("Should return all the matching nodes children", function() {
      let parentNode = new TreeNode("parent");
      let childNode1 = new TreeNode("child");
      let childNode2 = new TreeNode("child");
      let childNode3 = new TreeNode("child2");
      parentNode.addChild(childNode1);
      parentNode.addChild(childNode2);
      parentNode.addChild(childNode3);

      let children = parentNode.getChildren("child");

      children.should.include(childNode1);
      children.should.include(childNode2);
      children.should.not.include(childNode3);
    });
  });

  describe("getChild", function() {
    it("Should exist", function() {
      const parentNode = new TreeNode("parent");
      expect(parentNode.getChild).to.exist;
    });

    it("Should return undefined if no matching value", function() {
      const parentNode = new TreeNode("parent");
      expect(parentNode.getChild("test")).to.be.undefined;
    });

    it("Should return the matching node", function() {
      let parentNode = new TreeNode("parent");
      let childNode = new TreeNode("child");

      parentNode.addChild(childNode);
      parentNode.getChild("child").should.equal(childNode);
    });
    it("Should return the first matching node", function() {
      let parentNode = new TreeNode("parent");
      let childNode = new TreeNode("child");
      let childNode2 = new TreeNode("child");

      parentNode.addChild(childNode);
      parentNode.addChild(childNode2);
      parentNode.getChild("child").should.not.be.equal(childNode2);
    });
    it("Should return the first matching node", function() {
      let parentNode = new TreeNode("parent");
      let childNode = new TreeNode("child");
      let childNode2 = new TreeNode("child");

      parentNode.addChild(childNode);
      parentNode.addChild(childNode2);
      parentNode.getChild("child").should.equal(childNode);
    });
  });
  describe("hasChildren", function() {
    it("Should return a boolean value", function() {
      let parentNode = new TreeNode("parent");
      parentNode.hasChildren("test").should.be.a("boolean");
    });
    it("Should return true", function() {
      let parentNode = new TreeNode("parent");
      let childNode = new TreeNode("child");
      parentNode.addChild(childNode);

      parentNode.hasChildren(childNode).should.equal(true);
    });
    it("Should return true", function() {
      let parentNode = new TreeNode("parent");
      let childNode = new TreeNode("child");
      let childNode1 = new TreeNode("child");
      let childNode2 = new TreeNode("child");
      parentNode.addChild(childNode);
      parentNode.addChild(childNode1);
      parentNode.addChild(childNode2);

      parentNode.hasChildren(childNode1).should.equal(true);
    });
    it("Should return false", function() {
      let parentNode = new TreeNode("parent");
      let childNode = new TreeNode("child");
      let childNode1 = new TreeNode("child");
      let childNode2 = new TreeNode("child");
      parentNode.addChild(childNode);
      parentNode.addChild(childNode1);

      parentNode.hasChildren(childNode2).should.equal(false);
    });
  });
});
