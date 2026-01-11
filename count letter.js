function countLetter(sentence){
  sentence = sentence.toLowerCase();
  let arr = {};

  for ( i = 0; i< sentence.length; i++){
    let letter = sentence[i];

    if(!arr[letter]){
      arr[letter] = 1;
    } else { 
      arr[letter]++;
    }
  }
  return arr;
}

console.log(countLetter("Sampoerna"))