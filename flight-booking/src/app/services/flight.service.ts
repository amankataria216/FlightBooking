import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FlightService {
  constructor(private http:HttpClient) {
  
  }
  getticketData(email:any) {
   return this.http.get
   (` http://localhost:7002/tickets?email=${email}`);         
 }
 getUser(email:string) {
  return this.http.get
  (` http://localhost:7000/data?email=${email}`);         
}
 getflightData(src:any,des:any) {
  return this.http.get
  (`  http://localhost:7000/flights?scity=${src}&dcity=${des}`);         
}
getflightDataById(id:any) {
  return this.http.get
  (` http://localhost:7000/flights?id=${id}`);         
}
postFeedbackPost(body:any) {
  return this.http.post<any>
  ('http://localhost:7001/feedbackdata',body);         
}

formPost(body:any) {
  return this.http.post<any>
  (` http://localhost:7002/tickets`,body);         
}

deleteTicket(id:any){
  return this.http.delete<any>(
    (` http://localhost:7002/tickets/${id}`)
  )
}
}
