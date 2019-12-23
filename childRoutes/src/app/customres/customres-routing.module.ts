import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomersMainComponent } from './customers-main/customers-main.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';

const routes: Routes = [
  { 
    path:"customres",
    component:CustomersMainComponent,
    children:[
     { 
       path:'',
       component:CustomersListComponent,
       children:[
         {path:':id',component:CustomersDetailComponent}
       ]
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CustomresRoutingModule { }
