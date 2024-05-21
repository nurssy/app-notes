import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { LoginModel } from 'src/models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private url : string;

  constructor(private http:HttpClient) { 
    this.url = "http://localhost:8080/api";
  }

  public register(veri:User){

    return this.http.post<User>(`${this.url}/save`, veri);
  }

  public login(veri:LoginModel){

    return this.http.post<LoginModel>(`${this.url}/login`, veri);
  }

  
}
