import { Component, OnInit } from '@angular/core';
import{FlightService} from '../services/flight.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mytickets',
  templateUrl: './mytickets.component.html',
  styleUrls: ['./mytickets.component.css']
})
export class MyticketsComponent implements OnInit {
getData:any
ticket:any
isDataAvailable:boolean = false;
faArrowRight=faArrowRight;
  constructor(private _httpService:FlightService) { }

  ngOnInit(): void {
    this.getTicketDetail();
  }

  getTicketDetail(){
let id:any =localStorage.getItem("email");
    this._httpService.getticketData(id).subscribe((res)=>{
      console.log(res);
      this.ticket = res;
      // this.ticket=this.getData.ticket;
      // console.log(this.ticket);
    });
  }

  deleteTicketDetail(id:any){
    // let id:any =localStorage.getItem("email");
        this._httpService.deleteTicket(id).subscribe((res)=>{
          console.log(res);
          this.ticket = res;
          // this.ticket=this.getData.ticket;
          // console.log(this.ticket);
          this.getTicketDetail();
        });
      }
}
