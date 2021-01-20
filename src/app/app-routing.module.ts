import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerComponentComponent } from "./customer-component/customer-component.component";
import { DashboardComponentComponent } from "./dashboard-component/dashboard-component.component";
import { EmployeeComponentComponent } from "./employee-component/employee-component.component";

const routes: Routes = [
  {path:'', component :DashboardComponentComponent},
  {path:'customer',component :CustomerComponentComponent},
  {path:'employee',component :EmployeeComponentComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
