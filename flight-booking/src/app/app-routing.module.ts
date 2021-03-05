import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BizbookingComponent } from './bizbooking/bizbooking.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MyticketsComponent } from './mytickets/mytickets.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';




const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'mytickets',component:MyticketsComponent},
  {path:'sale-analytics',component:PieChartComponent},
  { path: 'biz', component:  BizbookingComponent},
  {path:'bookingform/:id',component:BookingformComponent,
  children: [
    { path: '', redirectTo: 'normalOrder', pathMatch: 'full' },
    { path: 'regular', component:   BookingformComponent},
    { path: 'biz', component:  BizbookingComponent},
  ]
  },
  {path: 'feedback', loadChildren: () => import('./feedback-module/feedback-module.module').then(m => m.FeedbackModuleModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
