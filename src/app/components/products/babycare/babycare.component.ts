import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-babycare',
  templateUrl: './babycare.component.html',
  styleUrls: ['./babycare.component.css']
})
export class BabycareComponent implements OnInit {

  constructor(private route:ActivatedRoute,private cartService:CartService) { }

 


  ngOnInit(): void {
  }

}
