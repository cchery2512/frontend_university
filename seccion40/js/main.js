let miFuncion = function(){
    console.log('Saludos desde mi función');
}
// let miFuncionFlecha = () => {
//     console.log('Saludos desde mi función flecha');
// };
const miFuncionFlecha = () => console.log('Saludos desde mi función flecha const');

const saludar = () => 'Saludos desde función flecha saludar';

const regresaObjeto = () => ({nombre: 'Carmelo', apellido: 'Chéry'});

const funcionConParametros = (mensaje) => console.log(mensaje);

miFuncion();
miFuncionFlecha();
console.log(saludar());
console.log(regresaObjeto());
funcionConParametros('saludos con parámetros');