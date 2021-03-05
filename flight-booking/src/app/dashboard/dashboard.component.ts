import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FlightService} from '../services/flight.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faArrowRight=faArrowRight;
  searchForm!:FormGroup;
  submitted = false;
  getData:any
  constructor(private formBuilder: FormBuilder,private _httpService:FlightService) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      trip:['',Validators.required],
      From:['',Validators.required],
      To:['',Validators.required],
      DepartDate:['',Validators.required],
      ReturnDate:['',Validators.required],
      Travellers:['']

     
  }, )
  }

  get f() { return this.searchForm.controls; }

  
  getFlightDetails(){
    this.submitted = true;
    this._httpService.getflightData(this.searchForm.value.From,this.searchForm.value.To).subscribe((res)=>{
      console.log(res);
      this.getData = res;
    });

    // alert(JSON.stringify(this.searchForm.value));
  }

  onSubmit(ticketinfo:any){
    alert(JSON.stringify(ticketinfo));
  }
}
