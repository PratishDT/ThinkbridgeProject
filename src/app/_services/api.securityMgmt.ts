import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { SecurityDevice, RouteMap, Person, Location, RFID, GateInward, GatePassRecord } from 'src/app/erp/security-management/models';

export class ApiSecurityManagement {
  constructor(private baseUrl: string, private http: HttpClient, private authService: AuthenticationService) {
  }

  private apiPath: string = this.baseUrl + 'SecurityMgmt/';

  //#region Device Management
  DeviceList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'DeviceList', { params: param });
  }
  DeviceGet(id: number) {
    const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'DeviceGet', { params: param });
  }
  DeviceAddUpdate(record: SecurityDevice) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'DeviceAddUpdate', record);
    }
  }
  DeviceSyncData(id: number) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn())
      .set('id', id.toString());
    return this.http.get(this.apiPath + 'DeviceSyncData', { params: param });
  }
  //#endregion Device Management

  //#region RFID Management
  RFIDList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'RFIDList', { params: param });
  }
  RFIDGet(id: number) {
    const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'RFIDGet', { params: param });
  }
  RFIDAddUpdate(record: RFID) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      return this.http.post(this.apiPath + 'RFIDAddUpdate', record);
    }
  }
  //#endregion RFID Management

  //#region Location Management
  LocationList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'LocationList', { params: param });
  }
  LocationGet(id: number) {
    const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'LocationGet', { params: param });
  }
  LocationAddUpdate(record: Location) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      return this.http.post(this.apiPath + 'LocationAddUpdate', record);
    }
  }
  //#endregion Location Management

  //#region Person Management
  PersonList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'PersonList', { params: param });
  }
  PersonGet(id: number) {
    const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'PersonGet', { params: param });
  }
  PersonAddUpdate(record: Person) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      return this.http.post(this.apiPath + 'PersonAddUpdate', record);
    }
  }
  //#endregion Person Management

  //#region RouteMap Management
  RouteMapList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'RouteMapList', { params: param });
  }
  RouteMapGet(id: number) {
    const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'RouteMapGet', { params: param });
  }
  RouteMapAddUpdate(record: RouteMap) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      return this.http.post(this.apiPath + 'RouteMapAddUpdate', record);
    }
  }

  //#endregion RouteMap Management
  GatePassList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'GatePassList', { params: param });
  }
  GatePassAddUpdate(record: GateInward) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'GatePassAddUpdate', record);
    }
  }
  GatePassDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'GatePassDelete', { params: param });
  }
  GetNextGatePassCode(date: Date) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('date', date.toLocaleDateString('en-US'))
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GetNextGatePassCode', { params: param });
  }

  GetEmployeeDEP(DepartmentNo: number) {
    const param = new HttpParams().set('DepartmentNo', DepartmentNo.toString())
      .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'GetEmployeeDEP', { params: param });
  }
  SupCusList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'SupCusList', { params: param });
  }

  GatePassGet(id: number) {
    const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'GatePassGet', { params: param });
  }
  NotifyGatePass(id, authorize: boolean) {
    const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
      .set('authorize', authorize.toString()).set('connName', this.authService.CompConn());
    return this.http.post(this.apiPath + 'NotifyGatePass', null, { params: param });
  }
  AuthoriseGatePass(record: GateInward) {
    record.ConnName = this.authService.CompConn();
    record.AppUserId = this.authService.EmpCode();
    return this.http.post(this.apiPath + 'AuthoriseGatePass', record);
  }
  MarkOutMatGatePass(id) {
    const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.post(this.apiPath + 'MarkOutMatGatePass', null, { params: param });
  }
  MarkInMatGatePass(id) {
    const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.post(this.apiPath + 'MarkInMatGatePass', null, { params: param });
  }
  MarkReturnMatGatePass(id) {
    const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.post(this.apiPath + 'MarkReturnMatGatePass', null, {params: param});
  }

}
