import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserPageComponent } from './user-page/user-page.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AddNotePageComponent } from './add-note-page/add-note-page.component';
import { AddNoteModalComponent } from './add-note-page/add-note-modal/add-note-modal.component';
import { MatMenuModule } from '@angular/material/menu';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarModalComponent } from './user-page/calendar-modal/calendar-modal.component';
import { EventModalComponent } from './user-page/event-modal/event-modal.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    UserPageComponent,
    AddNotePageComponent,
    AddNoteModalComponent,
    CalendarModalComponent,
    EventModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
    FullCalendarModule
  ],
  exports: [
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
  ],
})
export class PagesModule { }
