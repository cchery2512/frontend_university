document.addEventListener("DOMContentLoaded", function(e) {
    let cabecero = document.getElementById('cabecero');
    setTimeout(() => {
        if(cabecero) cabecero.innerText = 'Nuevo Título'
    }, 3000);
    
    let parrafo = document.getElementById('parrafo1');
    if(parrafo) parrafo.innerText = 'Saludos desde el nuevo párrafo';
    
    let parrafos = document.getElementsByTagName('p');
    //console.log('Hay ' + parrafos.length + ' párrafos');

    let parrafo2 = document.getElementsByClassName('parrafo2');
    for(let elemento of parrafo2){
        console.log(elemento.innerHTML);
        elemento.innerText = 'Nuevo parrafo 2'
    }

    document.getElementById('titulo').style.color = 'blue';
});

function mostrarValores(){
    /*let formulario = document.forms['formulario'];
    for(let element of formulario){
        console.log(element.value);
    }*/
    let nombre   = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    console.log(nombre+' '+apellido);
}

function cambiar(){
    document.getElementById('imagen').src = 'http://globalmentoring.com.mx/imagenes/html5.png';
}

function setColor(){
    let color = document.getElementById('titulo');
    color.style.color = color.style.color == 'blue' ? 'red' : 'blue'; 
}