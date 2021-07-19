//Función de tipo callback (funcion que se le pasa como parametro otra funcion)
let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){ // puede ir cualquier nombre entre los parametros
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5, 3, imp);

// Funcion set timeout (recibe siempre como parametro una fucnion callback si o si)
//Llamadas asíncronas con uso setTimeout

// 1. Se define una funcion para hacer el callback posteriormente
function miFuncionCallback(){
    console.log('saludo asíncrono después de 3 seg');
}
// 2. se utilizan los timeout para  llamar a la funcion de callback directamente

setTimeout(miFuncionCallback, 3000);//después de 3 seg

// 3. En este caso, se utilizan los timeout a los que se les genera una funcion que genera un callback instantaneo con la funcion que se define ahi mismo. (en el segundo caso, se hace una funcion flecha) 
setTimeout( function(){ console.log('saludo asíncrono 2')}, 4000);

setTimeout( () => console.log('saludo asíncrono 3'), 1000);


// Funcion setInterval (tambien recibe una funcion callback como parametro)
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000);//1 seg