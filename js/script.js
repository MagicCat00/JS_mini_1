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
let allAge = 0;

function calcAvgAge(array) {
  array.forEach((element, i) => {
    allAge += +element.age;
  });
  return allAge / array.length

}
