import { Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  registerForm: FormGroup;
  isSuccessfullyRegistered: boolean = false;
  shouldDisplayMessage: boolean = false;

  constructor() {

    this.registerForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
      email: new FormControl("", [Validators.required, Validators.pattern("\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*")]),
      username: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
      password: new FormControl("", [Validators.required, Validators.pattern("((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15})"), Validators.minLength(6), Validators.maxLength(15)]),
      reenterpassword: new FormControl("", [Validators.required, Validators.pattern("((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15})"), Validators.minLength(6), Validators.maxLength(15)]),
    })

  }

  onRegisterClick() {
    console.log(this.registerForm.value);
    if (localStorage.getItem('registerForm') === null) {
      localStorage.setItem('registerForm', JSON.stringify(this.registerForm.value));
      console.log("counter:"+localStorage.getItem('registerForm'));
    }
    // try {
    //    if (this.registerForm.valid == true)
    //   {
    //   var s = "name =" + this.registerForm.controls.name.value + "email =" + this.registerForm.controls.email.value + "username =" + this.registerForm.controls.username.value + "password =" + this.registerForm.controls.password.value + "reenterpassword =" + this.registerForm.controls.reenterpassword.value;
    //   console.log(s);
    //   if (localStorage.users == null || localStorage.users == undefined)
    //     {
    //       localStorage.users = JSON.stringify([]);
    //     }
    //     var u = JSON.parse( localStorage.users );

    //   u.push( { name: this.registerForm.controls.name.value, email: this.registerForm.controls.email.value, username: this.registerForm.controls.username.value, password: this.registerForm.controls.password.value, reenterpassword: this.registerForm.controls.name.value });
    //   localStorage.users = JSON.stringify(u);
    //   this.isSuccessfullyRegistered = true;
    //   this.shouldDisplayMessage = true;
    // }
    // }

    // catch (err) {
    //   this.isSuccessfullyRegistered = false;
    //   this.shouldDisplayMessage = true;
    // }

  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log(changes['name'].currentValue)
  }

  ngDoCheck() {
    console.log("Do Check");
  }

  ngAfterContentInit() {
    console.log("After Content Init");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}