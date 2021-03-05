import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { FeedbackModuleRoutingModule } from './feedback-module-routing.module';
import { CustomerFeedbackComponent } from './customer-feedback/customer-feedback.component';


@NgModule({
  declarations: [CustomerFeedbackComponent],
  imports: [
    CommonModule,
    FeedbackModuleRoutingModule,
    ReactiveFormsModule
  ], 
   exports:[CustomerFeedbackComponent]

})
export class FeedbackModuleModule { }
