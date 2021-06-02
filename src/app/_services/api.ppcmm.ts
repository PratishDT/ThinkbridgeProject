import { HttpClient, HttpParams, HttpHandler, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { CustomerPaymentReceipt, PaymentAdvicesReceived, preclosereport, WorkOrderListing, ExpiredChallanReport } from '../erp/ppc-mm-reports/model';

export class ApiPpcmm {

    constructor(private baseUrl: string, private http: HttpClient, private authService: AuthenticationService) { }

    private apiPath: string = this.baseUrl + 'ppcmmsales/';


    CustomerPaymentReceipt(dialogData: CustomerPaymentReceipt) {
        dialogData.AppUserId = this.authService.UserID();
        dialogData.ConnName = this.authService.CompConn();
        console.log(dialogData);
        return this.http.post(this.apiPath + 'CustomerPaymentReceipt', dialogData);
    }
    CustomerPaymantExport(request: CustomerPaymentReceipt) {
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json', }),
            // Ignore this part or  if you want full response you have
            // to explicitly give as 'boby'as http client by default give res.json()
            observe: 'response' as 'body',
            // have to explicitly give as 'blob' or 'json'
            responseType: 'blob' as 'blob'
        };
        request.ConnName = this.authService.CompConn();
        console.log(request);
        return this.http.post(this.apiPath + 'CustomerPaymantExport', request, { responseType: 'blob' as 'blob' });
    }
    PaymentAdvice(dialogData: PaymentAdvicesReceived) {
        dialogData.AppUserId = this.authService.UserID();
        dialogData.ConnName = this.authService.CompConn();
        console.log(dialogData);
        return this.http.post(this.apiPath + 'PaymentAdvice', dialogData);
    }
    PaymentAdviceExport(request: PaymentAdvicesReceived) {
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json', }),
            // Ignore this part or  if you want full response you have
            // to explicitly give as 'boby'as http client by default give res.json()
            observe: 'response' as 'body',
            // have to explicitly give as 'blob' or 'json'
            responseType: 'blob' as 'blob'
        };
        request.ConnName = this.authService.CompConn();
        console.log(request);
        return this.http.post(this.apiPath + 'PaymentAdviceExport', request, { responseType: 'blob' as 'blob' });
    }

GetTransporterDetails(category: string, custNo: string) {
        const param = new HttpParams()
            .set('custNo', custNo)
            .set('category', category)
            .set('appUserId', this.authService.UserID())
            .set('connName', this.authService.CompConn());
        return this.http.get(this.apiPath + 'GetTransporterDetails', { params: param });
    }
    ExpiredChallan(dialogData: ExpiredChallanReport) {
        dialogData.AppUserId = this.authService.UserID();
        dialogData.ConnName = this.authService.CompConn();
        console.log(dialogData);
        return this.http.post(this.apiPath + 'ExpiredChallan', dialogData);
      }
      ExpiredChallanExport(request: ExpiredChallanReport) {

        const options = {
    
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
    
          // Ignore this part or  if you want full response you have
          // to explicitly give as 'boby'as http client by default give res.json()
          observe: 'response' as 'body',
    
          // have to explicitly give as 'blob' or 'json'
          responseType: 'blob' as 'blob'
        };
        request.ConnName = this.authService.CompConn();
        console.log(request);
        return this.http.post(this.apiPath + 'ExpiredChallanExport', request, { responseType: 'blob' as 'blob' });
      }
      checkPOST(id: number, UniqueCode: string) {
        const param = new HttpParams().set('id', id.toString()).set('UniqueCode', UniqueCode)
          .set('connName', this.authService.CompConn())   
        return this.http.get(this.apiPath + 'CheckPostNumber', { params: param });
      }
     

}
