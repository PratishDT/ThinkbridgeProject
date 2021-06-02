import { HttpClient, HttpParams, HttpHandler, HttpHeaders} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { ResponseContentType } from '@angular/http';
import { finalize, tap } from 'rxjs/operators';
import { RequestParam } from '../erp/quality/models';
import { ProcessValidationMain } from 'src/app/erp/quality/models';

export class ApiQuality {
    constructor(private baseUrl: string, private http: HttpClient, private authService: AuthenticationService) {
    }
    private quality: string = this.baseUrl + 'quality/';
    //#region Inspection Type
    InspectionTypes() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.quality + 'InspectionTypes', {params: param});
    }
    AddInspectionType(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.quality + 'AddInspectionType', null, {params: param});
        }
    }
    UpdateInspectionType(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.quality + 'UpdateInspectionType', null, {params: param});
        }
    }
    DeleteInspectionType(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString())
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.quality + 'DeleteInspectionType', null, {params: param});
        }
    }
    //#endregion Inspection Type
    //#region  CoilAirGap
    CoilAirGaps() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.quality + 'CoilAirGaps', {params: param});
    }
    GetCoilAirGaps(machineID, modelID) {
        const param = new HttpParams().set('machineID', machineID.toString())
        .set('modelID', modelID.toString()).set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.quality + 'GetCoilAirGaps', {params: param});
    }
    AddCoilAirGap(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.quality + 'AddCoilAirGap', null, {params: param});
        }
    }
    UpdateCoilAirGap(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.quality + 'UpdateCoilAirGap', null, {params: param});
        }
    }
    DeleteCoilAirGap(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString())
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.quality + 'DeleteCoilAirGap', null, {params: param});
        }
    }
    //#endregion CoilAirGap
    //#region Quench Setting
    QuenchSettings() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.quality + 'QuenchSettings', {params: param});
    }
    GetQuenchSettings(modelID) {
        const param = new HttpParams().set('modelID', modelID.toString())
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.quality + 'GetQuenchSettings', {params: param});
    }
    AddQuenchSetting(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.quality + 'AddQuenchSetting', null, {params: param});
        }
    }
    UpdateQuenchSetting(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.quality + 'UpdateQuenchSetting', null, {params: param});
        }
    }
    AddUpdateQuenchSettings(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.quality + 'AddUpdateQuenchSettings', null, {params: param});
        }
    }
    DeleteQuenchSetting(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString())
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.quality + 'DeleteQuenchSetting', null, {params: param});
        }
    }
    //#endregion Quench Setting
    //#region Process Validation
    ProcessValidations() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.quality + 'ProcessValidations', {params: param});
    }
    GetProcessValidation(Id) {
        const param = new HttpParams().set('ID', Id).set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.quality + 'GetProcessValidation', {params: param});
    }
    AddUpdateProcessValid(record: ProcessValidationMain) {
        if (record !== undefined && record !== null) {
          // let param = new HttpParams().set('record',JSON.stringify(record))
          //.set('connName',this.authService.CompConn()).set('appUserId',this.authService.UserID());
          // return this.http.post(this.quality+'AddUpdateProcessValid',null,{params:param});
          record.ConnName = this.authService.CompConn();
          record.AppUserId = this.authService.UserID();
          return this.http.post(this.quality + 'AddUpdateProcessValid', record);
        }
    }
    DeleteProcessValid(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString())
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.quality + 'DeleteProcessValid', null, {params: param});
        }
    }
    DeleteProcessValidLine(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString())
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.quality + 'DeleteProcessValidLine', null, {params: param});
        }
    }
    //#endregion Process Validation
    //#region Power Failure
    PowerFailures() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.quality + 'PowerFailures', {params: param});
    }
    GetPowerFailSetData() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.quality + 'GetPowerFailSetData', {params: param});
    }
    AddUpdatePowerFailure(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.quality + 'AddUpdatePowerFailure', null, {params: param});
        }
    }
    DeletePowerFailure(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString())
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.quality + 'DeletePowerFailure', null, {params: param});
        }
    }
    //#endregion Power Failure
    //#region Power Failure Setting
    PowerFailureSettings() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.quality + 'PowerFailureSettings', {params: param});
    }
    AddUpdatePowerFailureSetting(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.quality + 'AddUpdatePowerFailureSetting', null, {params: param});
        }
    }
    DeletePowerFailureSetting(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString())
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.quality + 'DeletePowerFailureSetting', null, {params: param});
        }
    }
    //#endregion Power Failure Setting
    //#region Bend Observation
    BendObservations() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.quality + 'BendObservations', {params: param});
    }
    AddUpdateBendOserve(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.quality + 'AddUpdateBendOserve', null, {params: param});
        }
    }
    DeleteBendObserve(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString())
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.quality + 'DeleteBendObserve', null, {params: param});
        }
    }
    //#endregion Bend Observation
    //#region IHBendObservation
    IHBendObservations() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.quality + 'IHBendObservations', {params: param});
    }
    AddUpdateIHBendOserve(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.quality + 'AddUpdateIHBendOserve', null, {params: param});
        }
    }
    DeleteIHBendObserve(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString())
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.quality + 'DeleteIHBendObserve', null, {params: param});
        }
    }
    //#endregion Bend Observation


    //#region  Induction Hardening
    IHInspExist(machineID: number, workerID: number, modelID: number, shift: number) {
        if (machineID !== 0 && workerID !== 0 && modelID !== 0) {
            const param = new HttpParams().set('machine', machineID.toString())
            .set('product', modelID.toString()).set('worker', workerID.toString())
            .set('shift', shift.toString()).set('connName', this.authService.CompConn())
            .set('appUserId', this.authService.UserID());
            return this.http.get(this.quality + 'IHInspExist', {params: param});
        }
    }
    AddUpdateIHInspBasic(record) {
        if (record !== undefined && record !== null) {
            const param = new HttpParams().set('record', JSON.stringify(record))
            .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
            return this.http.post(this.quality + 'AddUpdateIHInspBasic', null, {params: param});
        }
    }
    IHCAGExist(ihHeaderID: number) {
        if (ihHeaderID !== 0) {
            const param = new HttpParams().set('ihHeaderID', ihHeaderID.toString())
            .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
            return this.http.get(this.quality + 'IHCAGExist', {params: param});
        }
    }
    IHCAGRecords(ihHeaderID: number) {
        if (ihHeaderID !== 0) {
            const param = new HttpParams().set('ihHeaderID', ihHeaderID.toString())
            .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
            return this.http.get(this.quality + 'IHCAGRecords', {params: param});
        }
    }
    IHCAGAddUpdate(record) {
        if (record !== undefined && record !== null) {
            const param = new HttpParams().set('records', JSON.stringify(record))
            .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
            return this.http.post(this.quality + 'IHCAGAddUpdate', null, {params: param});
        }
    }
    IHQSAddUpdate(record) {
        if (record !== undefined && record !== null) {
            const param = new HttpParams().set('records', JSON.stringify(record))
            .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
            return this.http.post(this.quality + 'IHQSAddUpdate', null, {params: param});
        }
    }
    IHQSExist(ihHeaderID: number) {
        if (ihHeaderID !== 0) {
            const param = new HttpParams().set('ihHeaderID', ihHeaderID.toString())
            .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
            return this.http.get(this.quality + 'IHQSExist', {params: param});
        }
    }
    IHQSGRecords(ihHeaderID: number) {
        if (ihHeaderID !== 0) {
            const param = new HttpParams().set('ihHeaderID', ihHeaderID.toString())
            .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
            return this.http.get(this.quality + 'IHQSGRecords', {params: param});
        }
    }
    IHSPGet(ihHeaderID: number) {
        if (ihHeaderID !== 0) {
            const param = new HttpParams().set('ihHeaderID', ihHeaderID.toString())
            .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
            return this.http.get(this.quality + 'IHSPGet', {params: param});
        }
    }
    IHSPAddUpdate(record) {
        if (record !== undefined && record !== null) {
            const param = new HttpParams().set('records', JSON.stringify(record))
            .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
            return this.http.post(this.quality + 'IHSPAddUpdate', null, {params: param});
        }
    }
    IHINSGet(ihHeaderID: number, fillet: boolean) {
        if (ihHeaderID !== 0) {
            const param = new HttpParams().set('ihHeaderID', ihHeaderID.toString())
            .set('fillet', fillet.toString()).set('connName', this.authService.CompConn())
            .set('appUserId', this.authService.UserID());
            return this.http.get(this.quality + 'IHINSGet', {params: param});
        }
    }
    IHINSAddUpdate(record) {
        if (record !== undefined && record !== null) {
            const param = new HttpParams().set('records', JSON.stringify(record))
            .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
            return this.http.post(this.quality + 'IHINSAddUpdate', null, {params: param});
        }
    }
    GetSupervisorData(info) {
        const param = new HttpParams().set('info', JSON.stringify(info))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.quality + 'GetSupervisorData', {params: param});
    }
    GetInspectorData(info) {
        const param = new HttpParams().set('info', JSON.stringify(info))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.quality + 'GetInspectorData', {params: param});
    }

    //#endregion Induction Hardening


    //#region  Reports
    ParamOperators(request: RequestParam) {
        if (request !== undefined && request !== null) {
            return this.http.post(this.quality + 'ParamOperators', request);
        }
    }
    ParamMachines(request: RequestParam) {
        if (request !== undefined && request !== null) {
            return this.http.post(this.quality + 'ParamMachines', request);
        }
    }
    ParamProdModels(request: RequestParam) {
        if (request !== undefined && request !== null) {
            return this.http.post(this.quality + 'ParamProdModels', request);
        }
    }
    ParamShifts(request: RequestParam) {
        if (request !== undefined && request !== null) {
            return this.http.post(this.quality + 'ParamShifts', request);
        }
    }
    ReportFirstPieceIns(request: RequestParam) {

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
        return this.http.post(this.quality + 'FirstPieceInspection', request, {responseType : 'blob' as 'blob' });
    }
    ReportIHInspection(request: RequestParam) {

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
        return this.http.post(this.quality + 'IHInspectionReport', request, {responseType : 'blob' as 'blob' });
    }
    //#endregion
}
