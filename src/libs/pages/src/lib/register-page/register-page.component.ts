import { Component } from '@angular/core';
import { FormGroup ,FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserServiceService } from 'src/services/user-service.service';

@Component({
  selector: 'lib-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  constructor(
    private userService:UserServiceService,
    private formBuilder:FormBuilder,
    private router:Router
  ) { }




onSubmit(form:NgForm){
    this.userService.register(form.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    this.router.navigate(['/login']);
  }
}
