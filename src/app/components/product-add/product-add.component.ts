import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  products:Products;

  constructor(private route:ActivatedRoute,private router:Router,private productsService:ProductsService) {
    this.products=new Products();
   }

  //  onSubmit(){
  //   this.productsService.saveProducts(this.products).subscribe(result=>this.gotoProductsList());  
  // }
  // gotoProductsList() {
  //   this.router.navigate(['/viewproducts']);
  // }

  ngOnInit(): void {
  }

}
