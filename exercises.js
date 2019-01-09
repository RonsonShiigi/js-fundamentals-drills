/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function(arr){
  let final = [];
  for(var i=0;i<arr.length;i++){
    final.push(arr[i]*2)
  }return final
}
  



/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Number}
 */
var sumArrays = function(arr1,arr2){
  function getSum(total, num) {
    return total + num;
  }
  let a = arr1.reduce(getSum);
  let b = arr2.reduce(getSum);
  return a+b
}


/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount = function(str){
  return str.length
}

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength = function(arr){
  return arr.length
}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function(arr){
  function getSum(total, num) {
    return total + num;
  }return arr.reduce(getSum)
}

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings = function(arr){
  let final = [];
  for(var i=0;i<arr.length;i++){
    final.push(arr[i].length)
  }return final
}

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {Array}
 * @return {Number}
 */
var countAllStrings = function(arr){
  let f = [];
  function getSum(total, num) {
    return total + num;
  }
  for(var i=0;i<arr.length;i++){
    f.push(arr[i].length)
  }return f.reduce(getSum)
}

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray = function(obj){
  return Object.values(obj)
}

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize = function(obj){
    let count = 0;
    for(keys in obj){
      count++
    }return count
}

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Array}
 */
var createZeroFilledArray = function(num){
  let final = [];
  for(var i=0;i<num;i++){
    final.push(0)
  }return final
}

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray = function(arr){
  arr.pop();
  return arr;
}

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function(str){
  return str.split('')
}

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {Array}
 * @return {Number}
 */
var lengthOfLast = function(arr){
  let p = arr.pop();
  return p.length
}

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = function(arr){
  let final = 0;
  for(var i=0;i<arr.length;i++){
    if(arr[i]<10){
      final += arr[i]
    }
  }return final
}

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {Array}
 * @return {Number}
 */
var moreThanTenLetters = function(arr){
  let count = 0;
  for(var i=0;i<arr.length;i++){
    if(arr[i].length>10){
      count++
    }
  }return count
}

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = function(arr){
  let f = 1;
  for(var i=0;i<arr.length;i++){
    f *= arr[i]
  }return f
}

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {Array}
 * @return {Number}
 */
var sumAllPositive = function(arr){
  let f = 0;
  for(var i=0;i<arr.length;i++){
    if(arr[i]>0){
      f += arr[i]
    }
  }return f
}

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function(arr){
  let f=0;
  for(var i=0;i<arr.length;i++){
    if(arr[i].length<=3){
      f++
    }
  }return f
}

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function(arr){
  return arr.length
}

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys = function(obj){
  return Object.keys(obj)
}

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function(obj){
  return Object.values(obj)
}

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function(key,value){
  let obj = {};
  obj[key]=value;
  return obj;
}

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObjectReverse = function(value,key){
  let obj = {};
  obj[key]=value;
  return obj;
}


/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject = function(arr){
  let obj = {};
  obj[arr[0]]=arr[1]
  return obj
}

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function(arr){
  let obj = {};
  obj[arr[1]]=arr[0];
  return obj
}

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function(arr){
  let obj = {};
  for(var i=0;i<arr.length;i++){
    obj[arr[i]]=0;
  }return obj
}

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues = function(obj){
  return Object.values(obj)
}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function(obj){
  return Object.keys(obj)
}

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function(obj){
  let final = [];
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  for(var i=0;i<keys.length;i++){
    let hold = [];
    hold.push(keys[i]);
    hold.push(values[i]);
    final.push(hold)
  }return final
}
/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject = function(arr){
  let obj={};
  for(var i=0;i<arr.length;i++){
    obj[arr[i]]=false
  }return obj
}

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject = function(a,b){
  let obj = {};
  for(var i=0;i<a.length;i++){
    obj[a[i]]=b[i]
  }return obj
}

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples = function(obj1,obj2){
  let final = [];
  let a = Object.keys(obj1);
  let keys = a.concat(Object.keys(obj2));
  let b = Object.values(obj1);
  let values = b.concat(Object.values(obj2));
  for(var i=0;i<keys.length;i++){
    let hold = [];
    hold.push(keys[i]);
    hold.push(values[i]);
    final.push(hold)
  }return final
}

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues = function(arr){
  let obj = {};
  for(var i=0;i<arr.length;i++){
    obj[arr[i]]= true;
  }return obj
}

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts = function(arr){
  let obj = {};
  for(var i=0;i<arr.length;i++){
    if(arr[i].length>=5){
      obj[arr[i]]=true;
    }else{
      obj[arr[i]]=false;
    }
  }return obj
}

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums = function(arr){
  let obj ={};
  for(var i=0;i<arr.length;i++){
    obj[arr[i]]= true;
  }return obj
}

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys = function(str){
  let obj = {};
  let a = str.split('');
  for(var i=0;i<a.length;i++){
    obj[a[i]]=true;
  }return obj
}
/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap = function(arr){
  let obj = {};
  for(var i=0;i<arr.length;i++){
    obj[arr[i]]=arr[i].length
  }return obj
}

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Object}
 */
var frequencyMap = function(arr){
  let obj = {};
  let a =[];
  let counts = [];
  for(var i=0;i<arr.length;i++){
    if(arr[i] !== arr[i-1]){
      a.push(arr[i])
      counts.push(1)
    }else{
      counts[counts.length-1]++
    }
  }for(var i=0;i<a.length;i++){
    obj[a[i]]=counts[i]
  }return obj
}
  

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Object}
 */
var tupleConvertToObject = function(arr){
  let obj={};
  for(var i=0;i<arr.length;i++){
    obj[arr[i][0]]=arr[i][1]
  }return obj
}



module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays,
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}
