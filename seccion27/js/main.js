
//Sentencias de Control en JavaScript
let a = 3, b = 2;
let mes = 6, estacion;

if (a > b) {
    console.log('Entró en el IF');
} else {
    console.log('Entró en el ELSE');
}

/*if(mes == 1 || mes == 2 || mes == 12){
    estacion = "Invierno";
}else if(mes == 3 || mes == 4 || mes == 5){
    estacion = "Primavera";
}else if(mes == 6 || mes == 7 || mes == 8){
    estacion = "Verano";
}else if(mes == 9 || mes == 10 || mes == 11){
    estacion = "Otoño";
}
else{
    estacion = "Valor Incorrecto";
}*/

switch (mes) {
    case 1: case 2: case 12:
        estacion = "Invierno";
        break;
    case 3: case 4: case 5:
        estacion = "Primavera";
        break;
    case 6: case 7: case 8:
        estacion = "Verano";
        break;
    case 9: case 10: case 11:
        estacion = "Otoño";
        break;
    default:
        estacion = 'Valor incorrecto';
}

console.log(estacion);