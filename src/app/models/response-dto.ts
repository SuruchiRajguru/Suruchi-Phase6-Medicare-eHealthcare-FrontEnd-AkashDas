export class ResponseDTO {

    public responseText:string;
	public  responseData:object;

    constructor(responseText:string,responseData:object){
        this.responseText = responseText;
		this.responseData = responseData;
    }
}
