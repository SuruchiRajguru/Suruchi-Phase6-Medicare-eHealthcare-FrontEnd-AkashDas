import { ThrowStmt } from "@angular/compiler";

export class Productrequestpayload {
    public request:string='';
    public imgUrl:File;

    constructor(request:string, imgUrl:File){
        this.request=request;
        this.imgUrl=imgUrl;
    }


}
