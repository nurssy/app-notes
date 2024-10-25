import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Calendar, CalendarOptions, EventInput } from '@fullcalendar/core';
import { NoteModel } from 'src/models/notesModel';
import { User } from 'src/models/user';
import { NoteService } from 'src/services/note-services.service';
import { UserService } from 'src/services/user.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { MatDialog } from '@angular/material/dialog';
import { CalendarModalComponent } from './calendar-modal/calendar-modal.component';
import { EventsService } from 'src/services/events.service';
import { co } from '@fullcalendar/core/internal-common';
import { EventModalComponent } from './event-modal/event-modal.component';


@Component({
  selector: 'lib-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit{

constructor(private userService:UserService,private router:Router,private dialogRef:MatDialog,private eventService:EventsService) { }  
  
user:User | null = null;
events: EventInput[] = [];
PrivatecalendarEvents: EventInput[] = [];
PubliccalendarEvents: EventInput[] = [];

calendarOptions: CalendarOptions = {
  initialView: 'dayGridMonth',
  plugins: [dayGridPlugin, interactionPlugin],
  dateClick: (arg:EventInput) => this.handleDateClick(arg),
  eventClick: (arg:any) => this.handleEventClick(arg)
}

handleEventClick(arg: any) {
  // Tarih nesnesi oluşturarak formatlamayı gerçekleştirelim
  const eventDate = new Date(arg.event.start);

  // Formatlanmış tarih bilgisini alalım
  const formattedDate = eventDate.toLocaleDateString('default', { month: 'short', day: 'numeric', year: 'numeric' });
  console.log(formattedDate);
  // Formatlanmış tarih bilgisini kullanarak iletişim kutusunu açalım
  this.dialogRef.open(EventModalComponent, {
    width: '400px',
    height: '400px',
    data: {
      title: arg.event.title,
      date: formattedDate,
      userId: arg.event.extendedProps.userId
    }
  });
}



handleDateClick(arg:EventInput) {
  this.dialogRef.open(CalendarModalComponent, {
    width: '400px',
    height: '480px',
    data: arg
  });
  // if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
  //   this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
  //     title: 'New Event',
  //     start: arg.date,
  //     end: arg.date,
  //   })
  // }
}

ngOnInit(): void {

    this.userService.user.subscribe(
      (user) => {
        if(user == null){
          console.log("Kullanıcı bulunamadı");
        }
        else{
          this.user = user;
        }
      }
    );

    this.eventService.getEvents().subscribe(
      (response) => {
        response.forEach((event) => {
          if(this.user){
            if(event.status == "private" && event.userId == parseInt(this.user.id)){
              this.PrivatecalendarEvents.push({
                title: event.title,
                date: event.date,
                userId: event.userId
              })
              console.log(this.PrivatecalendarEvents);
            }
            if(event.status == "public"){
              this.PubliccalendarEvents.push({
                title: event.title,
                date: event.date,
                userId: event.userId
              })
              console.log(this.PubliccalendarEvents);
            }
          }
        });
        this.PubliccalendarEvents.push(...this.PrivatecalendarEvents);
        this.calendarOptions.events = this.PubliccalendarEvents;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/home']);
  }

  
}
