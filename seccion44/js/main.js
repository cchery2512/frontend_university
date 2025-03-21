document.addEventListener("DOMContentLoaded", function(e) {
    alert('Entrando en la página Web');
    let parrafo1 = document.getElementById('parrafo1');

    parrafo1.innerText = navigator.cookieEnabled == true ? 'Cookies están habilitadas' : 'Cookies están inhabilitadas';
});

function cambiar(){
    let titulo = document.getElementById('titulo');
    titulo.innerText = titulo.textContent == 'Manejo de DOM con JavaScript' ? 'Nuevo Título' : 'Manejo de DOM con JavaScript';
}

function convertir(){
    let nombre = document.getElementById('nombre');
    let textoNombre = document.getElementById('textoNombre');
    textoNombre.innerText = nombre.value;

}