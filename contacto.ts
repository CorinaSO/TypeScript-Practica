import { Persona } from "./persona";

export class Contacto extends Persona {
    constructor(nombre:string,apellidos:string,dni:string,edad:number,sexo:string){
        super(nombre,apellidos,dni,edad,sexo);
    }
}