import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../_services/api.service';
import { AuthenticationService } from '../../../_services/authentication.service';
import { Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { unescapeIdentifier } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private api: ApiService,
    private router: Router, private loadBar: LoadingBarService, private authService: AuthenticationService) { }

  loading: boolean;
  userId: string;
  password: string;
  userIdFocus: boolean;
  passwordFocus: boolean;
  currentIndex: number;
  isUserIdNotExists: boolean;
  ispasswordNotExists: boolean;
  isLoaderShow: boolean = true;
  hide: boolean;
  ngOnInit() {
    this.checkIfAlreadyLogin();
    this.userIdFocus = true;
    this.currentIndex = 1;
    this.isUserIdNotExists = false;
    this.ispasswordNotExists = false;
    this.isLoaderShow = false;
  }
  focused(index) {
    this.currentIndex = index;
  }

  validateInput(event) {
    const uOk: boolean = (this.userId !== undefined && this.userId !== '');
    const pOk: boolean = (this.password !== undefined && this.password !== '');
    console.log("uOk", uOk);
    console.log("pOk", pOk);
    if (!uOk && !pOk) {
  
      setTimeout(() => {
        this.currentIndex = 1;
      }, 10);
    }
    else if (uOk && !pOk) {
      setTimeout(() => {
        this.currentIndex = 2;
      }, 10);
    }
    else if (!uOk && pOk) {
      setTimeout(() => {
        this.currentIndex = 1;
      }, 10);
    }
    else {
      this.login();
    }

  }

  checkIfAlreadyLogin() {
    const curUser = this.authService.CurrentUser();
    if (curUser !== undefined && curUser !== null) {
      this.router.navigate(this.authService.UserHomePage());
    }
  }

  forgot() {
    this.router.navigate(['/forgot']);
  }

  login() {
    
      this.loading = true;
      this.loadBar.start();
      this.api.Login(this.userId, this.password)
        .subscribe(data => {
          console.log(data);
          const user = data['User'];
          const err = data['Error'];
          if (err !== null && err !== undefined && err !== "") {
            this.loading = false;
            this.loadBar.stop();
          } 
        }, error => {
          console.log("error", error);
          this.loading = false;
          this.loadBar.stop();
        });
    }
  

}
