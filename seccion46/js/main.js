document.addEventListener("DOMContentLoaded", function(e) {
    mostrarPersonas();
});

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
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

const personas = [
    new Persona('Carmelo', 'Chéry'),
    new Persona('Adama', 'Karis')
];

function mostrarPersonas(){
    console.log('Mostrando personas...');
    let texto = '';
    personas.forEach(element => {
        texto += `<li>${element.nombre} ${element.apellido}</li>`;
    });
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma     = document.forms['forma'];
    const nombre    = forma['nombre'];
    const apellido  = forma['apellido'];
    if(nombre.value.trim() != '' && apellido.value.trim() != ''){
        const persona   = new Persona(nombre.value, apellido.value);
        personas.push(persona);
        mostrarPersonas();
    }
}
