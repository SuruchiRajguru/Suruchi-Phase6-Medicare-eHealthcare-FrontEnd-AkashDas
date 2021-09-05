import { Component, OnInit } from '@angular/core';
import { Signup } from 'src/app/models/signup';
import { SignupService } from 'src/app/services/signup.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupvar1:Signup;
  mesaageString : string = '';

  constructor(private route:ActivatedRoute, private router:Router, private signupService:SignupService) {
        this.signupvar1=new Signup();
 }

 ngOnInit(): void {}
onSubmit(){
   this.signupService.saveSignUp(this.signupvar1).subscribe(result=>{
     if(result){
      this.mesaageString = 'success';
     }
     else{
      this.mesaageString = 'failed';
    
     }
     this.message(this.mesaageString );
    });
  
}

message(messageString : string){
  if(messageString === 'success'){
    alert("user registered successfully, Please LogIn");
    this.router.navigate(['/login']);
  }else{
    alert("user registered failed, please try again");
    
  }
 
}
}