import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NoteModel } from 'src/models/notesModel';
import { NoteService } from 'src/services/note-services.service';

@Component({
  selector: 'lib-add-note-modal',
  templateUrl: './add-note-modal.component.html',
  styleUrls: ['./add-note-modal.component.css']
})
export class AddNoteModalComponent implements OnInit{

  curenntNote:NoteModel;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:NoteModel,
    private noteService: NoteService,
    private dialog: MatDialog,
    private router:Router,
  ) { }


  ngOnInit(): void {
    this.curenntNote = this.data;
  }

  
  notEkle(data:NgForm){
    console.log(data.value);
    this.noteService.saveNotes(data.value).subscribe(
      (response) => {
        this.noteService.getNotes().subscribe(data => {
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/addNote']);
        });
          this.dialog.closeAll();
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  noteUpdate(data:NgForm){
    this.noteService.updateNote(this.curenntNote.title,data.value).subscribe(
      (response) => {
        this.noteService.getNotes().subscribe(data => {
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/addNote']);
        });
        this.dialog.closeAll();
      });
    },
      (error) => {
        console.log(error);
        this.noteService.getNotes().subscribe(data => {
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/addNote']);
        });
        this.dialog.closeAll();
      });
      }
    );
  }

}
