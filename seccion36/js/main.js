"use strict";

class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada   = tipoEntrada;
        this._marca         = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++ Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `\nRaton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    };
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++ Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `\nTeclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    };
}

class Monitor{
    static contadorMonitores = 0;
    constructor(marca, size){
        this._idMonitor = ++ Monitor.contadorMonitores;
        this._marca     = marca;
        this._size      = size;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }

    get size(){
        return this._size;
    }
    set size(size){
        this._size = size;
    }

    toString(){
        return `\nMonitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, size: ${this._size}]`;
    };
}

class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++ Computadora.contadorComputadoras;
        this._nombre        = nombre;
        this._monitor       = monitor;
        this._teclado       = teclado;
        this._raton         = raton;
    }

    get idComputadora(){
        return this._idComputadora;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }

    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }

    get raton(){
        return this._raton;
    }
    set raton(raton){
        this._raton = raton;
    }

    toString(){
        return `Computadora: ${this._idComputadora}: ${this._nombre}` + this._monitor.toString() + this._teclado.toString() + this._raton.toString();
    };

}

class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++ Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let message = `Orden: ${this._idOrden}`;
        this._computadoras.forEach(computadora => {
            message += '\n'+computadora.toString();
        });
        console.log(message);
    }
}


let dispositivoEntrada = new DispositivoEntrada();
let raton1 = new Raton('USB', 'Logitec');
let raton2 = new Raton('USB', 'Razer');
//console.log(raton1.toString());
let teclado1 = new Teclado('bluetooth', 'HP');
let teclado2 = new Teclado('USB', 'Dell');
//console.log(teclado1.toString());
//console.log(teclado2.toString());
let monitor1 = new Monitor('UltraGear', 24);
let monitor2 = new Monitor('Samsung', 27);
//console.log(monitor1.toString());
let computadora1 = new Computadora('HP', monitor1, teclado1, raton1);
let computadora2 = new Computadora('HP', monitor2, teclado2, raton2);
//console.log(computadora1.toString());

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();