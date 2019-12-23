import { Component, NgZone } from '@angular/core';
import { Customer } from './Customer';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularZone';
  // cpt:number;
  customer:Customer;
  subjectCustomer:BehaviorSubject<Customer>;

  constructor(){

    this.customer=new Customer("radhi","taha");
    this.subjectCustomer=new BehaviorSubject<Customer>(this.customer);
  }
  changeCustomerProps(){
    this.customer.name="yahia";
    this.customer.firstName="taha";
    this.subjectCustomer.next(this.customer);
  }

  changeCustomerObj(){
    this.customer=new Customer("taha","yahia");
  }
  /* incInZone(){

    this.cpt=0;
    this.incCptInZone();
  }
  incCptInZone() {
   this.cpt++;
   console.log(`cpt : ${this.cpt}`);
   if(this.cpt<100){
     setTimeout(()=>this.incCptInZone(),10);
   }else{
     this.myZone.run(()=>{
       console.log("end cpt");
     })
   }
  }

  incOutZone(){
    this.cpt=0;
    this.incCptOutZone();
  }
  incCptOutZone() {
    this.cpt=0;
    this.myZone.runOutsideAngular(()=>{
      this.incCptInZone();
    });
  } */
}
