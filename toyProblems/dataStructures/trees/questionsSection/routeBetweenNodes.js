//given a directed graph find out if there is a route between two nodes see has edges method


// ------------------------
// Instantiate a new graph
var Graph = function() {
  //create an array of all nodes
  this.nodes = {};
  this.edges = {};

};

// ------------------------
// Add a node to the graph, passing in the node's value.
//constant
Graph.prototype.addNode = function(node) {
  if(this.nodes[node] === undefined) {
    this.nodes[node] = true;
  }
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
//constant
Graph.prototype.contains = function(node) {
  return this.nodes[node] ? true : false;
};

// ------------------------
// Removes a node from the graph.
//constant
Graph.prototype.removeNode = function(node) {
  if(this.contains(node)) {
    delete this.nodes[node];
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
//constant
Graph.prototype.hasEdge = function(fromNode, toNode) {

  if (this._getEdge(fromNode, toNode)){
    return true;
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
//constant
Graph.prototype.addEdge = function(fromNode, toNode) {
  if(this.contains(fromNode) && this.contains(toNode)) {
    var edgeSet = [fromNode, toNode];
    this.edges[edgeSet] = true;
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
//constant
Graph.prototype.removeEdge = function(fromNode, toNode) {

  var edgeToDelete = this._getEdge(fromNode,toNode);
  if(edgeToDelete) {
    delete this.edges[edgeToDelete];
  }
  
};

Graph.prototype._getEdge = function(fromNode, toNode){
//constant
  if(this.edges[ [toNode, fromNode] ]) {
    return [toNode, fromNode];
  } else if(this.edges[ [fromNode, toNode] ]) {
    return [fromNode, toNode];
  }
  else {
    return false;
  }

};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
//linear
Graph.prototype.forEachNode = function(cb) {

 Object.keys(this.nodes).forEach(cb);

};



