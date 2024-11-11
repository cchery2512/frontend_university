//Palabra Static en JavaScript

class Persona{
    static contadorObjetosPersona = 0;
    static get MAX_OBJ() {return 5;}
    constructor(nombre, apellido, email) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._email = email;
        Persona.contadorObjetosPersona++;
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

    static hello(){
        return "ok go";
    }

    nombreCompleto() {
        return this._nombre + ' ' + this._apellido;
    };
}

class Empleado extends Persona{
    constructor(nombre, apellido, email, departamento){
        super(nombre, apellido, email);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona = new Persona('Carmelo', 'Chery', 'cchery@gmail.com');
// console.log(persona.nombreCompleto());
// persona.nombre = 'Juan';
// console.log(persona.nombre);
console.log(Persona.contadorObjetosPersona);

let empleado = new Empleado('Carina', 'Saldivar', 'csaldivar@gmail.com', 'IT');
console.log(empleado.nombreCompleto());
console.log(Empleado.hello());
console.log(Persona.hello());
console.log(Empleado.MAX_OBJ);
Empleado.MAX_OBJ = 10;
console.log(Empleado.MAX_OBJ);
console.log(Empleado.contadorObjetosPersona);

// let persona2 = new Persona('Carlos', 'Lara', 'clara@gmail.com');
// console.log(persona2.nombreCompleto());