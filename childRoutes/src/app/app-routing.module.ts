import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path:"",
    loadChildren:() => import('./customres/customres.module').then(mod => mod.CustomresModule)
  },
  {
    path:'admin',
    component:AdminUsersComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AdminModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
