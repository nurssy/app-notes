import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { LoginModel } from 'src/models/loginModel';
import { BehaviorSubject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url : string;

  user = new BehaviorSubject<User | null>(null);

  constructor(private http:HttpClient) { 
    this.url = "http://localhost:8080/api";
  }

  public register(veri:User){

    return this.http.post<User>(`${this.url}/save`, veri);
  }

  public login(veri:User){

    return this.http.post<User>(`${this.url}/login`, veri).pipe(
      map((response: User) => {
        this.user.next(response);
        return response; // Ensure the response is returned
      }),
      tap((user: User) => {
        // Save user information to local storage
        localStorage.setItem('currentUser', JSON.stringify(user));
      })
    );
  }

  public findById(id:number){
    return this.http.get<User>(`${this.url}/findById/${id}`);
  }

  public logout(){
    this.user.next(null);
    localStorage.removeItem('currentUser');
  }

  public isLogin(){
    return localStorage.getItem('currentUser') ? true : false;
  }
  
}
