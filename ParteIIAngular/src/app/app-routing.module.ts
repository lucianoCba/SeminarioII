import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './layouts/public/public.component';
import { SecureComponent } from './layouts/secure/secure.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardpComponent } from './views/dashboardp/dashboardp.component';


const routes: Routes = [

  // public routes
  { 
      path: '', 
      component: PublicComponent,
      children: [
        { path: '', component: LoginComponent}
      ]
  },
  // secure routes
   { 
      path: 'home',
      component: SecureComponent, 
      children: [
        { path: 'piechart', component: PiechartComponent },
        { path: 'dashboard', component: DashboardpComponent }
      ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
