import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightService } from 'src/app/services/flight.service';
import { ToastrService } from 'ngx-toastr';


// import custom validator to validate that password and confirm password fields match
import {MustMatch} from '../../_helpers/must-match.validator';

@Component({
  selector: 'app-customer-feedback',
  templateUrl: './customer-feedback.component.html',
  styleUrls: ['./customer-feedback.component.css']
})
export class CustomerFeedbackComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
post:any
  constructor(private formBuilder: FormBuilder,private _httpService:FlightService,private toastr: ToastrService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          title: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          feed:['',[Validators.required]],

          acceptTerms: [false, Validators.requiredTrue]
      }, );
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

 

  onSubmit() {
  
    
      this.submitted = true;
      let post = { title: 'name' }
      // stop here if form is invalid
      if (this.registerForm.invalid) {
        console.log("invalid")
          return;
         
      }

      this.post={
        tiltle:this.registerForm.value.tiltle,
        firstName:this.registerForm.value.firstName,
        lastName:this.registerForm.value.lastName,
        email:this.registerForm.value.email,
        feed:this.registerForm.value.feed
      }

   
    this._httpService.postFeedbackPost(this.post).subscribe((res)=>{
        console.log("++++++++++++++++++++++++"+JSON.stringify(res));
        if(res!==undefined){
          this.toastr.success("Feedback submitted");
          

        }
   
      })
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }


}
