//Objetos en JavaScript

function Persona(nombre, apellido, email) {
    this.nombre     = nombre;
    this.apellido   = apellido;
    this.email      = email;
    this.nombreCompleto = function() {
        return this.nombre +' '+this.apellido;
    }
}

Persona.prototype.tel = '44332211';

let padre = new Persona('Juan', 'Perez', 'jperez@email.com');
console.log(padre.nombreCompleto());
console.log(padre.tel);
let madre = new Persona('Laura', 'Quintero', 'lquintero@email.com');
console.log(madre.nombreCompleto());
madre.tel = '5213377'
console.log(madre.tel);
padre.nombre = 'Carlos';

console.log(padre);
console.log(madre);

// let persona = {
//     nombre: 'Carmelo',
//     apellido: 'Chery',
//     email: 'cchery@gmail.com',
//     edad: 30,
//     idioma: 'es',
//     get lang(){ return this.idioma.toLocaleUpperCase()},
//     set lang(lang){ this.idioma = lang.toUpperCase()},
//     get nombreCompleto(){return this.nombre +' '+this.apellido}
// };

// console.log(persona.lang);

// persona.lang = 'en';

// console.log(persona.lang);

// console.log(persona.idioma);

// console.log(persona.nombre);

// console.log(persona.nombreCompleto);

// let persona2 = new Object();
// persona2.nombre     = 'Carlos';
// persona2.direccion  = 'Carrer 33';
// persona2.tel        = '2365555';
// persona2.edad       = 30;
// persona2.tel        = '2918872'

// delete persona2.edad

// console.log(persona2);