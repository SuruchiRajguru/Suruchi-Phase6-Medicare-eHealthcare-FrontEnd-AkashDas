import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies:Company[]=[];

  constructor(private companyService:CompanyService) { }

  ngOnInit(): void {
    this.companyService.listCompany().subscribe(data=>{this.companies=data;});
  }

}
