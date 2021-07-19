miNumero = "18"
console.log( typeof miNumero)
// miEdad = Number(miNumero)
//console.log (typeof miEdad);

if (isNaN(miNumero)){
    console.log ("No es un numero"); 
}
else{
    if(miNumero >= 18){
        console.log ("Es mayor de edad");
    }
    else{
        console.log("Muy joven para votar");
    }
}
