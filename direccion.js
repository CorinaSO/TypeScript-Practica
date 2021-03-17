"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    //Constructor
    function Direccion(calle, numero, piso, letra, postal, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._postal = postal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    Object.defineProperty(Direccion.prototype, "calle", {
        get: function () {
            return this._calle;
        },
        //Setters y Getters
        set: function (s) {
            this._calle = s;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (n) {
            this._numero = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "piso", {
        get: function () {
            return this._piso;
        },
        set: function (n) {
            this._piso = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "letra", {
        get: function () {
            return this._letra;
        },
        set: function (s) {
            this._letra = s;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "postal", {
        get: function () {
            return this._postal;
        },
        set: function (n) {
            this._postal = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "poblacion", {
        get: function () {
            return this._poblacion;
        },
        set: function (s) {
            this._poblacion = s;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "provincia", {
        get: function () {
            return this._provincia;
        },
        set: function (s) {
            this._provincia = s;
        },
        enumerable: false,
        configurable: true
    });
    Direccion.prototype.mostrarDireccion = function () {
        var d1 = this._calle + "," + this._numero.toString() + " " + this._piso.toString() + " " + this._letra;
        console.log(d1);
        var d2 = this._postal.toString() + " " + this._poblacion;
        console.log(d2);
        console.log(this._provincia);
    };
    return Direccion;
}());
exports.Direccion = Direccion;
