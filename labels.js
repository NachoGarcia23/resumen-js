// Permite  ir a alguna parte del programa que querramos

inicio: //label
for (let contador = 0; contador <= 3; contador ++){
    if (contador % 2 !== 0){
        continue inicio;
}
console.log(contador);
}
