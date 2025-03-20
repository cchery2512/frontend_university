function miFuncion1() {
    console.log('funcion 1');
}

function miFuncion2() {
    console.log('funcion 2');
}

//Función de tipo callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2,  funcionCallback){
    let res = op1 + op2;
    funcionCallback(res);
}

//Llamadas asíncronas con uso setTimeOut
function miFuncionCallback(){
    console.log('saludo asíncrono después de 3 segundos');
}

//Llamada a función con uso setInterval
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

//setInterval(reloj, 1000);//cada 1 seg. (comentar para detener llamados a función reloj)
setTimeout(miFuncionCallback, 3000);//después de 3 seg.
miFuncion1();
miFuncion2();
sumar(5, 3, imprimir);