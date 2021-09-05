import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Signin } from 'src/app/models/signin';
import { UserDetails } from 'src/app/models/user-details';
import { SigninService } from 'src/app/services/signin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails : Signin = new Signin();
  userDetails : UserDetails = new UserDetails();
  responseText : string = '';

  constructor(private signInService : SigninService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginDetails);
    this.signInService.validateLogin(this.loginDetails).subscribe(result=>{
      this.responseText = result.responseText;
      this.userDetails = result.responseData as UserDetails;
      if(this.responseText === 'Success'){
        alert("Login Successful");
        this.setData(this.userDetails);
        this.router.navigate(['/products']);
      }
      else{
        alert("Login failed, please check credentials");
        this.setData(this.userDetails);
      }

    }); 

    
  }

  setData(userDetails : UserDetails) {
    const jsonData = JSON.stringify(userDetails)
    localStorage.setItem('userDetails', jsonData)
 }
 
 getData() {
    return localStorage.getItem('userDetails')
    
 }

}
