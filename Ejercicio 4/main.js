// Apartado 1

console.log("Apartado 1")

let outputcompleto;

nombrecompleto = () => {return ["Mario","Asis Canovas"]};
outputcompleto = nombrecompleto();
console.log("Nombre: " + outputcompleto[0]+ "\nApellidos: " + outputcompleto[1]);
console.log("\n")

// Apartado 2

console.log("Apartado 2")
function booltest(booleanVar){
    console.log(booleanVar);
}

booltest(true);
console.log("\n");

//Apartado 3

console.log("Apartado 3");

function infvalues(...valores){
    valores.forEach((item) => console.log(item));
}

infvalues(1,2,3,4,5);