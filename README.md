# A trees datastructure based on arrays.

The objective of this module is to provide a basic and generic Tree data structure and some of its derivatives.

This package has three main object classes for now.

###### TreeNode:
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

const node1 = new TreeNode("testValue1");
const node2 = new TreeNode("testValue2");
const node3 = new TreeNode("testValue3");
const node4 = new TreeNode("testValue4");

node1.addChild(node2);
node2.addChild(node3);
node3.addChild(node4);

node2.removeChild(node3);
```