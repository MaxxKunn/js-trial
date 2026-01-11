function findMissing(array){
  let result = 0;
  for (i = 0; i< array.length-1; i++){
    if(array[i+1] != (array[i]+1)){
      return array[i] + 1;
    }
  }

  return null;
}

console.log(findMissing([1,2,4,5,7]));