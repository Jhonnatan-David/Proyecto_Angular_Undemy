import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';









@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    
    //LoginComponent, ==> Se movia a auth.module.ts
    //RegisterComponent, ==> Se movia a auth.module.ts
    
    //BreadcrumbsComponent, ==> Se movia a shared.module.ts
    //SidebarComponent, ==> Se movia a shared.module.ts
    //HeaderComponent,==> Se movia a shared.module.ts

    //DashboardComponent, ==> Se movia a pages.module.ts
    //ProgressComponent, ==> Se movia a pages.module.ts
    //Grafica1Component, ==> Se movia a pages.module.ts
    //PagesComponent, ==> Se movia a pages.module.ts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
