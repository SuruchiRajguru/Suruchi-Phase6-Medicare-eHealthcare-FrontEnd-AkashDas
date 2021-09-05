import { Category } from "./category";
import { Company } from "./company";

export class Products {
    public productId:number=0;
    public productName:string='';
    public imgUrl:string='';
    public longDescription:string='';
    public shortDescription:string='';
    public category:Category=new Category();
    public company:Company=new Company();

    constructor(){}

}
