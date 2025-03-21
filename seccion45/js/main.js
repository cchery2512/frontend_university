document.addEventListener("DOMContentLoaded", function(e) {
    console.log('DOM Content Loaded successfully');
});

function procesar(){
    let data = document.getElementById('forma');
    let operandoA   = data['operandoa'].value;
    let operandoB   = data['operandob'].value;
    let resultado   = parseInt(operandoA) + parseInt(operandoB);
    if (isNaN(resultado)) {
        document.getElementById('resultado').innerHTML = `La operación no incluye números`;
    }else{
        document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    }
}
