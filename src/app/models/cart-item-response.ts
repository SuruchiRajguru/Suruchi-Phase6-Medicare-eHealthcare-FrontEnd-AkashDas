export class CartItemResponse {
    public  cartId:number=0;
	public  userId:number=0;
	public  userConcatName:string='';
	public  productId:number=0;
	public  productName:string='';
	public  longDescription:string='';
	public  shortDescription:string='';
	public  imgUrl:string='';
	public  categoryId:number=0;
	public  companyId:number=0;
	public  categoryName:string='';
	public  companyName:string='';
	public  quantityId:number=0;
	public  createdDate: Date=new Date();
	public  price:number=0;
    public status : string = '';

    constructor(){}
	
}
