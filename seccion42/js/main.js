let miPromesa = new Promise((resolve, reject) =>{
    let expresion = false;
    expresion == true ?  resolve('Resolvió correcto') : reject('Se produjo un error');
});

miPromesa.then(valor => console.log(valor)).catch(error => console.log(error+' XD'));

let promesa = new Promise((resolve) => {
    //console.log('Inicio promesa');
    setTimeout(() => resolve('Saludos con promesa y timeout'), 3000);
    //console.log('Fin promesa');
});

//promesa.then(valor => console.log(valor));

//async indica que hay una función regresa una promesa
async function miFuncionConPromesa(){
    return 'Saludos con promesa y async';
}

//miFuncionConPromesa().then(valor => console.log(valor));

//async/await
async function functionConPromesaYAwait(){
    let miPromesa = new Promise((resolver) => resolver('Promesa con await'));
    console.log(await miPromesa);
}

//functionConPromesaYAwait();

//promesas, await, async y setTimeout
async function funcionConPromesaAwaitTimeout(){
    let miPromesa = new Promise((resolve) => {
        setTimeout(() => resolve('promesa con await y timeout'), 3000);
    });
    console.log(await miPromesa);
    console.log('fin función');
}

funcionConPromesaAwaitTimeout();