import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.customer=new Customer('taha','radhi');
   

    this.customerForm=this.fb.group({
      name:[this.customer.name,Validators.required],
      firstName:[this.customer.firstName],
      isNew:"true",
      address:this.fb.group({
        street:'',
        city:''
      })
    });
  }
  title = 'reactiveForms';
  customer:Customer;
  customerForm:FormGroup;
  customerNameCtr:FormControl;
  customerFirstNameCtr:FormControl;

  constructor(private fb:FormBuilder){}

  changeProps(){
    this.customer.name="yahia";
    this.customer.firstName="taha";
    this.customerNameCtr.setValue(this.customer.name);
    this.customerFirstNameCtr.setValue(this.customer.firstName);
  }
  
}

class Customer{
  constructor(public name:string,public firstName:string){ }
}
