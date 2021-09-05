import { Products } from "./products";

export class ProductQuantity {

    public quantityId:number=0;
    public availableQuantity:number=0;
    public quantity:number=0;
    public price:number=0;
    public entryDate:Date=new Date();
    public product:Products=new Products();              
              
    constructor(){}



}
