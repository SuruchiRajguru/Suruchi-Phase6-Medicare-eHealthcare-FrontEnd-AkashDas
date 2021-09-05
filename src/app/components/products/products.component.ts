import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartRequest } from 'src/app/models/cart-request';
import { Category } from 'src/app/models/category';
import { Company } from 'src/app/models/company';
import { FilterProductRequest } from 'src/app/models/filter-product-request';
import { ProductDetailResponse } from 'src/app/models/product-detail-response';
import { Productrequestmodel } from 'src/app/models/productrequestmodel';
import { Products } from 'src/app/models/products';
import { SearchTextModel } from 'src/app/models/search-text-model';
import { UserDetails } from 'src/app/models/user-details';

import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { CompanyService } from 'src/app/services/company.service';
import { ProductsService } from 'src/app/services/products.service';
import { SearchByTextService } from 'src/app/services/search-by-text.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  viewProducts : ProductDetailResponse[] =[];
  searchTextModel : SearchTextModel = new SearchTextModel();
  cat: Category[] = [];
  companies:Company[]=[];
   filterProductRequest : FilterProductRequest = new FilterProductRequest();
   userDetails : UserDetails = new UserDetails();
   cartRequest : CartRequest = new CartRequest();
  

  constructor(private route:ActivatedRoute, private router : Router,private cartService:CartService, private productSerivce : ProductsService,private searchByTextService : SearchByTextService,private categoryService:CategoryService,private companyService:CompanyService) { 
    this.searchByTextService.searchTextUpdate.subscribe((searchText : string)=>{
     
      this.searchTextModel.searchText= searchText
      this.productSerivce.getAllProductsBySearchText(this.searchTextModel).subscribe(data=>{
        this.viewProducts = data.responseData as ProductDetailResponse[];
      })
    })
  }



  ngOnInit(): void {
    this.productSerivce.getAllProducts().subscribe(data=>{
      this.viewProducts = data.responseData as ProductDetailResponse[];

    });
    this.categoryService.listCategory().subscribe(data=>{this.cat=data;});
    this.companyService.listCompany().subscribe(data =>{this.companies=data;});
  }

  onSubmit(){
    this.productSerivce.getAllProductsByFilter(this.filterProductRequest).subscribe(data=>{
      this.viewProducts = data.responseData as ProductDetailResponse[];

    });
  }

  onViewProduct(quantityId : number,productId : number){
    this.router.navigate(['viewProduct',quantityId,productId]);

  }
  onReset(){
    this.filterProductRequest.categoryName = '';
    this.filterProductRequest.companyName = '';
  }
  onAddToCart(quantityId : number){
   
    this.userDetails = JSON.parse(localStorage.getItem('userDetails')|| '{}');
    
    if(this.userDetails.userId === null || this.userDetails.userId === 0){
      alert("Plaese Login to add Item to Cart!!!");
    }
    else{
      this.cartRequest.quantityId = quantityId;
      this.cartRequest.userId = this.userDetails.userId;
      this.productSerivce.addToCart(this.cartRequest).subscribe(Response=>{
        if(Response){
          alert("Successfully Added to Cart");
        }else{
          alert("Something went wrong , please login & try");
        }
      });
      
    }
  }
}
