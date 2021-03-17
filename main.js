"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var agenda_1 = require("./agenda");
var contacto_1 = require("./contacto");
var direccion_1 = require("./direccion");
var email_1 = require("./email");
var miAgenda = new agenda_1.Agenda();
var contacto = new contacto_1.Contacto('Corina', 'Martinez Berriel', '42526536F', 44, 'F');
miAgenda.insertarContacto(contacto);
miAgenda.verContacto(0);
contacto = new contacto_1.Contacto('Pedro', 'Castaño Toledo', '95111265M', 42, 'M');
miAgenda.insertarContacto(contacto);
miAgenda.verContacto(1);
contacto = new contacto_1.Contacto('Paola', 'López Argal', '47425852L', 22, 'F');
miAgenda.insertarContacto(contacto);
miAgenda.verContacto(2);
contacto = miAgenda.buscarContactoDNI('95111265M');
if (contacto == undefined) {
    console.log("No se ha encontrado el contacto");
}
else {
    var nuevaDireccion = new direccion_1.Direccion('San Diego de Alaca', 16, 'Bajo', '', 35002, 'Las Palmas de GC', 'Las Palmas');
    contacto.anotarDireccion(nuevaDireccion);
    nuevaDireccion = new direccion_1.Direccion('San Diego de Alcalá', 16, 'Bajo', '', 35002, 'Las Palmas de GC', 'Las Palmas');
    contacto.anotarDireccion(nuevaDireccion);
    contacto.eliminarDireccionxCalle('San Diego de Alaca');
    var nuevoEmail = new email_1.Email('Personal', 'direccion@hotmail.com');
    contacto.anotarEmail(nuevoEmail);
    contacto.anotarTelefono('Móvil', 654422565);
}
miAgenda.verTodosContactos();
