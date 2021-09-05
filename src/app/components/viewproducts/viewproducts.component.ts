import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  products:Products[]=[];

  constructor(private productsService:ProductsService, private router : Router) { }

  ngOnInit(): void {
      this.productsService.listProducts().subscribe(data=>{this.products=data;});

  }

  onAddQuantity(productId : number){

    this.router.navigate(['/adminportal/product-quantity-add',productId]);

  }

}
