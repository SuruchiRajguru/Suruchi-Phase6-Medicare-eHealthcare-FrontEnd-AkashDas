import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';
import { HttpEvent,HttpEventType,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productrequestpayload } from 'src/app/models/productrequestpayload';
import { Productrequestmodel } from 'src/app/models/productrequestmodel';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';


@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit{
  request : string = '';
  imgUrl!: File;
  productRequestPayload : Productrequestpayload | undefined;
  productRequestModel : Productrequestmodel;

  cat: Category[] = [];
  companies:Company[]=[];
  
  constructor(private categoryService:CategoryService,private productsService:ProductsService,private companyService:CompanyService ) {
    this.productRequestModel = new Productrequestmodel();
    

  }
  ngOnInit(){
    this.categoryService.listCategory().subscribe(data=>{this.cat=data;});
    this.companyService.listCompany().subscribe(data =>{this.companies=data;});
  }

  public onFileChanged(event: any) {
    
        this.imgUrl = event.target.files[0];
    
      }
  
      public onSubmit(){
        this.request = JSON.stringify(this.productRequestModel);
        this.productRequestPayload = new Productrequestpayload(this.request,this.imgUrl);
       
        
        console.log(this.request);
        console.log(this.productRequestPayload.imgUrl);
        this.productsService.saveProduct(this.productRequestPayload).subscribe(result => console.log('Product Saved!!!:)'));
      }
  

 }




