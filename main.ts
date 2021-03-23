import { Agenda } from "./agenda";
import { Contacto } from "./contacto";
import { Direccion } from "./direccion";
import { Email } from "./email";

let miAgenda=new Agenda();
let contacto=new Contacto('Corina','Martinez Berriel','42526536F',44,'F');
miAgenda.insertarContacto(contacto);
miAgenda.verContacto(0);
contacto=new Contacto('Pedro','Castaño Toledo','95111265M',42,'M');
miAgenda.insertarContacto(contacto);
miAgenda.verContacto(1);
contacto=new Contacto('Paola','López Argal','47425852L',22,'F');
miAgenda.insertarContacto(contacto);
miAgenda.verContacto(2);
contacto=miAgenda.buscarContactoDNI('95111265M');
if (contacto==undefined){
    console.log("No se ha encontrado el contacto");
} else {
    //se añade una variante que sería introducir más de una dirección sobre el contacto localizado,
    //una incorrecta y la correcta y se elimina la incorrecta indicando la calle a borrar.
    let nuevaDireccion=new Direccion('San Diego de Alaca',16,'Bajo','',35002,'Las Palmas de GC','Las Palmas');
    contacto.anotarDireccion(nuevaDireccion);
    nuevaDireccion=new Direccion('San Diego de Alcalá',16,'Bajo','',35002,'Las Palmas de GC','Las Palmas');
    contacto.anotarDireccion(nuevaDireccion);
    contacto.eliminarDireccionxCalle('San Diego de Alaca');
    let nuevoEmail=new Email('Personal','direccion@hotmail.com');
    contacto.anotarEmail(nuevoEmail);
    contacto.anotarTelefono('Móvil',654422565);
}
miAgenda.verTodosContactos();