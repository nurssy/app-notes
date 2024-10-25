import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventInput } from '@fullcalendar/core';
import { EventModel } from 'src/models/eventModel';
import { User } from 'src/models/user';
import { EventsService } from 'src/services/events.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'lib-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent implements OnInit{
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: EventModel,
    private eventService: EventsService,
    private userService: UserService
  ) {}

  user:User;
  event: EventModel;
  ngOnInit(): void {
    this.event = this.data;
    this.userService.findById(this.data.userId).subscribe((response) => {
      this.user = response;
    }
    );
  }
}
