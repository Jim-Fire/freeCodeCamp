function diffArray(arr1, arr2) {
  var newArr = [];
  testArr(arr1, arr2);
  testArr(arr2, arr1);

  function testArr(targetArr, nearArr){
    for(var i = 0; i < targetArr.length; i++){
      var currValue = targetArr[i];
      if(currValue === checkValueInArr(currValue,nearArr)){
        if(newArr.indexOf(currValue) === -1){
          newArr.push(currValue);
        }
      }
    }
  }
  function checkValueInArr(value,arr){
    return arr.indexOf(value) === -1 ? value : null
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
