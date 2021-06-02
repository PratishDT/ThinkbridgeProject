import { HttpClient, HttpParams} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Bank, GeneralPostingGroup, GLAccount, GSTGroup, GSTSetUp, HSNSACCode } from 'src/app/erp/account/models';

export class Account {

  constructor(private baseUrl: string, private http: HttpClient, private authService: AuthenticationService) {}
  private apiPath = this.baseUrl + 'Account/';

  //#region Bank Management
  BankList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'BankList', {params: param});
  }
  BankGet(id: number) {
    const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'BankGet', {params: param});
  }
  BankAddUpdate(record: Bank) {
    if (record !== undefined && record !== null) {
    record.AppUserId = this.authService.UserID();
    record.ConnName = this.authService.CompConn();
    return this.http.post(this.apiPath + 'BankAddUpdate', record);
    }
  }
  BankDelete(id: number) {
    const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'BankDelete', {params: param});
  }
  //#endregion Bank Management

  //#region GLAccount Management
  GLAccountList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GLAccountList', {params: param});
  }
  GLAccountGet(id: number) {
    const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GLAccountGet', {params: param});
  }
  GLAccountAddUpdate(record: GLAccount) {
    if (record !== undefined && record !== null) {
    record.AppUserId = this.authService.UserID();
    record.ConnName = this.authService.CompConn();
    return this.http.post(this.apiPath + 'GLAccountAddUpdate', record);
    }
  }
  GLAccountDelete(id: number) {
    const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GLAccountDelete', {params: param});
  }
  //#endregion GLAccount Management

  //#region GeneralPostingGroup Management
  GeneralPostingGroupList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GeneralPostingGroupList', {params: param});
  }
  GeneralPostingGroupCount() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GeneralPostingGroupCount', {params: param});
  }
  GeneralPostingGroupGet(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GeneralPostingGroupGet', {params: param});
  }
  GeneralPostingGroupDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GeneralPostingGroupDelete', {params: param});
  }
  GeneralPostingGroupAddUpdate(record: GeneralPostingGroup) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'GeneralPostingGroupAddUpdate', record);
    }
  }
  //#endregion GeneralPostingGroup Management
  //#region GSTGroup Management
  GSTGroupList(date) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
    .set('date', date.toLocaleDateString('en-US'))
    .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GSTGroupList', {params: param});
  }
  GSTGroupCount() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GSTGroupCount', {params: param});
  }
  GSTGroupGet(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GSTGroupGet', {params: param});
  }
  GSTGroupDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GSTGroupDelete', {params: param});
  }
  GSTGroupAddUpdate(record: GSTGroup) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'GSTGroupAddUpdate', record);
    }
  }
  //#endregion GSTGroup Management
  //#region GSTSetUp Management
  GSTSetUpList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GSTSetUpList', {params: param});
  }
  GSTSetUpCount() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GSTSetUpCount', {params: param});
  }
  GSTSetUpGet(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GSTSetUpGet', {params: param});
  }
  GSTSetUpDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GSTSetUpDelete', {params: param});
  }
  GSTSetUpAddUpdate(record: GSTSetUp) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'GSTSetUpAddUpdate', record);
    }
  }
  //#endregion GSTSetUp Management

  //#region HSNSACCode Management
  HSNSACCodeList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'HSNSACCodeList', {params: param});
  }
  HSNSACCodeCount() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'HSNSACCodeCount', {params: param});
  }
  HSNSACCodeGet(id: number) {
    const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'HSNSACCodeGet', {params: param});
  }
  HSNSACCodeDelete(id: number) {
    const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'HSNSACCodeDelete', {params: param});
  }
  HSNSACCodeAddUpdate(record: HSNSACCode) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'HSNSACCodeAddUpdate', record);
    }
  }
  //#endregion HSNSACCode Management

}
