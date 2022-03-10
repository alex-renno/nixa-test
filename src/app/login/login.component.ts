import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: any[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  getUsers(): void {
    this.authService.getUsers().subscribe((response) => {
      if (response){
        this.users = response;
        console.log(this.users);
      }
    });
  }
}
