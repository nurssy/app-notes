import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EventInput } from '@fullcalendar/core';
import { User } from 'src/models/user';
import { EventsService } from 'src/services/events.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'lib-calendar-modal',
  templateUrl: './calendar-modal.component.html',
  styleUrls: ['./calendar-modal.component.css'],
})
export class CalendarModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: EventInput,
    private eventService: EventsService,
    private userService: UserService,
    private dialogRef: MatDialog
  ) {}

  user: User;
  ngOnInit(): void {
    this.userService.user.subscribe((user) => {
      if (user == null) {
        console.log('Kullanıcı bulunamadı');
      } else {
        this.user = user;
      }
    });
    console.log(this.data);
  }
  createEvent(form: NgForm) {
    form.value.date = this.data.date;
    form.value.userId = this.user.id;
    console.log(form.value);
    this.eventService.createEvent(form.value).subscribe(
      (response) => {
        console.log(response);
        this.dialogRef.closeAll();
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
