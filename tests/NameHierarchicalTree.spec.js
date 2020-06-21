const chai = require("chai");
const expect = chai.expect;
chai.should();

const NameHierarchicalTree = require("./../src/NameHierarchicalTree");
const TreeNode = require("./../src/TreeNode");

describe("NameHierarchicalTree.js", function () {
  it("Should exist", function () {
    expect(NameHierarchicalTree).to.exist;
  });

  describe("_searchNode", function () {
    it("Should return 0", function () {
      let nameTree = new NameHierarchicalTree();
      nameTree.getChildrenOf("testErrorCode").should.equal(0);
    });
    it("Should return the node given the name", function () {
      let nameTree = new NameHierarchicalTree();

      let treeNode1 = new TreeNode("parent");
      let treeNode2 = new TreeNode("parent.child1");
      let treeNode3 = new TreeNode("parent.child2");
      treeNode1.addChild(treeNode2);
      treeNode1.addChild(treeNode3);

      nameTree.head.addChild(treeNode1);

      nameTree._searchNode("parent").name.should.equal("parent");
      nameTree
        ._searchNode("parent.child1")
        .name.should.equal("parent.child1");
      nameTree
        ._searchNode("parent.child2")
        .name.should.equal("parent.child2");
    });
  });

  describe("addChild", function () {
    it("Should return 1", function () {
      let nameTree = new NameHierarchicalTree();

      nameTree.addChild("parent");
      nameTree.addChild("testErrorCode.1").should.equal(1);
    });
    it("Should insert succesfully", function () {
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
    it("Should insert succesfully", function () {
      let nameTree = new NameHierarchicalTree("@");

      nameTree.addChild("parent");
      nameTree.addChild("parent@child1");
      nameTree.addChild("parent@child2");
      nameTree.addChild("parent@child1@child1-1");

      nameTree.head.children[0].name.should.equal("parent");
      nameTree.head.children[0].children[0].name.should.equal("parent@child1");
      nameTree.head.children[0].children[1].name.should.equal("parent@child2");
      nameTree.head.children[0].children[0].children[0].name.should.equal(
        "parent@child1@child1-1"
      );
    });
    it("Should insert succesfully", function () {
      let nameTree = new NameHierarchicalTree("/");

      nameTree.addChild("parent");
      nameTree.addChild("parent/child1");
      nameTree.addChild("parent/child2");
      nameTree.addChild("parent/child1/child1-1");

      nameTree.head.children[0].name.should.equal("parent");
      nameTree.head.children[0].children[0].name.should.equal("parent/child1");
      nameTree.head.children[0].children[1].name.should.equal("parent/child2");
      nameTree.head.children[0].children[0].children[0].name.should.equal(
        "parent/child1/child1-1"
      );
    });
  });

  describe("getChildrenOf", function () {
    it("Should return 0", function () {
      let nameTree = new NameHierarchicalTree();

      nameTree.addChild("parent");
      nameTree.addChild("parent.child1");
      nameTree.addChild("parent.child2");

      nameTree.getChildrenOf("testErrorCode").should.equal(0);
    }),
      it("Should return the children of the node", function () {
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

  describe("removeChild", function () {
    it("Should return 1", function () {
      let nameTree = new NameHierarchicalTree();

      nameTree.addChild("parent");
      nameTree.addChild("parent.child1");

      nameTree.removeChild("testError").should.equal(1);
    });
    it("Should remove succesfully", function () {
      let nameTree = new NameHierarchicalTree();

      nameTree.addChild("parent");
      nameTree.addChild("parent.child1");
      nameTree.addChild("parent.child2");
      nameTree.addChild("parent.child1.child1-1");


      nameTree.removeChild("parent.child1.child1-1");
      nameTree.getChildrenOf("parent.child1").should.be.empty;

      nameTree.removeChild("parent");
      nameTree._searchNode("parent").should.equal(0);
    });
  });
});
