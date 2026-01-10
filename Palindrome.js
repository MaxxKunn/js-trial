function ispalindrome(sentence){
  sentence = sentence.toLowerCase();
  let result = "";

  for ( let i = sentence.length-1; i>=0; i--){
    result += sentence[i];
  }

  if ( sentence === result) { 
    return true
  } else { 
    return false
  }
}

console.log(ispalindrome("aba"))