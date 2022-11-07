//Apartado 1
let array1 = ["🍔","🌯","🍣","🍕","🍜","🍱","🍙","🍘","🥩"];
let cerveza = "🍺";
let pizzaindex = array1.indexOf("🍕");
array1.forEach((item, index) => {if(index > pizzaindex){array1[index] = cerveza}});
console.log(array1);

//Apartado 2
let array2 = ["🍕","🍕","🍍","🍕","🍕"];
let piña = "🍍";

console.log("Hay alguna piña en el array? " + array2.some(item => item === piña));

//Apartado 3
array2.splice(array2.indexOf(piña), 1);
console.log("Array sin piña: " + array2);

//Apartado 4
let array3 = ["🍓","🍋","🍓","🍋","🍓"];
let seta = "🍄";

array3.forEach((item, index) =>{if(item =="🍓"){array3[index] = seta}});
console.log("Fresas por setas: " + array3);

//Apartado 5
let array4 = ["🌶️","🥛","🌶️","🥛","🌶️","🥛"], result = [...array4];
let picante = "🥵", subnum = 0;

array4.forEach((item, index) =>{if(item =="🌶️"){result.splice(index + 1 + subnum, 0, picante);
subnum++}});
console.log("Picante detras de guindilla: " + result);

//Apartado 6
let array5 = ["🎴","🎴","🎴","🃏","🎴","🎴","🎴"], result2 = [...array5];
let joker = "🃏", back = "🎴", subnum1 = 0 ;
array5.forEach((item, index, array) =>{if(array[index] == back && array[index + 1] == back){result2.splice(index + 1 + subnum1, 0, joker);
    subnum1++}});
console.log("Jokersub: " + result2);