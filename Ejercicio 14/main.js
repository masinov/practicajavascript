//Apartado 1
let array1 = ["ð","ð¯","ð£","ð","ð","ð±","ð","ð","ð¥©"];
let cerveza = "ðº";
let pizzaindex = array1.indexOf("ð");
array1.forEach((item, index) => {if(index > pizzaindex){array1[index] = cerveza}});
console.log(array1);

//Apartado 2
let array2 = ["ð","ð","ð","ð","ð"];
let piÃ±a = "ð";

console.log("Hay alguna piÃ±a en el array? " + array2.some(item => item === piÃ±a));

//Apartado 3
array2.splice(array2.indexOf(piÃ±a), 1);
console.log("Array sin piÃ±a: " + array2);

//Apartado 4
let array3 = ["ð","ð","ð","ð","ð"];
let seta = "ð";

array3.forEach((item, index) =>{if(item =="ð"){array3[index] = seta}});
console.log("Fresas por setas: " + array3);

//Apartado 5
let array4 = ["ð¶ï¸","ð¥","ð¶ï¸","ð¥","ð¶ï¸","ð¥"], result = [...array4];
let picante = "ð¥µ", subnum = 0;

array4.forEach((item, index) =>{if(item =="ð¶ï¸"){result.splice(index + 1 + subnum, 0, picante);
subnum++}});
console.log("Picante detras de guindilla: " + result);

//Apartado 6
let array5 = ["ð´","ð´","ð´","ð","ð´","ð´","ð´"], result2 = [...array5];
let joker = "ð", back = "ð´", subnum1 = 0 ;
array5.forEach((item, index, array) =>{if(array[index] == back && array[index + 1] == back){result2.splice(index + 1 + subnum1, 0, joker);
    subnum1++}});
console.log("Jokersub: " + result2);