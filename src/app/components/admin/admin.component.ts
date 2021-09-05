import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { AdminLoginResponse } from 'src/app/models/admin-login-response';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admin:Admin = new Admin();
adminLoginResponse : AdminLoginResponse = new AdminLoginResponse();
  constructor(private route:ActivatedRoute,private router:Router,private adminService:AdminService) {
      this.admin=new Admin();
   }

   onSubmit(){
    this.adminService.validateAdminLogin(this.admin).subscribe(response =>{
      if(response.responseText === 'Success'){
      this.adminLoginResponse = response.responseData as AdminLoginResponse;
      this.setData(this.adminLoginResponse);
      this.router.navigate(['/adminportal']);

      }
      else{
        alert("Invalid Credentials");
        this.setData(this.adminLoginResponse);
      }

    });

  }

 setData(adminLoginResponse : AdminLoginResponse) {
    const jsonData = JSON.stringify(adminLoginResponse)
    localStorage.setItem('adminDetails', jsonData)
 }
  
 

  ngOnInit(): void {
  }

}
