import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/libs/pages/src/lib/home-page/home-page.component';
import { LoginPageComponent } from 'src/libs/pages/src/lib/login-page/login-page.component';
import { RegisterPageComponent } from 'src/libs/pages/src/lib/register-page/register-page.component';
import { UserPageComponent } from 'src/libs/pages/src/lib/user-page/user-page.component';
import { AddNotePageComponent } from 'src/libs/pages/src/lib/add-note-page/add-note-page.component';



const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  {path:'userPage' , component:UserPageComponent},
  { path: 'addNote', component: AddNotePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
