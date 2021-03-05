import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightService } from '../services/flight.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  getData:any
   loggedIn = false
  constructor(private formBuilder: FormBuilder,private _httpService:FlightService,private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

  },);
  }
  get f() { return this.loginForm.controls; }
  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    

 this._httpService.getUser(this.loginForm.value.email).subscribe((res:any)=>{
      console.log(res);
      // this.getData = res;
      
     
      if( res.length>0&&res[0].password==this.loginForm.value.password){
       
        localStorage.setItem("loggedIn","true");
        localStorage.setItem("id",res[0].id);
        localStorage.setItem("email",res[0].email);

        // alert("login successFul");
        // console.log("login successFul") 
        this.router.navigateByUrl('/dashboard');
        // this.redirectTo('/dashboard');

  //       this.router.navigate(['/dashboard'])
  // .then(() => {
  //   window.location.reload();
  // });
      
        
      }
      else{
        alert("Invalid Login")
      }
  
    });
    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
    //  console.log(JSON.stringify(this.loginForm.value));
}
}
