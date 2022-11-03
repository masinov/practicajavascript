function caraocruz(){
    var resultado = Math.round(Math.random());
    if (resultado == 1){
        return "cara";
    }
    if (resultado == 0){
        return "cruz";
    }
}

console.log(caraocruz())