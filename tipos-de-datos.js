// -----------------------------------------------------------------------
// Tipos de datos
// -----------------------------------------------------------------------
const texto = 'abc'; // También se puede usar comilla doble: "abc"

const numero = 123;

const booleano = true;

const fecha = new Date();

const lista = [1, 2, 3];

const persona = { 
  nombre: 'Julieta',
  apellido: 'Raineri',
  curso: 'Frontend 2020-2021'
};

function mifuncion(){};

var simbolo = Symbol();

class personas {
  constructor(nombre, numero){
    this.nombre = nombre;
    this.numero = numero;
  }

}

// Array
var autos = ['BMW', 'Audi', 'Volvo']
console.log (autos);
console.log (typeof autos);

console.log(persona);

// con typeof se puede preguntar que tipo de dato admite esa variable (dentro del console.log)