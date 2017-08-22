// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var jsonArray = json.split('');//split string split('')
  //look at first character
  if(jsonArray[0] === '{'){//object
    jsonArray.shift();
    jsonArray.pop();//takes off { & }
    var object = {}
    var index = 0;//temp index for either colon or comma

      for (var i = 0; i < jsonArray.length; i++){
        // var newArray = jsonArray.slice();
        // console.log(JSON.stringify(newArray));
        if(jsonArray[i] === ':'){//look for colon
          var key = parseJSON(jsonArray.splice(0, i).join(''));
          //console.log('jsonArray before shift: ' + jsonArray);
          jsonArray.shift();//takes off :
            jsonArray.shift();//takes off space
          //console.log('jsonArray after key is spliced, and : is shifted: ' + jsonArray);
          i = -1;
          //console.log('jsonArray.length : ' + jsonArray.length);
          for(var j = 0; j < jsonArray.length; j++){
            if(jsonArray[j] === ',' ){
              var value = parseJSON(jsonArray.splice(0, j).join(''));
              object[key] = value;
              jsonArray.shift();//takes off comma
              jsonArray.shift();//takes off space
              //console.log('jsonArray.length : ' + jsonArray.length);
              break;
            }
            if(j === jsonArray.length - 1){
              var value = parseJSON(jsonArray.splice(0, j + 1).join(''));
              object[key] = value;
              //console.log('jsonArray.length : ' + jsonArray.length);
              break;
            }


          }
        }
        //look for comma

      }
      //console.log('object returned: ' + JSON.stringify(object));
      return(object);

  }else if(jsonArray[0] === '['){//array
     var array = [];// define an empty array
     //var arrayOfValues = json.split('');
     jsonArray.shift();
     jsonArray.pop();
     var arrayValues = jsonArray.join('').split(',');
     console.log('arrayValues: ' + JSON.stringify(arrayValues));
     //var arrayOfValues2 = arrayOfValues1.split(',');
     for(var i = 0; i < arrayValues.length; i++){
       array.push(parseJSON(arrayValues[i]));
     }
     return(array);
  }else if(jsonArray[0] === '"'){
    return(json);
  }


  //string
  //null
  //number
  //undefined
};
