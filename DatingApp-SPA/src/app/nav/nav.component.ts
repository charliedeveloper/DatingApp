import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  loginUser = 'Charlie';

  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
     this.authService.login(this.model).subscribe(next => {
      console.log(next);
      this.loginUser = next.unique_name;
       this.alertify.success('Login successfully');
     }, error => {
       this.alertify.error(error);
     });
  }

  loggedIn() {
   return this.authService.loggedIn();
  }
logout() {
  localStorage.removeItem('token');
   this.alertify.message('Successfully logout!');
}


}
