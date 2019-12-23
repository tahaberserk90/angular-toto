import { Injectable } from '@angular/core';


export class Customer{
  constructor(public id:number,public name:string,public firstName:string){ }
}


const customersTab=[
  new Customer(1,'taha','radhi'),
  new Customer(2,'ahmed','syabe'),
  new Customer(3,'yassin','ff'),
  new Customer(4,'tazzha','radwdchi'),
  new Customer(5,'dcsc','fdee'),
  new Customer(6,'ffg','kkllml')
]

let customerPromise=Promise.resolve(customersTab);

@Injectable()
export class CustomersDataService {

  constructor() { }

  getCustomers(){
    return customerPromise;
  }
}
