import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { ApiProduction } from './api.production';
import { ApiAppManage } from './api.appManage';
import { ApiQuality } from './api.quality';
import { ApiHumanResource } from './api.humanresource';
import { ApiApprovalManagement } from './api.approvalMgmt';
import { ApiSales } from './api.sales';
import { ApiStore } from './api.store';
import { Account } from './api.account';
import { ApiSecurityManagement } from './api.securityMgmt';
import { Employee } from '../erp/human-resource/models';
import { ApiPpcmm } from './api.ppcmm';
import { ApiIiot} from './api.iiot';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:15749/api/';
  // private baseUrl = 'http://192.168.1.100/SIH/DEV/BE/api/';
  // private baseUrl = 'http://122.166.155.219/SIH/DEV/BE/api/';
  // private baseUrl = 'http://182.75.179.211/BE/api/';
  // private baseUrl = 'http://10.130.10.28/BE/api/';
  // private baseUrl = 'http://10.130.10.111/BE/api/';
  // private baseUrl = 'http://10.130.10.100/BE/api/';
  // private baseUrl = 'http://192.168.1.53/BE/api/';
  // private baseUrl = 'http://localhost/BE/api/';
  private appSecurity = this.baseUrl + 'appsecurity/';
  private humanResource: string = this.baseUrl + 'humanresource/';


  public AppManage: ApiAppManage = new ApiAppManage(this.baseUrl, this.http, this.authService);
  public Production: ApiProduction = new ApiProduction(this.baseUrl, this.http, this.authService);
  public Quality: ApiQuality = new ApiQuality(this.baseUrl, this.http, this.authService);
  public HumanResource: ApiHumanResource = new ApiHumanResource(this.baseUrl, this.http, this.authService);
  public ApprovalMgmt: ApiApprovalManagement = new ApiApprovalManagement(this.baseUrl, this.http, this.authService);
  public Account: Account = new Account(this.baseUrl, this.http, this.authService);
  public SecurityMgmt: ApiSecurityManagement = new ApiSecurityManagement(this.baseUrl, this.http, this.authService);
  public Sales: ApiSales = new ApiSales(this.baseUrl, this.http, this.authService);
  public Store: ApiStore = new ApiStore(this.baseUrl, this.http, this.authService);
  public Ppcmm: ApiPpcmm = new ApiPpcmm(this.baseUrl, this.http, this.authService);
  public Iiot: ApiIiot = new ApiIiot(this.baseUrl, this.http, this.authService);
  PpcMmReports: any;


  constructor(private http: HttpClient,
    private authService: AuthenticationService) { }

   downloadFileAsnReport(data, filename='data') {
    let csvData = this.ConvertToCSVAsn(data, ['PO/SA Number','Item Sr No','Part No.','ASN Quantity','Invoice No','Invoice Date (dd.mm.yyyy)','Invoice Amount','Excise Amount','LR NO','LR Date (dd.mm.yyyy)','Vehicle NO','Material Base Price']);
    console.log(csvData)
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
        dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", filename + ".csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }
  ConvertToCSVAsn(objArray, headerList) {
  let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
  console.log("(&^%$",objArray)
  let str = '';
  let row = '';

  for (let index in headerList) {
      row += headerList[index] + ',';
  }
  row = row.slice(0, -1);
  str += row + '\r\n';
  for (let i = 0; i < array.length; i++) {
      let line = '';
      for (let index in headerList) {
         let head = headerList[index];
          line +=array[i][head] +',';
      }
      str += line + '\r\n';
  }
  return str;
  }

  //App Security
  Login(userId: string, passWord: string) {
    console.log(userId, passWord);
    const param = new HttpParams().set('userId', userId).set('passWord', passWord);
    return this.http.post(this.appSecurity + 'login', null, { params: param });
  }
  PasswordReset(userId: string) {
    const param = new HttpParams().set('userId', userId).set('appUserId', this.authService.UserID());
    return this.http.post(this.appSecurity + 'PasswordReset', null, { params: param });
  }

  PasswordChange(userId: string, oldPassword: string, newPassword: string) {
    const param = new HttpParams().set('userId', userId).set('oldPassword', oldPassword)
      .set('newPassword', newPassword).set('appUserId', this.authService.UserID());
    return this.http.post(this.appSecurity + 'PasswordReset', null, { params: param });
  }

  ResetForgotPassword(newPassword: string, reEnterNewPassword: string, userId: string){
    const param = new HttpParams().set("newPassword", newPassword).set("reEnterNewPassword", reEnterNewPassword)
    .set("userId", userId);
    return this.http.post(this.appSecurity + 'ResetForgotPassword', null, {params: param})
  }

  EnableDisable(userId: string, disable: boolean) {
    const param = new HttpParams().set('userId', userId).set('disable', disable.toString())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.appSecurity + 'EnableDisable', { params: param });
  }

  UpdateEmployeeInfo(record: Employee) {
    record.AppUserId = this.authService.UserID();
    record.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'UpdateEmployeeInfo', record);
  }

  SendEmail(userId: string, emailId: string) {
    const param = new HttpParams().set('userId', userId).set('emailId', emailId)
    .set('appUserId', this.authService.UserID());
    return this.http.post(this.appSecurity + 'SendEmail', null, { params: param});
  }
  SendOtp(userId: string, PhNo: string) {
    const param = new HttpParams().set('userId', userId).set('PhNo', PhNo)
    .set('appUserId', this.authService.UserID());
    return this.http.post(this.appSecurity + 'SendOtpSms', null, { params: param});
  }
  GetEmpPhNo(userId: string) {
    const param = new HttpParams().set('userId', userId)
    .set('appUserId', this.authService.UserID());
    return this.http.get(this.appSecurity + 'GetEmpPhNo', { params: param});
  }


  VerifyOtp(userId: string, Otp: string){
    const param = new HttpParams().set('userId', userId).set('otp', Otp);
    return this.http.post(this.appSecurity + 'VerifyOtp', null, {params: param} );
  }

  downloadFile(data, filename='data') {
    let csvData = this.ConvertToCSV(data, ['ID','TimeStamp','Shift','OperatorName','MachineID','Operation','Model','IdentificationNo','Status','CycleTime']);
    console.log(csvData)
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
        dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", filename + ".csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
}
ConvertToCSV(objArray, headerList) {
     let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
     console.log("(&^%$",objArray)
     let str = '';
     let row = 'S.No,';

     for (let index in headerList) {
         row += headerList[index] + ',';
     }
     row = row.slice(0, -1);
     str += row + '\r\n';
     for (let i = 0; i < array.length; i++) {
         let line = (i+1)+'';
         for (let index in headerList) {
            let head = headerList[index];

             line += ',' + array[i][head];
         }
         str += line + '\r\n';
     }
     return str;
 }
 downloadFileIdeltime(data, filename='data') {
  let csvData = this.ConvertToCSVIdeltime(data, ['ID','TimeStamp','Shift','MachineID','OperatorName','ReasonForIdle','IdelMin']);
  console.log(csvData)
  let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
  let dwldLink = document.createElement("a");
  let url = URL.createObjectURL(blob);
  let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
  if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute("target", "_blank");
  }
  dwldLink.setAttribute("href", url);
  dwldLink.setAttribute("download", filename + ".csv");
  dwldLink.style.visibility = "hidden";
  document.body.appendChild(dwldLink);
  dwldLink.click();
  document.body.removeChild(dwldLink);
}
ConvertToCSVIdeltime(objArray, headerList) {
let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
console.log("(&^%$",objArray)
let str = '';
let row = 'S.No,';

for (let index in headerList) {
    row += headerList[index] + ',';
}
row = row.slice(0, -1);
str += row + '\r\n';
for (let i = 0; i < array.length; i++) {
    let line = (i+1)+'';
    for (let index in headerList) {
       let head = headerList[index];

        line += ',' + array[i][head];
    }
    str += line + '\r\n';
}
return str;
}
downloadFileIEnergyConsumed(data, filename='data') {
  let csvData = this.ConvertToCSVEnergyConsumed(data, ['ID','TimeStamp','Shift','MachineID','PredefinedTarget','ProductionEnergey','LossOfEnergy','Total']);
  console.log(csvData)
  let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
  let dwldLink = document.createElement("a");
  let url = URL.createObjectURL(blob);
  let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
  if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute("target", "_blank");
  }
  dwldLink.setAttribute("href", url);
  dwldLink.setAttribute("download", filename + ".csv");
  dwldLink.style.visibility = "hidden";
  document.body.appendChild(dwldLink);
  dwldLink.click();
  document.body.removeChild(dwldLink);
}
ConvertToCSVEnergyConsumed(objArray, headerList) {
let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
console.log("(&^%$",objArray)
let str = '';
let row = 'S.No,';

for (let index in headerList) {
    row += headerList[index] + ',';
}
row = row.slice(0, -1);
str += row + '\r\n';
for (let i = 0; i < array.length; i++) {
    let line = (i+1)+'';
    for (let index in headerList) {
       let head = headerList[index];

        line += ',' + array[i][head];
    }
    str += line + '\r\n';
}
return str;
}
downloadFileAlarmCount(data, filename='data') {
  let csvData = this.ConvertToCSVAlarmCount(data, ['ID','TimeStamp','Shift','MachineID','OperatorName','Alarm',]);
  console.log(csvData)
  let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
  let dwldLink = document.createElement("a");
  let url = URL.createObjectURL(blob);
  let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
  if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute("target", "_blank");
  }
  dwldLink.setAttribute("href", url);
  dwldLink.setAttribute("download", filename + ".csv");
  dwldLink.style.visibility = "hidden";
  document.body.appendChild(dwldLink);
  dwldLink.click();
  document.body.removeChild(dwldLink);
}
ConvertToCSVAlarmCount(objArray, headerList) {
let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
console.log("(&^%$",objArray)
let str = '';
let row = 'S.No,';

for (let index in headerList) {
    row += headerList[index] + ',';
}
row = row.slice(0, -1);
str += row + '\r\n';
for (let i = 0; i < array.length; i++) {
    let line = (i+1)+'';
    for (let index in headerList) {
       let head = headerList[index];

        line += ',' + array[i][head];
    }
    str += line + '\r\n';
}
return str;
}
downloadFileNCMachine(data, filename='data') {
  let csvData = this.ConvertToCSVNcMachine(data, ['ID','TimeStamp','Shift','MachineID','OperatorName','Model','Operation','Nonconformance','Action']);
  console.log(csvData)
  let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
  let dwldLink = document.createElement("a");
  let url = URL.createObjectURL(blob);
  let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
  if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute("target", "_blank");
  }
  dwldLink.setAttribute("href", url);
  dwldLink.setAttribute("download", filename + ".csv");
  dwldLink.style.visibility = "hidden";
  document.body.appendChild(dwldLink);
  dwldLink.click();
  document.body.removeChild(dwldLink);
}
ConvertToCSVNcMachine(objArray, headerList) {
let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
console.log("(&^%$",objArray)
let str = '';
let row = 'S.No,';

for (let index in headerList) {
    row += headerList[index] + ',';
}
row = row.slice(0, -1);
str += row + '\r\n';
for (let i = 0; i < array.length; i++) {
    let line = (i+1)+'';
    for (let index in headerList) {
       let head = headerList[index];

        line += ',' + array[i][head];
    }
    str += line + '\r\n';
}
return str;
}
downloadProductionMachine(data, filename='data') {
  let csvData = this.ConvertToCSVProdMachine(data, ['ID','Shift','TimeStamp','MachineID','OperatorName','Model','Operation','Status','non conformance']);
  console.log(csvData)
  let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
  let dwldLink = document.createElement("a");
  let url = URL.createObjectURL(blob);
  let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
  if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute("target", "_blank");
  }
  dwldLink.setAttribute("href", url);
  dwldLink.setAttribute("download", filename + ".csv");
  dwldLink.style.visibility = "hidden";
  document.body.appendChild(dwldLink);
  dwldLink.click();
  document.body.removeChild(dwldLink);
}
ConvertToCSVProdMachine(objArray, headerList) {
let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
console.log("(&^%$",objArray)
let str = '';
let row = 'S.No,';

for (let index in headerList) {
    row += headerList[index] + ',';
}
row = row.slice(0, -1);
str += row + '\r\n';
for (let i = 0; i < array.length; i++) {
    let line = (i+1)+'';
    for (let index in headerList) {
       let head = headerList[index];

        line += ',' + array[i][head];
    }
    str += line + '\r\n';
}
return str;
}
}

export class RequestObject {
  public ConnName: string;
  public AppUserID: string;
  public Data: any;
}

