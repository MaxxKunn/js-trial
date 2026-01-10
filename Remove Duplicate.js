function removeDuplicate(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let exists = false;

    for (let j = 0; j < result.length; j++) {
      if (array[i] === result[j]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result.push(array[i]);
    }
  }

  return result;
}

const arr = [1,2,2,3,4];
console.log(removeDuplicate(arr));
