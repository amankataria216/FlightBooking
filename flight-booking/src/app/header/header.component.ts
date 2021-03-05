import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
loginTag:boolean=false;
  constructor( private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((event: any) => {  
      console.log(event.url)  
        if (event.url === '/login') {          
          this.loginTag= false;
        } else if(event.url === '/dashboard' || event.url === '/mytickets' || event.url === '/feedback' || event.url === '/sale-analytics'|| event.url === `/bookingform/${localStorage.getItem("flightId")}`||event.url === '/biz' ){
          this.loginTag= true;
        }
    });
   }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.clear();
    console.log("++++++++++++++++++++++++")
  }

}
