import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from 'src/app/services/flight.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {
  
  bookForm!:FormGroup;
  submitted=false;
  post:any
  flightData:any
  id:any
  tdate:any
  dcity:any
  des:any
  dtime:any
  price:any
  scity:any
  src:any
  stime:any

  constructor(private formBuilder: FormBuilder,private _httpService:FlightService, private route: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      passPortNo:['',Validators.required],
      issueDate:['',Validators.required],
      expDate:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      country:['',Validators.required]  
  }, );

  this.flightDetail();
  }

  flightDetail(){
    this.route.params.subscribe(params => {
      this._httpService.getflightDataById((params['id'])).subscribe((res:any)=>{
        // alert(JSON.stringify);
        console.log(res);
        this.flightData=res;
        res.map((x:any)=>{
        this.id=x.id,
        this.tdate=x.tdate,
       
        this.dcity=x.dcity,
        this.des=x.des,
        this.dtime=x.dtime,
        this.price=x.price,
        this.scity=x.scity,
        this.src=x.src,
        this.stime=x.stime

        })
   
      })
    });
    
   
  }

  get f() { return this.bookForm.controls; }



  onSubmit() {
  
    
    this.submitted = true;
    // stop here if form is invalid
    
    if (this.bookForm.invalid) {
      console.log("invalid")
        return;
       
    }

    this.post={
      firstName:this.bookForm.value.firstName,
      secondName:this.bookForm.value.secondName,
      passPortNo:this.bookForm.value.passPortNo,
      issueDate:this.bookForm.value.issueDate,
      expDate:this.bookForm.value.expDate,
      email: localStorage.getItem('email'),
      mobile:this.bookForm.value.mobile,
      address:this.bookForm.value.address,
      city:this.bookForm.value.city,
      state:this.bookForm.value.state,
      country:this.bookForm.value.country,
      flightid: this.id,
      tdate:this.tdate,
      dcity:this.dcity,
      des:this.des,
      dtime:this.dtime,
      price:this.price,
      scity:this.scity,
      src:this.src,
      stime:this.stime
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.post));
  this._httpService.formPost(this.post).subscribe((res)=>{
     ;
      if(res!==undefined){
        this.toastr.success("Congratulations! tickets booked");
        

      }
 
    })
}


}
