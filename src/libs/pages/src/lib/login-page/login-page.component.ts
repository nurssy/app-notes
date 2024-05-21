import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/services/user-service.service';

@Component({
  selector: 'lib-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(
    private userService:UserServiceService,
    private router:Router
  ) { }

onSubmit(form:NgForm){
    this.userService.login(form.value).subscribe(
      (response) => this.router.navigate(['/userPage']),
      (error) => alert("Kullanıcı bulunamadı")
    )

    this.userService.login(form.value).subscribe(
      data => {console.log(data);} ,
      error => {console.log(error)});
  }
}
