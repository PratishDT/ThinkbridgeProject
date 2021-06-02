import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:15749/api/';

  private appSecurity = this.baseUrl + 'appsecurity/';
  private humanResource: string = this.baseUrl + 'humanresource/';



  PpcMmReports: any;


  constructor(private http: HttpClient,
    private authService: AuthenticationService) { }
  //App Security
  Login(userId: string, passWord: string) {
    console.log(userId, passWord);
    const param = new HttpParams().set('userId', userId).set('passWord', passWord);
    return this.http.post(this.appSecurity + 'login', null, { params: param });
  }
}

export class RequestObject {
  public ConnName: string;
  public AppUserID: string;
  public Data: any;
}

