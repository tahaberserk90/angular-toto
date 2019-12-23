import { Component, OnInit } from '@angular/core';
import { CustomersDataService, Customer } from '../customers-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  constructor(
    private service:CustomersDataService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  customers:Promise<Customer[]>;

  ngOnInit() {

    this.customers=this.service.getCustomers();
  }

  onSelect(customer:Customer){
    this.router.navigate([customer.id],{relativeTo:this.route});
  }

}
