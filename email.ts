export class Email{
    private _tipo:string;
    private _direccion:string;

    //Constructor
    constructor(tipo:string,direccion:string){
        this._tipo=tipo;
        this._direccion=direccion;
    }

    //Setters y getters
    public set tipo(t:string){
        this._tipo=t;
    }
    public get tipo():string{
        return this._tipo;
    }

    public set direccion(d:string){
        this._direccion=d;
    }
    public get direccion():string{
        return this._direccion;
    }
    
    public mostrarEmail():void{
        console.log("Tipo: "+this._tipo,"Dirección: "+this._direccion);
    }
}