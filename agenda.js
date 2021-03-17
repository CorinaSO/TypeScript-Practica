"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agenda = void 0;
var Agenda = /** @class */ (function () {
    function Agenda() {
        this._contactos = [];
    }
    Agenda.prototype.insertarContacto = function (contacto) {
        this._contactos.push(contacto);
    };
    Agenda.prototype.devolverContacto = function (posicion) {
        return this._contactos[posicion];
    };
    Agenda.prototype.buscarContactoDNI = function (dni) {
        var contactoRetornar = undefined;
        for (var _i = 0, _a = this._contactos; _i < _a.length; _i++) {
            var contacto = _a[_i];
            if (contacto.dni == dni) {
                contactoRetornar = contacto;
            }
        }
        return contactoRetornar;
    };
    Agenda.prototype.verContacto = function (posicion) {
        var contacto = this._contactos[posicion];
        contacto.verDatoPersona();
    };
    Agenda.prototype.verTodosContactos = function () {
        for (var _i = 0, _a = this._contactos; _i < _a.length; _i++) {
            var unContacto = _a[_i];
            unContacto.verDatoPersona();
        }
    };
    return Agenda;
}());
exports.Agenda = Agenda;
