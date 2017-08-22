// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if (json === 'null') {
    return null;
  } else if (!isNaN(json)) {
    return Number(json);
  } else if (json === 'true') {
    return true;
  } else if (json === 'false') {
    return false;
  }

  var firstChar = json[0];
  if (firstChar === '"') {
    return json.substring(1, json.length - 1);
  }

  if (firstChar === '[') {
    var array = [];
    if (json.length > 2) {
      var elementString = json.substring(1, json.length - 1);
      var elementArray = elementString.split(', ');
      if (elementArray.length === 1) { elementArray = elementString.split(',') }
      for (var i = 0; i < elementArray.length; i++) {
        array.push(parseJSON(elementArray[i]));
      }
    }
    return array;

  } else if (firstChar === '{') {
    var obj = {};
    if (json.length > 2) {
      var elementString = json.substring(1, json.length - 1);
      var elementArray = elementString.split(': ');
      if (elementArray.length === 1) { elementArray = elementString.split(':') }
      if (elementArray.length > 2) {
        var tempObj = [];
        debugger;
        for (var i = 0; i < elementArray.length; i++) {
          if (i % (elementArray.length - 1) === 0) {
            tempObj.push(elementArray[i]);
          } else {
            for (var j = 1; j < elementArray[i].length; j++) {
              if (elementArray[i][j] === '"') {
                tempObj.push(elementArray[i].substring(0, j + 1), elementArray[i].substring(j + 3, elementArray[i].length));
                break;
              }
            }
          }
        }
        elementArray = tempObj;
      }
      for (var i = 1; i < elementArray.length; i += 2) {
        obj[parseJSON(elementArray[i - 1])] = parseJSON(elementArray[i]);
      }
    }
    return obj;
  }
};
