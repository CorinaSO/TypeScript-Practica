export class Telefono{
    private _tipo:string;
    private _numero:number;

    //Constructor
    constructor(tipo:string,numero:number){
        this._tipo=tipo;
        this._numero=numero;
    }
    
    //Setters y Getters
    public set tipo(t:string){
        this._tipo=t;
    }
    public get tipo():string{
        return this._tipo;
    }

    public set numero(n:number){
        this._numero=n;
    }
    public get numero():number{
        return this._numero;
    }

    public mostrarTelefono():void{
        console.log(this._tipo, this._numero)
    }
}