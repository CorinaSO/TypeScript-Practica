import { Contacto } from "./contacto";

export class Agenda{
    private _contactos:Contacto[];
    
    constructor(){
        this._contactos=[];
    }
    
    public insertarContacto(contacto:Contacto){
        this._contactos.push(contacto);
    }
    
    public devolverContacto(posicion:number):Contacto{
        return this._contactos[posicion];
    }

    public buscarContactoDNI(dni:string):any{
        let contactoRetornar=undefined;
        for (let contacto of this._contactos){
           if (contacto.dni==dni){
               contactoRetornar=contacto;
           }
        }
        return contactoRetornar;
    }

    public verContacto(posicion:number):void{
        let contacto:Contacto=this._contactos[posicion];
        contacto.verDatoPersona();
    }

    public verTodosContactos():void{
        for (let unContacto of this._contactos){
            unContacto.verDatoPersona();
        }
    }
}