import { HttpClient, HttpParams, HttpHandler, HttpHeaders } from '@angular/common/http';
import { AlarmReasons } from 'src/app/erp/iiot/models';
import { AuthenticationService } from './authentication.service';

export class ApiIiot {

  constructor(private baseUrl: string, private http: HttpClient, private authService: AuthenticationService) { }

  private apiPath: string = this.baseUrl + 'Iiot/';

  AlarmReasonsAddUpdate(record: AlarmReasons) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'AlarmReasonsAddUpdate', record);
    }
  }
  AlarmReasonsList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'AlarmReasonsList', { params: param });
  }
  AlarmReasonsDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'AlarmReasonsDelete', { params: param });
  }
}



