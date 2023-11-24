export interface Producto{
    id?:number;
    nombre: string;
    marca: string;
    precio : number;
    stockmin : number;
    cantidad : number;
    tipoproducto?: number;
}