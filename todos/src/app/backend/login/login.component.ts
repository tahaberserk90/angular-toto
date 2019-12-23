import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  message: string;

  constructor(private fb:FormBuilder,private router:Router,private auth:AuthenticationService) { }

  ngOnInit() {
    this.createForm();
  }
  onSubmit(){
    let userName=this.loginForm.value.login;
    let password=this.loginForm.value.password;
    this.auth.login(userName,password).subscribe((d)=>{
      this.router.navigate(['main']);
    },
    e=>{
      this.message='ereur auth';
    });
   
  }

  createForm(){

    this.loginForm=this.fb.group({
      login:['',Validators.required],
      password:['',Validators.required]
    });

  }

}
