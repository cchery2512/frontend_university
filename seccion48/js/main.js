document.addEventListener("DOMContentLoaded", function(e) {
    cargarApp();
});

class Dato{
    constructor(descripcion, valor){
        this._descripcion   = descripcion;
        this._valor         = valor;
    }

    get descripcion(){
        return this._descripcion;
    }
    set descripcion(descripcion){
        this._descripcion = descripcion;
    }

    get valor(){
        return this._valor;
    }
    set valor(valor){
        this._valor = valor;
    }
}

class Ingreso extends Dato{
    static contadorIngresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Ingreso.contadorIngresos;
    }

    get id(){
        return this._id;
    }
}

class Egreso extends Dato{
    static contadorEgresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Egreso.contadorEgresos;
    }

    get id(){
        return this._id;
    }
}

const ingresos = [
    new Ingreso('Salario', 2100.00),
    new Ingreso('Venta coche', 1500.00)
];

const egresos = [
    new Egreso('Renta departamento', 900),
    new Egreso('Ropa', 400)
];

let totalIngresos = () => {
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = () => {
    let totalEngreso = 0;
    for(let engreso of egresos){
        totalEngreso += engreso.valor;
    }
    return totalEngreso;
}

let cargarApp = () =>{
    cargarCabecero();
}

let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();

    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

const formatoMoneda = (valor) =>{
    return valor.toLocaleString('en-US', {style:'currency', currency:'USD', minimumFractionDigits:2})
}

const formatoPorcentaje = (valor) =>{
    return valor.toLocaleString('en-US', {style: 'percent', minimumFractionDigits:2})
}

