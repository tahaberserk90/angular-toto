import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Customer } from '../Customer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class InfoComponent implements OnInit {
  @Input()
  customer:Observable<Customer>;
  currentCustomer:Customer;
  constructor(private cd:ChangeDetectorRef) { }

  ngOnInit() {
    this.customer.subscribe((o)=>{
      console.log(o);
      this.currentCustomer=o;
      this.cd.markForCheck();
    })
  }

}
