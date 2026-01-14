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



// soal 2
function count(letter, text) {
    text = text.toLowerCase()
    let count = 0
    for(let i = 0; i < text.length; i++) {
        if(text[i] == letter) {
            count++
        }
    }
    return count
}

//test input
let result2 = count("o", "HellO World")
console.log(result2)