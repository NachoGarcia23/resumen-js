let persona = {
    nombre : 'Maxi',
    apellido : 'Saldivia',
    nombreCompleto: function (){
        return this.nombre + ' ' + this.apellido;
    }
        //agregar un elemento a una variable, dentro de la variable
        // .this para buscar el elemento
 
}

console.log(persona); 
console.log(persona.nombre);
console.log(persona.nombreCompleto());

// Creacion de nuevos objetos

let persona2 = new Object(); //nuevo objeto en nuevo espacio en la memoria
persona2.nombre = 'Carlos'; //a partir de aca guarda en la memoria usando TIPO  de propiedades de la otra persona
persona2.apellido = 'Gutierrez';
persona2.edad = '50';

// ACCEDER A PROPIEDADES

console.log(persona.nombre);
console.log(persona['nombre']);

// for in
for (nombrePropiedad in persona){
    console.log (nombrePropiedad);
    console.log (persona[nombrePropiedad]);
}

//Agregar propiedades

persona.direccion = 'Francisco Suarez 2472'
console.log(persona);

// Eliminar propiedades

delete persona.direccion
console.log(persona);


// IMPRIMIR UN OBJETO (EN UN NAVEGADOR WEB)
// a veces si pones console.log(persona),
// te imprime Object Object

// 1- concatenacion
console.log(persona.nombre + ' ' + persona.apellido)

// 2- con for in 
for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad])
}

// 3- Object
let personaArray = Object.values (persona);
console.log (personaArray);

// con string
let personaString = JSON.stringify(persona);
console.log(persona)




// METODO GET (llamar u obtener funciones de un objeto)

let clubDeFutbol = {
    nombre : 'River Plate',
    cancha: 'Antonio V. Liberti',
    apodoCancha: 'El monumental',
    apodo: 'El mas grande',
    get nombreYApodo(){
        return this.nombre + ' ' + this.apodo;
    },
    set nombre2 (nombre2){
        this.nombre = nombre2.toUpperCase();
    },
    get nombreEnMayus(){
        return this.nombreYApodo.toUpperCase();
    }

}

console.log(clubDeFutbol.nombreYApodo); 
// no se ponen los parentesis luego de nombreYApodo 
// porque se pone el GET 
console.log(clubDeFutbol.nombreEnMayus);

// METODO SET (modificar)
clubDeFutbol.nombre2 = 'Huracan';
console.log(clubDeFutbol.nombre);


// CONSTRUCTOR DE OBJETOS

// Funcion constructor
function Persona (nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompletop = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Carlos', 'Saldivia', 'csaldivia@gmail.com')
console.log (padre);

padre.nombre = 'Carlos Manuel';
console.log(padre)


let madre = new Persona('Karina', 'Diaz', 'diazk@ymail.com')
console.log (madre);


// AGREGAR METODOS A UNA FUNCION CONSTRUCTORA
console.log (padre.nombreCompletop());

// USO DE PROTOTYPE (agregar los mismos valores)

Persona.prototype.direccion = 'Francisco Suarez 2472';

console.log(madre.direccion);
console.log(padre.direccion);


// DISTINTAS FORMAS DE CREAR OBJETOS
// antes lo hice con new

//Ambas formas son iguales
 let miObjeto = new Object(); //formal
 let miObjeto2 = {};          //recomendable  

 let miCadena1 = new String ('Hola');
 let miCadena2 = 'Hola';

 let miNumero = new Number (3);
 let miNumero2 = 4;

let miFuncion = new Function();
let miFuncion2 = function(){};

// de la misma forma con Array, Boolean


// USO DE CALL 

let humano1 = {
    nombre: 'Maxi',
    apellido: 'Saldivia',
    nombreCompleto: function(titulo){
        return titulo +  ': ' + this.nombre + ' '+ this.apellido;
    }
}

let humano2 = {
    nombre: 'Carlos',
    apellido: 'Saldivia'
}

// Uso de call para usar el metodo de nombreCompleto
// con los datos de humano2
console.log(humano1.nombreCompleto());

console.log(humano1.nombreCompleto.call(humano2));


// Si se desea agregar argumentos con CALL
// se agrega en la funcion de humano1 los argumentos, en este caso titulo
console.log (humano1.nombreCompleto.call(humano2, 'Ing'));



// METODO APPLY
let mono1 = {
    nombre: 'Maxi',
    apellido: 'Saldivia',
    nombreCompleto: function(tipo){
        return tipo + ':' + this.nombre + ' '+ this.apellido;
    }
}

let mono2 = {
    nombre: 'Carlos',
    apellido: 'Saldivia'
}

console.log(mono1.nombreCompleto())

// Se debe definir un arreglo para usar apply
let arreglo = ['Chimpance']
// ahora se incluye el arreglo y listo 
console.log(mono1.nombreCompleto.apply(mono2, arreglo));
