import { HttpClient, HttpParams} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Document,EmployeeDocument } from '../erp/approval-management/model';


export class ApiApprovalManagement{
    constructor(private baseUrl:string,private http:HttpClient, private authService:AuthenticationService){
    }
    private approvalMgmt:string = this.baseUrl+'approvalMgmt/';
    //#region Document

    AllDocuments(){
        let param = new HttpParams().set('connName',this.authService.CompConn()).set('appUserId',this.authService.UserID());
        return this.http.get(this.approvalMgmt+'AllDocuments',{params:param});
    }
    AddUpdateDocument(record:Document){
        if(record!==undefined && record!==null){
            record.ConnName = this.authService.CompConn();
            record.AppUserId = this.authService.UserID();
            return this.http.post(this.approvalMgmt+'AddUpdateDocument',record);
        }
    }
    DeleteDocument(id:number){
        let param = new HttpParams().set('id',id.toString()).set('connName',this.authService.CompConn()).set('appUserId',this.authService.UserID());
        return this.http.post(this.approvalMgmt+'DeleteDocument',null,{params:param});
    }

    //#endregion Document
    //#region empDocument

    AllEmployeeDocuments(){
        let param = new HttpParams().set('connName',this.authService.CompConn()).set('appUserId',this.authService.UserID());
        return this.http.get(this.approvalMgmt+'AllEmployeeDocuments',{params:param});
    }
    AddUpdateEmployeeDocument(record:EmployeeDocument){
        if(record!==undefined && record!==null){
            record.ConnName = this.authService.CompConn();
            record.AppUserId = this.authService.UserID();
            return this.http.post(this.approvalMgmt+'AddUpdateEmployeeDocument',record);
        }
    }
    DeleteEmployeeDocument(id:number){
        let param = new HttpParams().set('id',id.toString()).set('connName',this.authService.CompConn()).set('appUserId',this.authService.UserID());
        return this.http.post(this.approvalMgmt+'DeleteEmployeeDocument',null,{params:param});
    }

    //#endregion empDocument

}

