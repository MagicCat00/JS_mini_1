const data = guestsInfo;
/*
В переменной data хранится такой массив:
[
  {name: "Саша", age: 19},
  {name: "Катя", age: 21},
  {name: "Миша", age: 17},
  {name: "Федя", age: 23},
  {name: "Клава", age: 22}
]
*/

function calcAvgAge(array) {
  array.forEach(element => {
    console.log(element.age);
  });
  
  let avg = data.reduce((r,i) => r + i.age, 0) / (data.length || 1);
    console.log(avg);
}
