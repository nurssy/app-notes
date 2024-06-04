import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserPageComponent } from './user-page/user-page.component';
import { CommonModule } from '@angular/common';
import { AllNotesPageComponent } from './all-notes-page/all-notes-page.component';
import { NoteDetailsModalComponent } from './all-notes-page/note-details-modal/note-details-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { AddNotePageComponent } from './add-note-page/add-note-page.component';
import { AddNoteModalComponent } from './add-note-page/add-note-modal/add-note-modal.component';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    UserPageComponent,
    AllNotesPageComponent,
    NoteDetailsModalComponent,
    AddNotePageComponent,
    AddNoteModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
  ]
})
export class PagesModule { }
