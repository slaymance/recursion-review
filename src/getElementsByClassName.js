// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  //console.log('getElementsByClassName called with className: ' + className );
  // your code here
  var nodes = [];// define output array

  var searchNodes = function(node){//define recurring function that takes in a node parameter
    //console.log('node.children.length: ' + node.children.length);
    //console.log('node.classList: ' + node.classList);
    var classes = node.classList;//split classes by space and add to an array
    if(classes.contains(className)){
      nodes.push(node);
    }//if class matches className, push node to ouput array
  for (var i = 0; i < node.children.length; i++){//loop through array of classes

    searchNodes(node.children[i])//call recurring function, with current node as input parameter
  }//close loop
  return;
  }
  searchNodes(document.body);
  //console.log(nodes);
  return nodes;//return output array

};
