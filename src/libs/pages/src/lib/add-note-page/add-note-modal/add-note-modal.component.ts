import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NoteModel } from 'src/models/notesModel';
import { User } from 'src/models/user';
import { NoteService } from 'src/services/note-services.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'lib-add-note-modal',
  templateUrl: './add-note-modal.component.html',
  styleUrls: ['./add-note-modal.component.css']
})
export class AddNoteModalComponent implements OnInit{

  curenntNote:NoteModel;
  user:User;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:NoteModel,
    private noteService: NoteService,
    private dialog: MatDialog,
    private router:Router,
    private userService:UserService
  ) { }


  ngOnInit(): void {
    this.curenntNote = this.data;
    console.log(this.curenntNote);
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
  }

  
  notEkle(data:NgForm){
    if(this.user){
      this.noteService.createNote(data.value,this.user.id).subscribe(
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
    
  }

  noteUpdate(data:NgForm){
    console.log(this.curenntNote.title);
    this.noteService.updateNote(this.user.id,this.curenntNote.title,data.value).subscribe(
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
