function capitalizeWord(sentence) {
  sentence = sentence.toLowerCase();
  let result = "";
  let capitalizeNext = true;

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    if (capitalizeNext && char !== " ") {
      result += char.toUpperCase();
      capitalizeNext = false;
    } else {
      result += char;
    }

    if (char === " ") {
      capitalizeNext = true;
    }
  }

  return result;
}

console.log(capitalizeWord("pt hm sampoerna"));
