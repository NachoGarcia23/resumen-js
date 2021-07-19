// Una clase es una plantilla
// que contiene atributos y metodos
// a diferencia de un objeto que es una
// instancia de una clase
// Por ejemplo, una clase es una persona
// un objeto es Maxi Saldivia.


// Clases poseen un nombre, atributos y metodos
// con esos metodos se podran construir objetos,
// de valores propios pero con caracteristicas de 
// la clase general.

// SINTAXIS PARA UNA CLASE (nombre de la clase mayuscula)
class SintaxisClase {
    constructor(){  // al que se le pueden asignar parametros()
        
        // cuerpo del constructor donde iran metodos y atributos
    
    }
}

// EJEMPLO

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre; // atributo y valor del parametro (aca van las propiedades)
        this._apellido = apellido;

    }
    get nombre(){  // (linea 52)
        return this._nombre // se le agrega _ porque no puede llevar el mismo nombre
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
}

// A partir de esa CLASE, crear OBJETOS.

let persona1 = new Persona('Maxi', 'Saldivia');
console.log(persona1);

let persona2 = new Persona ('Carlos', 'Saldivia');
console.log(persona2);

// Arriba se pueden ver dos objetos distintos,
// pero que parten de la misma clase o plantilla


//Metodo GET (leer info de la clase)
console.log(persona1.nombre) //manda a llamar al metodo Get


// Metodo SET (modificar info de la clase)
persona1.nombre = 'Juan Carlos' //manda allamr indirectamente al metodo SET para modificarlo.
console.log(persona1.nombre)


// Con clases no se aplica HOISTING, lo que quiere 
// decir que primero hay que definir la clase y luego
// los objetos. (En fucniones no hace falta, 
// porque tiene HOISTING)

// HERENCIA (concepto importante en POO)

class Hombre{
    constructor(nombre, apellido){
        this._nombre = nombre; // atributo y valor del parametro (aca van las propiedades)
        this._apellido = apellido;

    }

    get nombre(){  // (linea 52)
        return this._nombre; // se le agrega _ orque no puede llevar el mismo nombre
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
}


class Empleado extends Hombre{
    constructor(nombre, apellido, departamento){ // nuevo atributo
        super(nombre, apellido); //palabra reservada para llamar los atributos faltantes del constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}

// Clase padre
let hombre1 = new Hombre('Marcelo', 'Gallardo')
console.log(hombre1)

// Clase hija
let empleado1 = new Empleado('Karina', 'Diaz', 'sistemas');
console.log(empleado1);
// Por lo tanto para poder definir un objeto con una clase 
// hija desde una clase padre, lo que hay que hacer es
// crear otra clase con la palabra extends refiriendose 
// a la clase padre, luego definir en el constructor las
// propiedades de la clase padre y de la clase hija, y
// utilizar la palabra super(con sus atributos en parentesis)


// HEREDAR METODOS (definir un metodo en clase padre y heredarlo a la hija)
class Humano{
    constructor(nombre, apellido){
        this._nombre = nombre; // atributo y valor del parametro (aca van las propiedades)
        this._apellido = apellido;

    }

    get nombre(){  // (linea 52)
        return this._nombre; // se le agrega _ orque no puede llevar el mismo nombre
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
    
    nombreCompleto(){
        return this._nombre+ ' ' + this._apellido;
    }
    toString(){
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('saludos desde metodo static')
    }
    static saludar2(persona){
        console.log(persona.nombre)
    }
}


class Operario extends Humano{
    constructor(nombre, apellido, departamento){ // nuevo atributo
        super(nombre, apellido); //palabra reservada para llamar los atributos faltantes del constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobre escritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento; // super(nombre.Completo) equivale a -> this._nombre + ' ' + this._apellido 
    }
}

let operario1 = new Operario ('Maria', 'Jimenez', 'Administracion');
console.log(operario1);
console.log(operario1.nombreCompleto());



// Clases objects(clase padre de todas las clases)
// metodo toString (para que no aparezca objet object en el navegador)
// sobreescribe una funcion y se la convierte a string
// (linea 147)
console.log(operario1.toString())



// STATIC (se asocian con las clases, no con objetos)
// es como si fuera una especie de bandera
// donde se le asigna un atributo a la clase
// y los objetos pueden ir adquiriendo esas static


// operario1.saludar(); //no se puede llamar a un metodo static desde un objeto

Humano.saludar();
Humano.saludar2(operario1);


