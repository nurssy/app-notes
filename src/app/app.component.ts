import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app-notes';
  islogin:boolean = false;
  user:User;

  constructor( private userService:UserService,private router:Router) {
  }


  ngOnInit(): void {
    let user:User = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser") as string) : null;
    this.user= user;
    this.userService.user.next(user);
    this.userService.user.subscribe(
      (user) => {
        if(user == null){
          this.islogin = false;
        }
        else{
          this.islogin = true;
        }
      }
    );
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/home']);
  }
}
