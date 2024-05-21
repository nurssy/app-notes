import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NoteModel } from 'src/models/notesModel';
import { NoteService } from 'src/services/note-services.service';

@Component({
  selector: 'lib-add-note-modal',
  templateUrl: './add-note-modal.component.html',
  styleUrls: ['./add-note-modal.component.css']
})
export class AddNoteModalComponent implements OnInit{
  
  notes:NoteModel[] = [];

  constructor(
    private noteService: NoteService,
    private dialog: MatDialog,
    private router:Router
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

}
