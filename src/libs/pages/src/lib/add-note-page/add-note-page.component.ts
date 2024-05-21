import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NoteModel } from 'src/models/notesModel';
import { NoteService } from 'src/services/note-services.service';
import { AddNoteModalComponent } from './add-note-modal/add-note-modal.component';

@Component({
  selector: 'lib-add-note-page',
  templateUrl: './add-note-page.component.html',
  styleUrls: ['./add-note-page.component.css']
})
export class AddNotePageComponent {
  notes:NoteModel[] = [];

  
  constructor(
    private noteService: NoteService,
    private dialog: MatDialog
  ) { }


  ngOnInit(): void {
    this.noteService.getNotes().subscribe(data => {
      this.notes = data;
      console.log(this.notes);
    });
  }
  
  onSubmit(data:NgForm){
    console.log(data.value);
    this.noteService.saveNotes(data.value).subscribe(
      (response) => {
        this.noteService.getNotes().subscribe(data => {
          this.notes = data;
          console.log(this.notes);
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openModal(){
    this.dialog.open(AddNoteModalComponent , {
      width: '800px',
      height: '500px',
    });
  }
}
