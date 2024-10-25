import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NoteModel } from 'src/models/notesModel';
import { User } from 'src/models/user';

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

  createNote(note: NoteModel, id: string) {
    return this.http.post<any>(`${this.url}/create/${id}`, note);
  }

  public delete(id:string, title:string){
    return this.http.delete(`${this.url}/delete/${id}/${title}`);
  }

  public updateNote(id:string , title:string, data:NoteModel){
    return this.http.put(`${this.url}/update/${id}/${title}`, data);
  }

  public getNotByUserId(id:string){
    return this.http.get<NoteModel[]>(`${this.url}/getByUser/${id}`);
  }

}
