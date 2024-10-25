import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { EventModel } from 'src/models/eventModel';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private url : string;
  constructor(private http:HttpClient) { 
    this.url = "http://localhost:8080/events";
  }

  createEvent(event:EventModel){
    console.log(event);
    return this.http.post(`${this.url}/createEvent`,event);
  }

  getEvents(){
    return this.http.get<EventModel[]>(`${this.url}/getAllEvents`);
  }
}
