import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { NgForm } from '@angular/forms';
import { Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: any[] = [];
  username: string = '';
  userNotFound: boolean = false;

  constructor(private authService: AuthService,  private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  onSubmit(form: NgForm) {
    if(this.users){
      this.users.forEach((user) =>{
        if(form.value.username.toLowerCase() === user.username.toLowerCase()){
          this.userNotFound = false;
          document.cookie = `userObject=${JSON.stringify(user)}`
          this.router.navigate(['profile']);
        } else {
          this.username = '';
          this.userNotFound = true;
        }
      })
    }
  }

  getUsers(): void {
    this.authService.getUsers().subscribe((response) => {
      if (response){
        this.users = response;
      }
    });
  }
}
