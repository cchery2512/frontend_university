document.addEventListener("DOMContentLoaded", function(e) {
    setInterval(mostrarReloj, 1000);
});

const mostrarReloj = () =>{
    let fecha   = new Date();
    let hr      = formatoHora(fecha.getHours());
    let min     = formatoHora(fecha.getMinutes() );
    let seg     = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sept', 'Oct', 'Nov', 'Dic'];
    const dias  = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    let diaSemana   = dias[fecha.getDay()];
    let dia         = fecha.getDay();
    let mes         = meses[fecha.getMonth()];
    let fechaTexto  = `${diaSemana}, ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;
    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora)=> {
    return hora < 10 ? '0'+hora : hora;
}