const chai = require("chai");
const expect = chai.expect;
const should = chai.should();

const Tree = require("./../Tree");

describe("Tree.js", function () {
  it("Should exist", function () {
    expect(Tree).to.exist;
  });

  describe("Trees addChildren", function () {
    it("Should return a number", function () {
      let tree = new Tree();
      tree.addChildren.should.be.a("number");
    }); 
  });
});

