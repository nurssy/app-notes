import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NoteModel } from 'src/models/notesModel';
import { NoteService } from 'src/services/note-services.service';
import { AddNoteModalComponent } from './add-note-modal/add-note-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-add-note-page',
  templateUrl: './add-note-page.component.html',
  styleUrls: ['./add-note-page.component.css']
})
export class AddNotePageComponent {
  notes:NoteModel[] = [];

  
  constructor(
    private noteService: NoteService,
    private dialog: MatDialog,
    private router: Router
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

  isMenuVisible = false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  deleteNote(title:string) {
    this.noteService.delete(title).subscribe(
      (response) => {
        console.log("silme başarılı" + response);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/addNote']);
      });
      },
      (error) => {
        console.log(error);
      }
    );
    this.dialog.closeAll();
  }

  updateNote(title:string){

    this.dialog.open(AddNoteModalComponent , {
      width: '800px',
      height: '500px',
      data: this.notes.find(note => note.title === title)
    }
    )
  
  }

}
