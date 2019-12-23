import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Routes , RouterModule } from '@angular/router';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { AuthenticationService } from '../backend/authentication.service';

const routes:Routes=[
  {
    path:'edit/:id',
    component:TodoFormComponent,
    outlet:'editOutlet',
    canActivate:[AuthenticationService]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FrontendRoutingModule { }
