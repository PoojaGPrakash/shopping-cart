import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'login', 
  // template: '<div> {{ getContent() }} </div>',  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _router:Router){}
  // bodyContent = 'Please wait for the updates';

  // getContent() {
  //   return this.bodyContent;
  // }
  userLogin:any;
  status: string;
  statusMessage="";

  onLoginClick(loginForm) {
    console.log(loginForm);
    let email=loginForm.email;
    let password=loginForm.password;
  this.userLogin = JSON.parse(localStorage.getItem('registerForm') );
   if(email===this.userLogin.email && password === this.userLogin.password){
     this._router.navigate(['courses']);
   }else{
     this.statusMessage="Invalid credintials";
     alert(this.statusMessage);
   }
   console.log("localstorage:" +this.userLogin);
   console.log(this.userLogin.email);




    /*
    if (loginForm.valid == false) {
      if (this.CheckEmailAndPassword (loginForm.email,loginForm.password) == true) {
        this.status = "Successfully Login";
      }
      else {
        this.status = "Invalid login";
      }
    }
  }

  private CheckEmailAndPassword(email: string, password: string): boolean
  {
    var u = JSON.parse( localStorage.getItem('registerUser') );
    var found: boolean = false;
    for (var i = 0; i < u.length; i++)
    {
      if (u[i].email == email && u[i].password == password)
      {
        found = true;
        this._router.navigate(['courses']);
      }
    }
    return found;*/
  }
}