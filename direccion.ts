export class Direccion{
    private _calle:string;
    private _numero:number;
    private _piso:any;
    private _letra:string;
    private _postal:number;
    private _poblacion:string;
    private _provincia:string;

    //Constructor
    constructor(calle:string,numero:number,piso:any,letra:string,postal:number,poblacion:string,provincia:string){
        this._calle=calle;
        this._numero=numero;
        this._piso=piso;
        this._letra=letra;
        this._postal=postal;
        this._poblacion=poblacion;
        this._provincia=provincia;
    }

    //Setters y Getters
    public set calle(s:string){
        this._calle=s;
    }
    public get calle():string{
        return this._calle;
    }

    public set numero(n:number){
        this._numero=n;
    }
    public get numero():number{
        return this._numero;
    }

    public set piso(n:any){
        this._piso=n;
    }
    public get piso():any{
        return this._piso;
    }

    public set letra(s:string){
        this._letra=s;
    }
    public get letra():string{
        return this._letra;
    }

    public set postal(n:number){
        this._postal=n;
    }
    public get postal():number{
        return this._postal;
    }

    public set poblacion(s:string){
        this._poblacion=s;
    }
    public get poblacion():string{
        return this._poblacion;
    }

    public set provincia(s:string){
        this._provincia=s;
    }
    public get provincia():string{
        return this._provincia;
    }

    public mostrarDireccion():void{
        let d1:string=this._calle+","+this._numero.toString()+" "+this._piso.toString()+" "+this._letra;
        console.log(d1);
        let d2:string=this._postal.toString()+" "+this._poblacion;
        console.log(d2);
        console.log(this._provincia);
    }
}