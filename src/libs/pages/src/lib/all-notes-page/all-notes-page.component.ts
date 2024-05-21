import { Component, OnInit } from '@angular/core';
import { NoteModel } from 'src/models/notesModel';
import { NoteService } from 'src/services/note-services.service';

import { NoteDetailsModalComponent } from './note-details-modal/note-details-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'lib-all-notes-page',
  templateUrl: './all-notes-page.component.html',
  styleUrls: ['./all-notes-page.component.css']
})
export class AllNotesPageComponent implements OnInit{
  
  notes:NoteModel[] = [];

  constructor(
    private noteService:NoteService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe(data => {
      this.notes = data;
      console.log(this.notes);
    });
  }

  

  openDialog(title:string){
    this.dialog.open(NoteDetailsModalComponent , {
      width: '800px',
      height: '500px',
      data: this.notes.find(note => note.title === title)
    });
  }

  
}
