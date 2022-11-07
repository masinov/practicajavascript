let numero = 1, i = 0;


do{
    if(i===0){
        i++;
        numero--;
        console.log(numero);
    }
    else{
        numero++;
        console.log(numero);
    }
}while (numero < 5);

// Al entrar en el DO WHILE por primera vez, como i esta inicializado con valor 0, 
// entrara en el condicional IF, sumandole uno a i y restandole uno a numero.
// Numero ahora es 0, por tanto la condicion del DO WHILE se sigue cumpliendo y entra de nuevo al bucle
// Ahora, i toma valor 1, por tanto no entramos en el IF sino en el ELSE. Aqui, numero añade 1.
// El programa entrara en esta clausula hasta que numero sea igual a 5.


