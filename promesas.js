// La promesas son bloques de codigo que tiene varios estados y se ejecuta (contiene fuciones callback)
// la promesa puede cumplirse (.then) o puede no cumplrse (.catch)

// 1. Aca se define la promesa
let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true; // puede ser false aca
    if(expresion)
        resolver('Resolvió correcto');
    else
        rechazar('Se produjo un error');    
});

// 2. Aca se usa la promesa

// sin el catch
//miPromesa.then( 
//    valor => console.log(valor), 
//    error => console.log(error)
//    );

//con el catch
miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error));

// Promesas con setTimeout
let promesa = new Promise((resolver) => {
    console.log('inicio promesa');
    setTimeout( ()=> resolver('saludos con promesa y timeout'), 3000);
    console.log('fin promesa');
});

promesa.then(valor => console.log(valor));


// Palabra async (que indica que una funcion va a regresar una promesa).
