"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    //Constructor
    function Telefono(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    Object.defineProperty(Telefono.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        //Setters y Getters
        set: function (t) {
            this._tipo = t;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (n) {
            this._numero = n;
        },
        enumerable: false,
        configurable: true
    });
    Telefono.prototype.mostrarTelefono = function () {
        console.log(this._tipo, this._numero);
    };
    return Telefono;
}());
exports.Telefono = Telefono;
