//Funciones en JavaScript

let resultado = myFuncion(2,3);
console.log('Suma: '+resultado);

function myFuncion(a,b){
    return a+b;
}

//Declaración Función de tipo expresión
let sumar = function (a,b){return a+b};

resultado = sumar(1,2);
console.log(resultado);

(function(a,b){
    console.log('Ejecutando la función: '+ (a + b))
})(3,4);

const sumarFuncionTipoFlecha = (a, b) => a + b;
console.log(sumarFuncionTipoFlecha(4,5));
console.log(sumarFuncionTipoFlecha(4,9));

let resultado2 = sumarTodo(5, 4, 13, 10, 9);

function sumarTodo(...args){
    let suma = 0;
    let valores = args;
    valores.forEach(element => {
        suma += element;
    });
    return suma;
}

console.log('El resultado es: '+ resultado2);

const persona = {
    nombre: 'Carmelo',
    apellido: 'Chery'
}

function cambiarValorObjeto(p1){
    p1.nombre   = 'Carlos';
    p1.apellido = 'Lara';
}

cambiarValorObjeto(persona);
console.log(persona);