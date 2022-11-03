//Apartado 1

let strvar = "SUPERcAlifrAgilisticoespialidoso";

function subAforO(inputstr){
    return inputstr.replaceAll('A','O');
}
console.log("Apartado 1")
console.log(subAforO(strvar));
console.log("\n")
//Apartado 2

function startswithaca(inputstr){
    if(inputstr.startsWith("aca")){ return true; }
    else{ return false; }
}
console.log("Apartado 2")
console.log("Comprobamos que 'academia' empieza por 'aca': " + startswithaca("academia"));
console.log("Comprobamos que 'escuela' NO empieza por 'aca': " + startswithaca("escuela"));
console.log("\n");

//Apartado 3

console.log("Apartado 3")

function triple(inputstr){
    return (inputstr + " ").repeat(3);
}

console.log(triple("Hola"));