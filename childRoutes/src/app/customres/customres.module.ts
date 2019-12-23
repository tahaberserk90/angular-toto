import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersMainComponent } from './customers-main/customers-main.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';
import { CustomersDataService } from './customers-data.service';
import { CustomresRoutingModule } from './customres-routing.module';



@NgModule({
  declarations: [CustomersMainComponent, CustomersListComponent, CustomersDetailComponent],
  imports: [
    CommonModule,
    CustomresRoutingModule
  ],
  providers: [CustomersDataService]
})
export class CustomresModule { }
