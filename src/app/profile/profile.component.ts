import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private router: Router) {
    this.getFromCookies();
  }

  ngOnInit(): void {
  }

  getFromCookies(): void {
    if(document.cookie.includes("userObject=")) {
      const cookiesString: any = document.cookie.split("userObject=").pop();
      this.user = JSON.parse(cookiesString);
    }
  }

  logOut(): void {
    document.cookie = document.cookie.split("userObject=")[0];
    this.router.navigate(['']);
  }
}
