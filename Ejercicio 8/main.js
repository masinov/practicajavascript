// Apartado 1
let numero = 6;

switch (numero){
    case 1: console.log("Enero"); break;
    case 2: console.log("Febrero"); break;
    case 3: console.log("Marzo"); break;
    case 4: console.log("Abril"); break;
    case 5: console.log("Mayo"); break;
    case 6: console.log("Junio"); break;
    case 7: console.log("Julio"); break;
    case 8: console.log("Agosto"); break;
    case 9: console.log("Septiembre"); break;
    case 10: console.log("Octubre"); break;
    case 11: console.log("Noviembre"); break;
    case 12: console.log("Diciembre"); break;
    default:
        console.error("ERROR: Numero de mes invalido. Introduce un numero entre 1 y 12.");
        break;
}

// Apartado 2

let strnum = "1";
let intnum;

switch (strnum){
    case "1": case "2": case "3": case "4": case "5":
        intnum = parseInt(strnum);
        break;
    default:
        console.error("ERROR: Value out of range.");
        break;
}
console.log("Numero introducido como string: " + strnum);
console.log("Numero transformado a int: " + intnum);
console.log("Verificando cambio de tipo: " + typeof(intnum));