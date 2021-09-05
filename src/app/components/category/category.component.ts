import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  cat: Category[] = [];
  

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
  //  this.categoryService.listCategory().subscribe(data=>{this.cat=data;});
  //  console.log(this.categoryService.listCategory);
    //category=this.categoryService.listCategory();
    //categorylist:Array<Category> = [];
    
  }

}
