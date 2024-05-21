import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NoteModel } from 'src/models/notesModel';
import { NoteService } from 'src/services/note-services.service';

@Component({
  selector: 'lib-note-details-modal',
  templateUrl: './note-details-modal.component.html',
  styleUrls: ['./note-details-modal.component.css'],
})
export class NoteDetailsModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: NoteModel,
    private noteService: NoteService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  deleteNote(title:string) {
    this.noteService.delete(title).subscribe(
      (response) => {
        console.log("silme başarılı" + response);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/allNotes']);
      });
      },
      (error) => {
        console.log(error);
      }
    );
    this.dialog.closeAll();
  }
}
