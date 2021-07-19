//Estructura basica de una funcion.
// 1- la palabra reservada function
// 2- nombre de la funcion 
// 3- argumento entre parentesis ()
// 4- entre llaves el bloque de acciones{}

// function miFuncion(){

// }

// 1- Primero se declara la funcion 
// 2- despues se la llama para usarla.

// 1
function miFuncion(a, b){
    return a + b;
}

// 2
let resultado = miFuncion(2, 3);
console.log(resultado);

// Funcion de tipo expresion 
let sumar = function (a , b){ return a + b}

resultado = sumar(1 , 2);
console.log(resultado);

// ARROW FUNCTION O FUNCIONES FLECHAS
// no es necesario usar la palabra function 
// ni llaves ni return

const sumarFuncionTipoFlecha = (a, b) => a + b;

resultado = sumarFuncionTipoFlecha(5, 5);
console.log(resultado);


// PASO POR VALOR 

//Tipos primitivos (porque no tienen atributos ni metodos, ni propiedades)
let x = 10;

function cambiarValor (a){
    a = 20
}

cambiarValor(x);
console.log(x);
// No se puede cambiar el valor 
// porque x es un termino primitivo


// PASO POR REFERENCIA

// 1. Se debe crear un objeto  (ya que estos si poseen
//    argumentos o propiedades), para ello se hace una const
const persona = {
    //referencia a un objeto
    nombre: 'Juan', // , para agregar mas objetos
    apellido: 'Perez'
}

// 2. Definir metodo o funcion 
function cambiarValorObjeto(p1){ //podes definir persona tambien
    p1.nombre = 'Maxi';
    p1.apellido = 'Saldivia';

}

// 3. Paso por referencia
cambiarValorObjeto (persona);
console.log (persona);
// Si se puede cambiar el valor.
