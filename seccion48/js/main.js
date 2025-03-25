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
    new Egreso('Renta departamento', 1000),
    new Egreso('Ropa', 500)
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
    cargarData('ingresos');
    cargarData('egresos');
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

const cargarData = (type)=>{
    let datosHTML = '';
    for(let data of type == 'ingresos' ? ingresos : egresos){
        datosHTML += crearDatoHTML(data, type);
    }
    document.getElementById(type == 'ingresos' ? 'lista-ingresos' : 'lista-egresos').innerHTML = datosHTML;
}

const crearDatoHTML = (data, type)=>{
    let datoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${data.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${type== 'egresos' ? '- ' : ''}${formatoMoneda(data.valor)}</div>
            ${type == 'egresos' ? `<div class="elemento_porcentaje">${formatoPorcentaje(data.valor/totalEgresos())}</div>` : ''}
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline" onclick="eliminarItem(${data.id}, '${type}')" ></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return datoHTML;
}

function eliminarItem(id, type) {
    let indiceEliminar = type == 'ingresos' ? ingresos.findIndex( ingreso => ingreso.id === id) : egresos.findIndex(egreso => egreso.id === id);
    type == 'ingresos' ? ingresos.splice(indiceEliminar, 1) : egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    type == 'ingresos' ? cargarData('ingresos') : cargarData('egresos');
}

let agregarDato = ()=> {
    let forma       = document.forms['forma'];
    let tipo        = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor       = forma['valor'];
    if(descripcion.value !== '' && valor.value !== ''){
        if(tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, +valor.value));
            reloadData('ingresos');
        }else if(tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value, +valor.value));
            reloadData('egresos');
        }
    }
}

function reloadData(type){
    cargarCabecero();
    type == 'ingresos' ? cargarData('ingresos') : cargarData('egresos');
}


