import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFeedbackComponent } from './customer-feedback/customer-feedback.component';


const routes: Routes = [
  { path: '', redirectTo: 'viewfeedback', pathMatch: 'full'},  
  { path: 'viewfeedback',component: CustomerFeedbackComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackModuleRoutingModule { }
