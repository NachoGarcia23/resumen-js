// Objeto que permite almacenar varios valores

//Forma vieja de declarar un array 
//let autos = new Array('BMW', 'Mercedes', 'Volvo');

// Se utiliza const porque el espacio de memoria 
// ya no se va a modificar
const autos = ['BMW', 'Mercedes', 'Volvo'];
console.log (autos);

// Recorrer los elementos de un arreglo. 
console.log (autos [0]);

for (let i = 0; i< autos.length; i++){
    console.log ( autos[i] );
}

// Modificar los elementos de un arreglo 

autos[1] = "HOLA"
console.log(autos[1]);

// AGREGAR ELEMENTOS A UN ARREGLO

// 1    .push es la forma de llamar a un arreglo o lista

autos.push('Audi');
console.log(autos);

// 2    .length
autos[autos.length] = 'Cadillac';
console.log(autos);

// dejar un elemento vacio
autos[7] = "porsche";
console.log(autos);


//PREGUTAR SI ES O NO ARRAY
console.log(typeof autos);

console.log (Array.isArray(autos));

// o tambien:
console.log(autos instanceof Array);