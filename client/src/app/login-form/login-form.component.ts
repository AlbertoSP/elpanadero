import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username:string;
  password:string;
  error:string;
  constructor(public session:SessionService ,private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.session.login(this.username, this.password).subscribe(data => {
      console.log(data);
      this.router.navigate(["/list", data._id]);
    }, err => (this.error = err));
  }

  signup(){
    this.session.signup(this.username,this.password)
    .catch(e => this.error = e)
    .subscribe();
  }

  logout(){
    this.session.logout()
    .catch(e => this.error = e)
    .subscribe();
  }

}