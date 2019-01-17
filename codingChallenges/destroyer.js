function destroyer(arr) {
  // Remove all the values
  var destroyValues = [];
  for(var index in arguments){
    if(index!==0){
      destroyValues.push(arguments[index])
    }
  }
  destroyOne(arr);


  function destroyOne(arr){
    for(var i = 0; i < arr.length; i++){
      if(destroyValues.indexOf(arr[i]) !== -1){
        deleteByIndex(arr,i);
        return destroyOne(arr);
      }
    }
  }
  function deleteByIndex(arr,index){
    arr.splice(index,1);
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
