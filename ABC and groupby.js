
function checknum(num){
  let array = [];
  for (let i = 1; i<= num; i++){
    let word = "";
    if (i%3==0) { word+="Alpha"};
    if (i%5==0) { word+="Bravo"};
    if (i%7==0) { word+="Charlie"};
    array.push(word || i);
  }
  
  return array;
}

console.log(checknum(15));


function checkdept(employees){

  let array = [];

  for (let i = 0; i< employees.length; i++){
    let dept = employees[i].dept;
    let name = employees[i].name;

    if (!array[dept]) {
      array[dept] = [];
    }

    array[dept].push(name);
  }
  return array;
}

const employees = [
  { name: "Andi", dept: "IT" },
  { name: "Budi", dept: "HR" },
  { name: "Citra", dept: "IT" },
  { name: "Dewi", dept: "Finance" }
  ];

  console.log(checkdept(employees));
  