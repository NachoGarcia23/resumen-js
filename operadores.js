//-----------------------------------------------------------------------
// Operadores aritméticos
// -----------------------------------------------------------------------
let x = 1;
let y = 2;
let z = x + y
const suma = x + y;
const resta = x - y;
const multiplicacion = x * y;
const division = x / y;
// const concatenacion = texto + texto;
const resto = x % y;

// Operadores de incremento
//Pre-incremento (operador ++ antes).
z = ++x;
console.log ( x );
console.log ( z ); 

//Post-incremento (operador despues).
z = y++
console.log ( y );
console.log ( z );

// Operadores de decremento
//----- Pre-decremento
z = -- x
console.log (x)
console.log (z)

// Post-decremento 
z == y--
console.log ( y );
console.log ( z );


// Operadores de comparacion

a = 3, b = 2, c = "3";

z = (a == c); // IGUALDAD (DESIGUALDAD !=)

console.log (z);

z = (a === c); // IGUALDAD ESTRICTA (DESIGUALDAD ESTRICTA !==)
console.log ( z );


// Valores lógicos
// -----------------------------------------------------------------------
const verdadero = true; // BOOLEANOS
const falso = false;  // BOOLEANOS

// -----------------------------------------------------------------------
// Operadores lógicos
// -----------------------------------------------------------------------
const conjuncion = verdadero && verdadero; // AND 
const disyuncion = verdadero || falso; // OR
const negacion =! verdadero; // NOT


// Operador ternario (consta de tres partes)
resultado = (3>2) ? "verdadero" : "falso";
console.log (resultado);

otroResultado = (2>3) ? "verdadero" : "falso";
console.log (otroResultado);