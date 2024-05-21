import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NoteModel } from 'src/models/notesModel';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private url : string;
  constructor(private http:HttpClient) { 
    this.url = "http://localhost:8080/notes";
  }

  public getNotes(){
    return this.http.get<NoteModel[]>(`${this.url}/getAll`);
  }

  public saveNotes(data:NoteModel){
    return this.http.post<NoteModel>(`${this.url}/create`, data);
  }

  public delete(title:string){
    return this.http.delete(`${this.url}/deleteNote/${title}`);
  }

}
