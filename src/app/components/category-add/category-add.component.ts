import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent  {
  category:Category;

  constructor(private route:ActivatedRoute,private router:Router,private categoryService:CategoryService) { 
    this.category=new Category();
  }

  onSubmit(){
    this.categoryService.saveCategory(this.category).subscribe(result =>this.gotoCategoryList());

  }
  gotoCategoryList(){
    this.router.navigate(['/category']);
  }

  ngOnInit(): void {
  }

}
