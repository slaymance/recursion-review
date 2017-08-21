// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'object') {
    // return recursive function over object elements
    if (Array.isArray(obj)) {
      // recursion over each element in array

      var string = [];
      for (var i = 0; i < obj.length; i++) {
        string.push(stringifyJSON(obj[i]));
      }
      return '[' + string.join(',') + ']';// return '[' + stringifyJson(element in array) + ']'
    } else {
      var string = [];
      for (var key in obj) {
        if(typeof(obj[key]) !== 'function' && obj[key] !== undefined){
          string.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
        }

        //stringifyJSON(obj[key]);
      }
      return '{' + string.join(',') + '}'
      // recursion over each key-value pair in object

    }
  } else if (typeof obj === 'string'){
    return '"'+obj+'"';
  } else if (typeof obj === 'function') {
    return '';
  } else {
    return `${obj}`;
  }

  // return obj as a string
};
