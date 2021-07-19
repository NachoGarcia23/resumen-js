// SOBRESCRITURA (madre que es cantante, e hija que tambien lo es, hereda caracteristicas de la voz de la madre pero no cantan igual)
// sobrescritura de obtenerDetalles

// aca lo que se hizo, basicamente es, se creo una clase empleado con un constructor y se definio nombre y sueldo, 
// a esos datos se los obtuvo desde el metodo obtenerDetalles para llamar a esas definiciones.
// luego, se crea la clase gerente la cual es una extension de empleado, con el etodo super se llama a las propiedades de empleado,
// y luego se define el departamento. Luego, se sobrescribe el metodo obtenerDetalles, y se define la caracteristica de gerente como un string, 
// a traves de super se llama a nombre y a sueldo, y luego, se define el depto.

class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`;
    }
}

//Instanceof, sirve para saber si un objeto pertenece o no a una clase padre.
function determinarTipo(tipo){
    console.log( tipo.obtenerDetalles() );
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
        console.log(tipo.departamento);
    }
    else if(tipo instanceof Empleado){
        console.log('Es un tipo Empleado');
        console.log(tipo.departamento);
    }
    else if(tipo instanceof Object){
        console.log('Es un tipo Object');
    }
}

// Polimorfismo, o sea, diferentes formas de en este caso, imprimir diferentes cosas, pero de la misma forma.
function imprimir(tipo){
    console.log( tipo.obtenerDetalles() );
}


let empleado1 = new Empleado('Juan', 3000);
let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');



determinarTipo( empleado1 );
determinarTipo( gerente1 );

imprimir( empleado1 );
imprimir( gerente1 );


