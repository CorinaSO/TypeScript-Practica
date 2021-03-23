"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var telefono_1 = require("./telefono");
var Persona = /** @class */ (function () {
    //Constructor
    function Persona(nombre, apellidos, dni, edad, sexo) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleaños = "";
        this._color = "";
        this._sexo = sexo;
        this._direcciones = [];
        this._mails = [];
        this._telefonos = [];
        this._notas = '';
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        //Getter y Setters
        set: function (s) {
            this._nombre = s;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellidos", {
        get: function () {
            return this._apellidos;
        },
        set: function (s) {
            this._apellidos = s;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (n) {
            this._edad = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "dni", {
        get: function () {
            return this._dni;
        },
        set: function (s) {
            this._dni = s;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "cumplea\u00F1os", {
        get: function () {
            return this._cumpleaños;
        },
        set: function (s) {
            this._cumpleaños = s;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (s) {
            this._color = s;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "notas", {
        get: function () {
            return this._notas;
        },
        set: function (s) {
            this._notas = s;
        },
        enumerable: false,
        configurable: true
    });
    //Métodos para direcciones
    Persona.prototype.anotarDireccion = function (unaDireccion) {
        this._direcciones.push(unaDireccion);
    };
    Persona.prototype.eliminarDireccion = function (posicion) {
        this._direcciones.splice(posicion, 1);
    };
    Persona.prototype.eliminarDireccionxCalle = function (calle) {
        var posicionEliminar = -1;
        for (var i = 0; i < this._direcciones.length; i++) {
            if (this._direcciones[i].calle == calle) {
                posicionEliminar = i;
            }
        }
        if (posicionEliminar != -1) {
            console.log("Se elimina la direccion con calle: " + this._direcciones[posicionEliminar].calle);
            this._direcciones.splice(posicionEliminar, 1);
        }
    };
    Persona.prototype.devolverDireccion = function (posicion) {
        return this._direcciones[posicion];
    };
    Persona.prototype.verUnaDireccion = function (posicion) {
        var direccion = this._direcciones[posicion];
        direccion.mostrarDireccion();
    };
    Persona.prototype.verTodasDirecciones = function () {
        for (var _i = 0, _a = this._direcciones; _i < _a.length; _i++) {
            var direccion = _a[_i];
            direccion.mostrarDireccion();
        }
    };
    //Métodos para emails
    Persona.prototype.anotarEmail = function (unEmail) {
        this._mails.push(unEmail);
    };
    Persona.prototype.devolverEmail = function (posicion) {
        return this._mails[posicion];
    };
    Persona.prototype.verUnEmail = function (posicion) {
        var unEmail = this._mails[posicion];
        unEmail.mostrarEmail();
    };
    Persona.prototype.verTodosEmails = function () {
        for (var _i = 0, _a = this._mails; _i < _a.length; _i++) {
            var unEmail = _a[_i];
            unEmail.mostrarEmail();
        }
    };
    //Métodos para teléfonos
    Persona.prototype.anotarTelefono = function (t, n) {
        var telefono = new telefono_1.Telefono(t, n);
        this._telefonos.push(telefono);
    };
    Persona.prototype.verUnTelefono = function (tipo) {
        for (var _i = 0, _a = this._telefonos; _i < _a.length; _i++) {
            var unTelefono = _a[_i];
            if (unTelefono.tipo == tipo) {
                unTelefono.mostrarTelefono();
            }
        }
    };
    Persona.prototype.verTodosTelefonos = function () {
        for (var _i = 0, _a = this._telefonos; _i < _a.length; _i++) {
            var unTelefono = _a[_i];
            unTelefono.mostrarTelefono();
        }
    };
    Persona.prototype.verDatoPersona = function () {
        console.log("******************** Datos de Contacto ********************");
        console.log("Nombre: " + this._nombre + " Apellidos: " + this._apellidos + " Edad: " + this._edad);
        console.log("DNI: " + this._dni + " Sexo:" + this._sexo + " Cumpleaños: " + this._cumpleaños);
        console.log("Direciones:");
        this.verTodasDirecciones();
        console.log("Emails:");
        this.verTodosEmails();
        console.log("Teléfonos: ");
        this.verTodosTelefonos();
        console.log("Notas: " + this._notas);
        console.log("");
    };
    return Persona;
}());
exports.Persona = Persona;
