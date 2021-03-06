import {Direccion} from './direccion';
import {Telefono} from './telefono';
import {Email} from './email';

export abstract class Persona {
    private _nombre:string;
    private _apellidos:string;
    private _edad:number;
    private _dni:string;
    private _cumpleaños:string;
    private _color:string;
    private _sexo:string;
    private _direcciones:Direccion[];
    private _mails:Email[];
    private _telefonos:Telefono[];
    private _notas:string;

    //Constructor
    constructor(nombre:string,apellidos:string,dni:string,edad:number,sexo:string){
        this._nombre=nombre;
        this._apellidos=apellidos;
        this._edad=edad;
        this._dni=dni;
        this._cumpleaños="";
        this._color="";
        this._sexo=sexo;
        this._direcciones=[];
        this._mails=[];
        this._telefonos=[];
        this._notas='';
    }
    
    //Getter y Setters
    public set nombre(s:string){
        this._nombre=s;
    }
    public get nombre():string{
        return this._nombre;
    }

    public set apellidos(s:string){
        this._apellidos=s;
    }
    public get apellidos():string{
        return this._apellidos;
    }

    public set edad(n:number){
        this._edad=n;
    }
    public get edad():number{
        return this._edad;
    }

    public set dni(s:string){
        this._dni=s;
    }
    public get dni():string{
        return this._dni;
    }

    public set cumpleaños(s:string){
        this._cumpleaños=s;
    }
    public get cumpleaños():string{
        return this._cumpleaños;
    }

    public set color(s:string){
        this._color=s;
    }
    public get color():string{
        return this._color;
    }

    public set notas(s:string){
        this._notas=s;
    }
    public get notas():string{
        return this._notas;
    }
    
    //Métodos para direcciones
    //se utiliza pasando una Direccion
    public anotarDireccion(unaDireccion:Direccion){
        this._direcciones.push(unaDireccion);
    }

    //eliminar indicando posicion dentro del array
    public eliminarDireccion(posicion:number){
        this._direcciones.splice(posicion,1);
    }

    //eliminar indicando la calle
    public eliminarDireccionxCalle(calle:string):void{
        let posicionEliminar=-1;
        for(var i = 0;i<this._direcciones.length;i++) { 
            if(this._direcciones[i].calle==calle){
                posicionEliminar=i
            }
        }
        if (posicionEliminar!=-1){
            console.log("Se elimina la direccion con calle: "+this._direcciones[posicionEliminar].calle);
            this._direcciones.splice(posicionEliminar,1);
        }
    }

    //devuleve un objeto Direccion
    public devolverDireccion(posicion:number):Direccion{
      return this._direcciones[posicion];  
    }

    //ver una dirección indicando la posicion dentro del array
    public verUnaDireccion(posicion:number):void{
        let direccion:Direccion=this._direcciones[posicion];
        direccion.mostrarDireccion();
    }

    //ver todas las direcciones del array recorriendo éste
    public verTodasDirecciones():void{
        for(let direccion of this._direcciones){
            direccion.mostrarDireccion();
        }
    }

    //Métodos para emails, se podrían implementar más métodos como podría ser elimminar un mail 
    public anotarEmail(unEmail:Email){
        this._mails.push(unEmail);
    }

    public devolverEmail(posicion:number):Email{
        return this._mails[posicion];
    }

    public verUnEmail(posicion:number):void{
        let unEmail:Email=this._mails[posicion];
        unEmail.mostrarEmail();
    }

    public verTodosEmails():void{
        for (let unEmail of this._mails){
            unEmail.mostrarEmail();
        }
    }

    //Métodos para teléfonos, se podrían implementar más métodos como podría ser eliminar un teléfono
    //variante de como añadir un objeto en este caso en vez de pasar un objeto Telefono
    //pasamos el tipo y el número y dentro del método cramos el objeto Telefono
    public anotarTelefono(t:string,n:number){
        var telefono=new Telefono(t,n);
        this._telefonos.push(telefono);
    }

    public verUnTelefono(tipo:string):void{
        for (let unTelefono of this._telefonos){
            if(unTelefono.tipo==tipo){
                unTelefono.mostrarTelefono();
            }
        }
    }

    public verTodosTelefonos():void{
        for(let unTelefono of this._telefonos){
            unTelefono.mostrarTelefono();
        }
    }

    //Método que nos muestra los datos de una persona
    public verDatoPersona():void{
        console.log("******************** Datos de Contacto ********************")
        console.log("Nombre: "+this._nombre+ " Apellidos: "+this._apellidos+" Edad: "+this._edad);
        console.log("DNI: "+this._dni+" Sexo:"+this._sexo+" Cumpleaños: "+this._cumpleaños);
        console.log("Direciones:");
        this.verTodasDirecciones();
        console.log("Emails:");
        this.verTodosEmails();
        console.log("Teléfonos: ");
        this.verTodosTelefonos();
        console.log("Notas: "+this._notas);
        console.log("");
    }
}
