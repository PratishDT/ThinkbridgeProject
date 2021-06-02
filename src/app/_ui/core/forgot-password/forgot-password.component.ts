import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { NotificationService } from 'src/app/_services/notification.service';
import { ApiService } from 'src/app/_services/api.service';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private router: Router, private notify: NotificationService, private api: ApiService) {
  }
  callotp: boolean;
  mailId: string;
  currentIndex: number;
  isLoaderShow: boolean = false;
  userId: string;
  ngOnInit() {
    this.callotp = false;
  }
  validateInput(event) {
    if (this.mailId  && !this.mailId.endsWith("netalkar.co.in")) {
      this.notify.Warn('Please enter valid Business Email Id', 'Input required');
    }
    else if(!this.userId){
      this.notify.Warn('Please enter User Id', 'Input required');
    }
    else{
      this.sendOtp();
    }
  }
  focused(index) {
    this.currentIndex = index;
  }
  sendOtp() {
    if (this.userId == undefined || this.mailId == undefined)  {
      this.notify.Warn('Please enter the details before proceeding', 'Input required');
      return;
    }
    else if (this.mailId && !this.mailId.endsWith("@netalkar.co.in")) {
      this.notify.Warn('Please enter valid Business Email Id', 'Input required');
      return;
    }
    else {
      this.isLoaderShow = true;
      this.api.SendEmail(this.userId, this.mailId)
      .subscribe(data => {
        localStorage.setItem("UserId", this.userId);
        this.isLoaderShow = false;
        this.callotp = true;
      },
      error => {
        console.log("error", error);
        this.notify.ErrorDefault();
        this.isLoaderShow = false;
      })
    }
  }
}