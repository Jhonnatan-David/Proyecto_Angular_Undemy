import { NgModule } from '@angular/core';

import {RouterModule, Routes} from  '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafical1Component } from './pages/grafical1/grafical1.component';
import { NotpagefoundComponent } from './pages/notpagefound/notpagefound.component';
import { RegisterComponent } from './auth/register/register.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path:'',
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent },
      {path: 'progress', component: ProgressComponent},
      {path: 'grafical1', component: Grafical1Component},
      {path: '', redirectTo: '/dashboard', pathMatch:'full'},
    ] 
  },

  
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  
  {path: '**', component: NotpagefoundComponent},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]

})
export class AppRutingModule { }
