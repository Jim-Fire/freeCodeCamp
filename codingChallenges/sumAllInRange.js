function sumAll(arr) {
  if(!arr || !arr.length || arr.length !== 2){return -1; }

  var startPoint, endPoint, summ = 0;

  if(arr[0]<=arr[1]){
       startPoint = arr[0];endPoint = arr[1];
  }else{
    startPoint = arr[1];endPoint = arr[0];
  }

  for(var i= startPoint; i <= endPoint; i++){
    summ+=i;
  }

  return summ;
}

sumAll([1, 4]);
