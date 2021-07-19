// Switch es una estructura condicional que analiza bloque por bloque
// para que una vez que una vez que se cumpla la condicion, se da 
// por finalizado el programa. (hace comparaciones estrictas)

let numero = "3"
// let numero = 3;
let numeroTexto = 'Valor desconocido';

switch (numero){
    case 1:
        numeroTexto = 'Numero 1';
        break;
    case 2:
        numeroTexto = 'Numero 2';
        break;
    case 3:
        numeroTexto = 'Numero 3';
        break;
    default: 
        numeroTexto = 'Caso no encontrado';
}

console.log (numeroTexto);