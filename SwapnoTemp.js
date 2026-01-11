function swap(a, b){

  a = a + b;
  b = a - b;
  a = a - b;
  console.log(a, b);
}

console.log(swap(5,10))