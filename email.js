"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
var Email = /** @class */ (function () {
    //Constructor
    function Email(tipo, direccion) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
    Object.defineProperty(Email.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        //Setters y getters
        set: function (t) {
            this._tipo = t;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Email.prototype, "direccion", {
        get: function () {
            return this._direccion;
        },
        set: function (d) {
            this._direccion = d;
        },
        enumerable: false,
        configurable: true
    });
    Email.prototype.mostrarEmail = function () {
        console.log("Tipo: " + this._tipo, "Dirección: " + this._direccion);
    };
    return Email;
}());
exports.Email = Email;
