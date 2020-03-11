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

const node1 = new TreeNode("test");
const tree = new Tree();
const nameTree = new NameHierarchicalTree();
```
## How to use:
```
const TreeNode = require("trees-array-based").TreeNode;
const NameHierarchicalTree = require("trees-array-based").NameHierarchicalTree;

const node1 = new TreeNode("test");
const node2 = new TreeNode("test");
const tree = new NameHierarchicalTree();
tree.addChildren(node1);
tree.addChildren(node2);
```