import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodycontentComponent } from './bodycontent/bodycontent.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomerComponentComponent } from './customer-component/customer-component.component';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodycontentComponent,
    SidebarComponent,
    CustomerComponentComponent,
    EmployeeComponentComponent,
    DashboardComponentComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
