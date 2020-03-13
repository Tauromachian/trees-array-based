# A trees datastructure based on arrays.

The objective of this module is to provide a basic and generic Tree data structure and some of its derivatives.

This package has three main object classes for now.

#### TreeNode:
The nodes of the tree. 
This class has children and a reference to the parent.
You can use them directly for creating your own Tree structure based on array.

###### Tree:
A generic Tree estructure.
Provides the validator and the methods 

###### NameHierarchicalTree:
A Tree datastructure that provides a hierarchi to the way that nodes are inserted based on the values of the nodes.
Example:
"father"
"father.child"
Here father.child is the child of the father and will be inserted as a child of the father node.
This Tree does'nt accepts repeated values.

## How to import:
```
const TreeNode = require("trees-array-based").TreeNode;
const Tree = require("trees-array-based").Tree;
const NameHierarchicalTree = require("trees-array-based").NameHierarchicalTree;
```

## How to use:
###### TreeNode
TreeNode is a perfectly independent class that can be use to create your own datastructure.
TreeNode has mainly two things a value and children.
```
const TreeNode = require("trees-array-based").TreeNode;

let node1 = new TreeNode("testValue1");
let node2 = new TreeNode("testValue2");
let node3 = new TreeNode("testValue3");
let node4 = new TreeNode("testValue4");

node1.addChild(node2);
node2.addChild(node3);
node3.addChild(node4);

node2.removeChild(node3);
```
###### Tree:
Tree is the most generic part of this module. It abstracts the work with TreeNodes.
Nodes can be repeated.
```
const TreeNode = require("trees-array-based").Tree;
const TreeNode = require("trees-array-based").TreeNode;

let tree = new Tree();

let node1 = new TreeNode("testValue1");
let node2 = new TreeNode("testValue2");
let node3 = new TreeNode("testValue3");
let node4 = new TreeNode("testValue4");

tree.addChild(node1);
tree.addChild(node2);

tree.addChild(node3, node2);
tree.addChild(node4, node2);
tree.addChild(node4, node3);

tree.removeChild(node3);
tree.removeChild("testValue4");
```
###### NameHierarchicalTree:
NameHierarchicalTree creates a tree based on a hierarchical name structure using dots.
Example
parent

This are the children:
parent.child1
parent.child2

```
const NameHierarchicalTree = require("trees-array-based").NameHierarchicalTree;

let nameTree = new NameHierarchicalTree();

nameTree.addChild("parent");
nameTree.addChild("parent.child1");
nameTree.addChild("parent.child2");

nameTree.removeChild("parent.child1");

nameTree.getChildrenOf("parent");

let treeNode = nameTree.getNodeByName("parent");
```