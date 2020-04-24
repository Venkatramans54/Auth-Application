import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { ProductsComponent } from 'src/app/products/products.component';
import { AuthGuard } from 'src/app/auth.guard';


const routes: Routes=[
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },{
    path: 'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'products',
    component: ProductsComponent,
    canActivate: [AuthGuard]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
