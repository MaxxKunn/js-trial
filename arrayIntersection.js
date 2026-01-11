function intersection(array1, array2){
  let result = [];
  for (i = 0; i<array1.length; i++){
    for(j = 0; j<array2.length; j++){
      if (array1[i] === array2[j] && !result.includes(array1[i])){
        result.push(array1[i]);
      }
    }
  }
  return result;
}

console.log(intersection([1,2,3,4], [1, 3,4,5,6,1]));