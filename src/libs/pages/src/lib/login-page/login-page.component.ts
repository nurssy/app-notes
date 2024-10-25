import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'lib-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  constructor(
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
    
    if(this.userService.isLogin()){
      this.router.navigate(['/userPage']);
    }
  }

onSubmit(form:NgForm){
    this.userService.login(form.value).subscribe(
      (response) => {
        this.router.navigate(['/userPage'])
        window.location.reload();
      },
      (error) => alert("Kullanıcı bulunamadı")
    )
  }
}
