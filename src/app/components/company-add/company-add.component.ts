import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.css']
})
export class CompanyAddComponent {

  company:Company;

  constructor(private route:ActivatedRoute,private router:Router,private companyService:CompanyService) {
      this.company=new Company();
   }

   onSubmit(){
    this.companyService.saveCompany(this.company).subscribe(result=>this.gotoCompanyList());  
  }
  gotoCompanyList() {
    this.router.navigate(['/company']);
  }
  
  ngOnInit(): void {
  }

}
