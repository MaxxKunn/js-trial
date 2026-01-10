const vocal = ["a", "i", "u", "e", "o"];

function countvocal(sentence){
  sentence = sentence.toLowerCase();
  let counter = 0;
  for (let i = 0; i< sentence.length; i++){
    for (let j = 0; j< vocal.length; j++){
      if( sentence[i] == vocal[j]){
        counter++;
      }
    }
  }
  return counter;
}

console.log(countvocal("ngapaintolo"));



function reverse(sentence){
  sentence = sentence.toLowerCase();
  let result = "";
  for (let i = sentence.length-1; i >=0; i--){
    result += sentence.charAt(i);
  }
  return result;
}

console.log(reverse("Internship"))