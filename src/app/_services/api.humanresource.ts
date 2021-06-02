import { HttpClient, HttpParams, HttpHandler, HttpHeaders} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { ShiftRoster, Employee, ShiftSchedule, HRSetup, ShiftScheduleRecord, EmployeeGroup, LeaveApplicationSetup, VariableIncentiveSetup,
    GatePassType, GatePassApplicationSetup, EmpCategory, GateEmpInOutRecord, GatePassGracePeriodSetup, EmpHierarchy, DialogDateRange,
    GatePassMan, GatePassAuthorisation, LeaveApplication, SalaryStructureGen, SalaryHeadAppSetup, PayrollFormulae , EmpHierarchyLevel,
    LeaveAppRecord, LeaveAllotment, LeaveRegister, RecurringDeduction, VariableIncentive, SalaryStructure, ShiftSwapRecord,
    ReportParamBankPaySheet, ReportParam, AttendanceSheetParam, VariableIncentiveSetupSearch, ReportDialog, Biomatrix,
    BiomatrixAction, CurrentMonthAttendance, HolidayWorking, iotdata } from '../erp/human-resource/models';
import { UserNotificationPageParam, PageParam } from '../erp/app-manage/models';


export class ApiHumanResource {
    constructor(private baseUrl: string, private http: HttpClient, private authService: AuthenticationService) {
    }
    private humanResource: string = this.baseUrl + 'humanresource/';
    //#region DashBoard
    MachineStatus() {
      const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
      return this.http.get(this.humanResource + 'MachineStatus', {params: param});
  }
    //#endregion
    //#region Employee
    Employees() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'Employees', {params: param});
    }

    getdata(id) {
      const param = new HttpParams().set('id', id.toString())
      .set('connName','SIH').set('appUserId', this.authService.UserID());
      return this.http.get(this.humanResource + 'GetEmployee', {params: param});
  }

    EmployeeRecords(connName= null, all= false) {
        if (connName === undefined || connName === null || connName === '') {
            connName = this.authService.CompConn();
        }
        const param = new HttpParams().set('connName', connName).set('appUserId', this.authService.UserID()).set('all', all.toString());
        return this.http.get(this.humanResource + 'EmployeeRecords', {params: param});
    }
    EmployeesCodeValue() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'EmployeesCodeValue', {params: param});
    }

    AddEmployee(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'AddEmployee', null, {params: param});
        }
    }
    UpdateEmployee(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'UpdateEmployee', null, {params: param});
        }
    }
    AddUpateEmployee(record: Employee) {
        if (record !== undefined && record !== null) {
            record.AppUserId = this.authService.UserID();
            record.ConnName = this.authService.CompConn();
            return this.http.post(this.humanResource + 'AddUpdateEmployee', record);
        }
    }
    DeleteEmployee(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString())
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'DeleteEmployee', null, {params: param});
        }
    }
    GetEmployee(id: number) {
        const param = new HttpParams().set('id', id.toString())
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'GetEmployee', {params: param});
    }
    GetNextEmpCode() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'GetNextEmpCode', {params: param});
    }

    UploadEmployeeImage(uploadImageData: FormData){
      uploadImageData.append('connName', this.authService.CompConn());
      uploadImageData.append('appUserId', this.authService.UserID());
      return this.http.post(this.humanResource + 'UploadEmployeeImage', uploadImageData);
    }

    //#endregion Employee
    //#region  Shift

    Shifts() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'Shifts', {params: param});
    }
    GetShift() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'GetShift', {params: param});
    }
    AddShift(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'AddShift', null, {params: param});
        }
    }
    UpdateShift(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'UpdateShift', null, {params: param});
        }
    }
    DeleteShift(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString())
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'DeleteShift', null, {params: param});
        }
    }
    //#endregion Shit
    //#region  Department
    Departments() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'Departments', {params: param});
    }
    AddDepartment(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'AddDepartment', null, {params: param});
        }
    }
    UpdateDepartment(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'UpdateDepartment', null, {params: param});
        }
    }
    DeleteDepartment(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString())
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'DeleteDepartment', null, {params: param});
        }
    }
    DepartmentCodeValue() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'DepartmentCodeValue', {params: param});
    }
    //#endregion Department
    //#region  Section
    Sections() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'Sections', {params: param});
    }
    AddSection(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'AddSection', null, {params: param});
        }
    }
    UpdateSection(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'UpdateSection', null, {params: param});
        }
    }
    DeleteSection(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString())
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'DeleteSection', null, {params: param});
        }
    }
    SectionCodeValue() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'SectionCodeValue', {params: param});
    }
    //#endregion Section
    //#region  DeclaredHoliday
    DeclaredHolidays() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'DeclaredHolidays', {params: param});
    }
    AddUpdateDeclaredHolidays(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'AddUpdateDeclaredHolidays', null, {params: param});
        }
    }
    DeleteDeclaredHoliday(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString())
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'DeleteDeclaredHoliday', null, {params: param});
        }
    }
    //#endregion DeclaredHoliday
    //#region  Employee status
    EmpStatus() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'EmpStatus', {params: param});
    }
    AddUpdateEmpStatus(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'AddUpdateEmpStatus', null, {params: param});
        }
    }
    DeleteEmpStatus(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString())
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'DeleteEmpStatus', null, {params: param});
        }
    }
    //#endregion employee status
    //#region  Job title
    JobTitles() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'JobTitles', {params: param});
    }
    JobTitleCodeValue() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'JobTitleCodeValue', {params: param});
    }
    AddUpdateJobTitle(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'AddUpdateJobTitle', null, {params: param});
        }
    }
    DeleteJobTitle(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString())
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'DeleteJobTitle', null, {params: param});
        }
    }
    //#endregion JOb title
    //#region  cause of absence
    CauseOfAbsence() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('empCode', this.authService.EmpCode())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'CauseOfAbsence', {params: param});
    }
    AddUpdateCauseOfAbsence(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'AddUpdateCauseOfAbsence', null, {params: param});
        }
    }
    DeleteCauseOfAbsence(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString())
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'DeleteCauseOfAbsence', null, {params: param});
        }
    }
    //#endregion cause of absence
    //#region  salary head
    SalaryHeads() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'SalaryHeads', {params: param});
    }
    AddUpdateSalaryHead(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'AddUpdateSalaryHead', null, {params: param});
        }
    }
    DeleteSalaryHead(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString())
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'DeleteSalaryHead', null, {params: param});
        }
    }
    //#endregion salary head

    //#region Shift roster
    GetShiftRoster(record: ShiftRoster) {
        if (record !== undefined && record !== null) {
            record.connName = this.authService.CompConn();
            record.appUserId = this.authService.UserID();
            return this.http.post(this.humanResource + 'GetShiftRoster', record);
          }
    }
    SaveShiftRoster(record: ShiftRoster) {
        if (record !== undefined && record !== null) {
            record.connName = this.authService.CompConn();
            record.appUserId = this.authService.UserID();
            return this.http.post(this.humanResource + 'SaveShiftRoster', record);
          }
    }
    DeleteShiftRoster(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString())
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'DeleteShiftRoster', null, {params: param});
        }
    }
    PrepareShiftRosterAndSchedule(record: DialogDateRange) {
        if (record !== undefined && record !== null) {
            record.ConnName = this.authService.CompConn();
            record.AppUserId = this.authService.UserID();
            return this.http.post(this.humanResource + 'PrepareShiftRosterAndSchedule', record);
        }

    }
    //#endregion Shift roster


    //#region Schedule
    GetShiftSchedule(record: ShiftSchedule) {
        if (record !== undefined && record !== null) {
            record.ConnName = this.authService.CompConn();
            record.AppUserId = this.authService.UserID();
            return this.http.post(this.humanResource + 'GetShiftSchedule', record);
          }
    }
    SaveShiftSchedule(record: ShiftScheduleRecord) {
        if (record !== undefined && record !== null) {
            record.ConnName = this.authService.CompConn();
            record.AppUserId = this.authService.UserID();
            return this.http.post(this.humanResource + 'SaveShiftSchedule', record);
          }
    }
    //#endregion Schedule
    //#region hr setup
    GetHRSetup() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'GetHRSetup', {params: param});
    }

    SaveHRSetup(record: HRSetup) {
        if (record !== undefined && record !== null) {
            record.ConnName = this.authService.CompConn();
            record.AppUserId = this.authService.UserID();
            return this.http.post(this.humanResource + 'SaveHRSetup', record);
          }
    }
    //#endregion hr setup
    //#region HR-reason
    HRReasons() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'HRReasons', {params: param});
    }
    AddUpdateHRReason(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'AddUpdateHRReason', null, {params: param});
        }
    }
    DeleteHRReason(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString())
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'DeleteHRReason', null, {params: param});
        }
    }
    //#endregion HR-reason
    //#region EmployeeGroup
    EmployeeGroups() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'EmployeeGroups', {params: param});
    }
    AddUpdateEmpGroup(record: EmployeeGroup) {
        if (record !== undefined && record !== null) {
          record.connName = this.authService.CompConn();
          record.appUserId = this.authService.UserID();
          return this.http.post(this.humanResource + 'AddUpdateEmpGroup', record);
        }
    }
    DeleteEmpGroup(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString())
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'DeleteEmpGroup', null, {params: param});
        }
    }
    EmployeeGroupsCodeValue() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'EmployeeGroupsCodeValue', {params: param});
    }
    //#endregion EmployeeGroup
   //#region Gate pass type
   GatePassTypes() {
    const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
    return this.http.get(this.humanResource + 'GatePassTypes', {params: param});
   }
   AddUpdateGatePassTypes(record: GatePassType) {
    if (record !== undefined && record !== null) {
      record.connName = this.authService.CompConn();
      record.appUserId = this.authService.UserID();
      return this.http.post(this.humanResource + 'AddUpdateGatePassTypes', record);
        }
    }
    DeleteGatePassType(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString()).set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'DeleteGatePassType', null, {params: param});
        }
    }
   //#endregion gate passtype
   //#region GatepassApplicationSetup
    GetGatePassAppSetups() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'GetGatePassAppSetups', {params: param});
    }
    AddUpdateGatePassAppSetup(record: GatePassApplicationSetup) {
    if (record !== undefined && record !== null) {
        record.connName = this.authService.CompConn();
        record.appUserId = this.authService.UserID();
        return this.http.post(this.humanResource + 'AddUpdateGatePassAppSetup', record);
        }
    }

    DeleteGatePassAppSetup(id: number) {
    if (id !== 0) {
        const param = new HttpParams().set('id', id.toString()).set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.humanResource + 'DeleteGatePassAppSetup', null, {params: param});
        }
    }

    //#endregion GatepassApplicationsetup
    //#region empcategory
    EmpCategories() {
    const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
    return this.http.get(this.humanResource + 'EmpCategories', {params: param});
    }

    AddUpdateEmpCategory(record: EmpCategory) {
    if (record !== undefined && record !== null) {
    record.connName = this.authService.CompConn();
    record.appUserId = this.authService.UserID();
    return this.http.post(this.humanResource + 'AddUpdateEmpCategory', record);
    }
    }
    EmpCategoriesCodeValue() {
    const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
    return this.http.get(this.humanResource + 'EmpCategoriesCodeValue', {params: param});
    }
    DeleteEmpCategory(id: number) {
    if (id !== 0) {
    const param = new HttpParams().set('id', id.toString()).set('connName', this.authService.CompConn())
    .set('appUserId', this.authService.UserID());
    return this.http.post(this.humanResource + 'DeleteEmpCategory', null, {params: param});
    }
    }

    //#endregion empcategory
    //#region  Employee In Out Times
    ServerTime() {
    return this.http.get(this.humanResource + 'ServerTime');
    }

    PunchInOut(record: GateEmpInOutRecord) {
        if (record != undefined && record !== null) {
        record.ConnName = this.authService.CompConn();
        record.AppUserId = this.authService.UserID();
        return this.http.post(this.humanResource + 'PunchInOut', record);
        }
    }
    PagedInOutRecords(currentPage: number, pageSize: number, searchDate: Date, searchText: string) {
        const param: PageParam = new PageParam();
        param.MaxPageSize = pageSize;
        param.PageNumber = currentPage;
        param.ConnName = this.authService.CompConn();
        param.AppUserId = this.authService.UserID();
        param.SearchDate = searchDate;
        param.SearchText = searchText;
        // console.log('PagedInOutRecords Param', param);
        return this.http.post(this.humanResource + 'PagedInOutRecords', param);
    }
    MarkOutMaterialManGatePass(id) {
      const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
      return this.http.post(this.humanResource + 'MarkOutMaterialManGatePass', null, {params: param});
    }
    MatPagedGatePass(currentPage: number, pageSize: number, forSecurity: boolean = false) {
      const param: UserNotificationPageParam = new UserNotificationPageParam();
      param.MaxPageSize = pageSize;
      param.PageNumber = currentPage;
      param.UserCompanies = this.authService.UserCompanies();
      param.ConnName = this.authService.CompConn();
      param.AppUserId = this.authService.UserID();
      param.ForSecurity = forSecurity;
      // console.log('PagedGatePass Param', param);
      return this.http.post(this.humanResource + 'MatPagedGatePass', param);
  }
    PagedInOutData(currentPage: number, pageSize: number, searchDate: Date, searchText: string, active: boolean) {
        const param: PageParam = new PageParam();
        param.MaxPageSize = pageSize;
        param.PageNumber = currentPage;
        param.ConnName = this.authService.CompConn();
        param.AppUserId = this.authService.UserID();
        param.SearchDate = searchDate;
        param.SearchText = searchText;
        param.Active = active;
        console.log('PagedNotification Param', param);
        return this.http.post(this.humanResource + 'PagedInOutData', param);
    }
    //#endregion Employee In Out Times
    //#region gatepassgraceperiod setup
    GatePassGracePeriodSetups() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'GatePassGracePeriodSetups', {params: param});
    }
    AddUpdateGatePassPeriodSetup(record: GatePassGracePeriodSetup) {
        if (record !== undefined && record !== null) {
            record.connName = this.authService.CompConn();
            record.appUserId = this.authService.UserID();
            return this.http.post(this.humanResource + 'AddUpdateGatePassPeriodSetup', record);
        }
    }
    DeleteGatePassPeriodSetup(id: number) {
        if (id !== 0) {
            const param = new HttpParams().set('id', id.toString()).set('connName', this.authService.CompConn())
            .set('appUserId', this.authService.UserID());
            return this.http.post(this.humanResource + 'DeleteGatePassPeriodSetup', null, {params: param});
        }
    }
    //#endregion gatepassgraceperiod setup
    //#region empHierarchy
    EmpHierarchies() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'EmpHierarchies', {params: param});
        }
    AddUpdateEmpHierarchy(record: EmpHierarchy) {
    if (record !== undefined && record !== null) {
        record.ConnName = this.authService.CompConn();
        record.AppUserId = this.authService.UserID();
        return this.http.post(this.humanResource + 'AddUpdateEmpHierarchy', record);
        }
    }
    DeleteEmpHierarchy(id: number) {
        if (id !== 0) {
            const param = new HttpParams().set('id', id.toString()).set('connName', this.authService.CompConn())
            .set('appUserId', this.authService.UserID());
            return this.http.post(this.humanResource + 'DeleteEmpHierarchy', null, {params: param});
            }
    }
    GetMeAndMySubOrds() {
        const param = new HttpParams().set('empCode', this.authService.EmpCode())
        .set('connName', this.authService.CompConn());
        return this.http.post(this.humanResource + 'GetMeAndMySubOrds', null, {params: param});
    }
    //#endregion emphierarchy
    //#region leaveapplication setup

    LeaveApplicationSetup() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'LeaveApplicationSetup', {params: param});
        }
    AddUpdateLeaveAppSetup(record: LeaveApplicationSetup) {
        if (record !== undefined && record !== null) {
            record.connName = this.authService.CompConn();
            record.appUserId = this.authService.UserID();
            return this.http.post(this.humanResource + 'AddUpdateLeaveAppSetup', record);
        }
    }
    DeleteLeaveAppSetup(id: number) {
        if (id !== 0) {
            const param = new HttpParams().set('id', id.toString()).set('connName', this.authService.CompConn())
            .set('appUserId', this.authService.UserID());
            return this.http.post(this.humanResource + 'DeleteLeaveAppSetup', null, {params: param});
            }
    }

    //#endregion leaveapplication setup
    //#region GatePassMan
    AllGatePassRecords() {
        const param = new HttpParams().set('appUserId', this.authService.UserID())
        .set('empCode', this.authService.EmpCode())
        .set('connName', this.authService.CompConn());
        return this.http.get(this.humanResource + 'AllGatePassRecords', {params: param});
    }
    FillDurationManGatePass(record: GatePassMan) {
        if (record !== undefined && record !== null) {
            record.AppUserId = this.authService.UserID();
            record.ConnName = this.authService.CompConn();
            return this.http.post(this.humanResource + 'FillDurationManGatePass', record);
        }
    }
    AddUpdateManGatePass(record: GatePassMan) {
        if (record !== undefined && record !== null) {
            record.AppUserId = this.authService.UserID();
            record.ConnName = this.authService.CompConn();
            record.GeneratedBy = this.authService.EmpCode();
            return this.http.post(this.humanResource + 'AddUpdateManGatePass', record);
        }
    }
    DeleteManGatePass(id) {
        const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
        .set('connName', this.authService.CompConn());
        return this.http.post(this.humanResource + 'DeleteManGatePass', null, {params: param});
    }
    NotifyManGatePass(id, authorize: boolean) {
        const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
        .set('authorize', authorize.toString()).set('connName', this.authService.CompConn());
        return this.http.post(this.humanResource + 'NotifyManGatePass', null, {params: param});
    }
    GetManGatePass(id) {
        const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
        .set('connName', this.authService.CompConn());
        return this.http.post(this.humanResource + 'GetManGatePass', null, {params: param});
    }
    MarkReturnManGatePass(id) {
      const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
      return this.http.post(this.humanResource + 'MarkReturnManGatePass', null, {params: param});
    }
    MarkOutManGatePass(id) {
      const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
      return this.http.post(this.humanResource + 'MarkOutManGatePass', null, {params: param});
    }
    AuthorizeManGatePass(id, approve: boolean) {
        const param = new HttpParams().set('id', id.toString()).set('approve', approve.toString())
        .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
        return this.http.get(this.humanResource + 'AuthorizeManGatePass', {params: param});
    }
    AuthorizeManGatePass2(gpAuth: GatePassAuthorisation) {
        gpAuth.AppUserId = this.authService.UserID();
        gpAuth.ConnName = this.authService.CompConn();
        gpAuth.AuthEmp = this.authService.EmpCode();
        console.log(gpAuth);
        return this.http.post(this.humanResource + 'AuthorizeManGatePass', gpAuth);
    }
    AuthoriseShiftSwap(shiftSwap: ShiftSwapRecord) {
        shiftSwap.AppUserId = this.authService.EmpCode();
        shiftSwap.ConnName = this.authService.CompConn();
        return this.http.post(this.humanResource + 'AuthoriseShiftSwap', shiftSwap);
    }
    UpdateManGatePassSecurityInput(gpAuth: GatePassAuthorisation) {
        gpAuth.AppUserId = this.authService.UserID();
        gpAuth.ConnName = this.authService.CompConn();
        return this.http.post(this.humanResource + 'UpdateManGatePassSecurityInput', gpAuth);
    }
    PagedGatePass(currentPage: number, pageSize: number, forSecurity: boolean = false) {
        const param: UserNotificationPageParam = new UserNotificationPageParam();
        param.MaxPageSize = pageSize;
        param.PageNumber = currentPage;
        param.UserCompanies = this.authService.UserCompanies();
        param.ConnName = this.authService.CompConn();
        param.AppUserId = this.authService.UserID();
        param.ForSecurity = forSecurity;
        // console.log('PagedGatePass Param', param);
        return this.http.post(this.humanResource + 'PagedGatePass', param);
    }
  //   MaterialPagedGatePass(currentPage: number, pageSize: number, forSecurity: boolean = false) {
  //     const param: UserNotificationPageParam = new UserNotificationPageParam();
  //     param.MaxPageSize = pageSize;
  //     param.PageNumber = currentPage;
  //     param.UserCompanies = this.authService.UserCompanies();
  //     param.ConnName = this.authService.CompConn();
  //     param.AppUserId = this.authService.UserID();
  //     param.ForSecurity = forSecurity;
  //     // console.log('PagedGatePass Param', param);
  //     return this.http.post(this.humanResource + 'MaterialPagedGatePass', param);
  // }
    //#endregion GatePassMan

    //#region LeaveApplication

    GetNextWorkingDate(dateRange) {
      return this.http.post(this.humanResource + 'GetNextWorkingDate', dateRange);
    }
    AllLeaveAppRecords() {
        const param = new HttpParams().set('empCode', this.authService.EmpCode()).set('connName', this.authService.CompConn());
        return this.http.get(this.humanResource + 'AllLeaveAppRecords', {params: param});
    }
    CancelLeaveApp(id) {
      const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('id', id.toString())
      .set('connName', this.authService.CompConn());
      return this.http.get(this.humanResource + 'CancelLeaveApp', {params: param});
    }
    FillLeaveAppAuthorities(record: LeaveApplication) {
        record.ConnName = this.authService.CompConn();
        record.AppUserId = this.authService.UserID();
        return this.http.post(this.humanResource + 'FillLeaveAppAuthorities', record);
    }
    CalcLeaveAppDates(record: LeaveApplication) {
        record.ConnName = this.authService.CompConn();
        record.AppUserId = this.authService.UserID();
        return this.http.post(this.humanResource + 'CalcLeaveAppDates', record);
    }
    LeaveAppAdd(record: LeaveApplication) {
        record.ConnName = this.authService.CompConn();
        record.AppUserId = this.authService.UserID();
        record.GenByEmpCode = this.authService.EmpCode();
        return this.http.post(this.humanResource + 'LeaveAppAdd', record);
    }
    AuthoriseLeaveApp(record: LeaveApplication) {
      record.ConnName = this.authService.CompConn();
      record.AppUserId = this.authService.EmpCode();
      record.GenByEmpCode = this.authService.EmpCode();
      return this.http.post(this.humanResource + 'AuthoriseLeaveApp', record);
    }
    GetLeaveApp(record: LeaveAppRecord) {
        record.ConnName = this.authService.CompConn();
        record.AppUserId = this.authService.EmpCode();
        return this.http.post(this.humanResource + 'GetLeaveApp', record);
    }
    NotifyLeaveApp(id, authorize: boolean) {
        const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
        .set('authorize', authorize.toString()).set('connName', this.authService.CompConn());
        return this.http.post(this.humanResource + 'NotifyLeaveApp', null, {params: param});
    }
    //#endregion LeaveApplication

    //#region SalaryHeadAppSetup

    SalaryHeadAppSetups() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'SalaryHeadAppSetups', {params: param});
    }
    AddUpdateSalaryHeadAppSetup(record: SalaryHeadAppSetup) {
        if (record !== undefined && record !== null) {
            record.connName = this.authService.CompConn();
            record.appUserId = this.authService.UserID();
            return this.http.post(this.humanResource + 'AddUpdateSalaryHeadAppSetup', record);
        }
    }
    DeleteSalaryHeadAppSetup(id: number) {
        if (id !== 0) {
            const param = new HttpParams().set('id', id.toString()).set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
            return this.http.post(this.humanResource + 'DeleteSalaryHeadAppSetup', null, {params: param});
        }
    }

    //#endregion SalaryHeadAppSetup

    //#region SalaryStructure
    SalaryStructureAll() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'SalaryStructureAll', {params: param});
    }
    SalaryStructureGenerate(record: SalaryStructureGen) {
    if (record !== undefined && record !== null) {
        record.ConnName = this.authService.CompConn();
        record.AppUserId = this.authService.UserID();
        return this.http.post(this.humanResource + 'SalaryStructureGenerate', record);
        }
    }
    SalaryStructurePaged(currentPage: number, pageSize: number, searchText: string) {
        const param: PageParam = new PageParam();
        param.MaxPageSize = pageSize;
        param.PageNumber = currentPage;
        param.SearchText = searchText;
        param.ConnName = this.authService.CompConn();
        param.AppUserId = this.authService.UserID();
        console.log('PagedNotification Param', param);
        return this.http.post(this.humanResource + 'SalaryStructurePaged', param);
    }
    SalaryStructureDisplay(record: SalaryStructureGen) {
    if (record !== undefined && record !== null) {
        record.ConnName = this.authService.CompConn();
        record.AppUserId = this.authService.UserID();
        return this.http.post(this.humanResource + 'SalaryStructureDisplay', record);
        }
    }
    SalaryStructureUpdate(record: Array<SalaryStructure>) {
        if (record !== undefined && record !== null) {
            for (let i = 0; i < record.length; i++) {
                record[i].ConnName = this.authService.CompConn();
                record[i].AppUserId = this.authService.UserID();
            }
            return this.http.post(this.humanResource + 'SalaryStructureUpdate', record);
        }
    }
    //#endregion SalaryStructure

    //#region EmpHierarchyLevels
    EmpHierarchyLevels() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'EmpHierarchyLevels', {params: param});
        }
    AddUpdateEmpHierarchyLevel(record: EmpHierarchyLevel) {
        if (record !== undefined && record !== null) {
            record.ConnName = this.authService.CompConn();
            record.AppUserId = this.authService.UserID();
            return this.http.post(this.humanResource + 'AddUpdateEmpHierarchyLevel', record);
            }
    }
    DeleteEmpHierarchyLevel(id: number) {
        if (id !== 0) {
            const param = new HttpParams().set('id', id.toString())
            .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
            return this.http.post(this.humanResource + 'DeleteEmpHierarchyLevel', null, {params: param});
            }
    }
    //#endregion EmpHierarchyLevel

    //#region Payroll-formulae

    PayrollFormulae() {
    const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
    return this.http.get(this.humanResource + 'PayrollFormulae', {params: param});
    }
    AddUpdatePayrollFormulae(record: PayrollFormulae) {
    if (record !== undefined && record !== null) {
        record.ConnName = this.authService.CompConn();
        record.AppUserId = this.authService.UserID();
        return this.http.post(this.humanResource + 'AddUpdatePayrollFormulae', record);
        }
    }
    DeletePayrollFormulae(id: number) {
        if (id !== 0) {
            const param = new HttpParams().set('id', id.toString())
            .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
            return this.http.post(this.humanResource + 'DeletePayrollFormulae', null, {params: param});
            }
    }
    //#endregion Payroll-fromulae
    //#region VariableIncentiveSetup
    VariableIncentiveSetup() {
    const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
    return this.http.get(this.humanResource + 'VariableIncentiveSetup', {params: param});
    }
    GetVariableIncentiveSetup(id: number) {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('id', id.toString());
        return this.http.get(this.humanResource + 'GetVariableIncentiveSetup', {params: param});
    }
    AddUpdateVariableIncentiveSetup(record: VariableIncentiveSetup) {
    if (record !== undefined && record !== null) {
        record.ConnName = this.authService.CompConn();
        record.AppUserId = this.authService.UserID();
        return this.http.post(this.humanResource + 'AddUpdateVariableIncentiveSetup', record);
        }
    }
    DeleteVariableIncentiveSetup(id: number) {
    if (id !== 0) {
        const param = new HttpParams().set('id', id.toString())
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.humanResource + 'DeleteVariableIncetiveSetup', null, {params: param});
        }
    }
    DeleteVariableIncentiveBenefitSetup(id: number) {
        if (id !== 0) {
            const param = new HttpParams().set('id', id.toString())
            .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
            return this.http.post(this.humanResource + 'DeleteVariableIncentiveBenefitSetup', null, {params: param});
        }
    }
    DeleteVariableIncentiveSlabSetup(id: number) {
        if (id !== 0) {
            const param = new HttpParams().set('id', id.toString())
            .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
            return this.http.post(this.humanResource + 'DeleteVariableIncentiveSlabSetup', null, {params: param});
        }
    }
    SearchVarIncSetup(searchParam: VariableIncentiveSetupSearch) {
      if (searchParam !== undefined && searchParam !== null) {
        searchParam.AppUserId = this.authService.UserID();
        searchParam.ConnName = this.authService.CompConn();
        return this.http.post(this.humanResource + 'SearchVarIncSetup', searchParam);
      }
    }
    GetMachineFromVarIncSetup() {
      const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
      return this.http.get(this.humanResource + 'GetMachineFromVarIncSetup', {params: param});
    }
    GetFinPartsFromVarIncSetup(machine: string) {
      const param = new HttpParams().set('connName', this.authService.CompConn())
                  .set('appUserId', this.authService.UserID())
                  .set('machineCode', machine);
      return this.http.get(this.humanResource + 'GetFinPartsFromVarIncSetup', {params: param});
    }
    GetOperationsFromVarIncSetup(machine: string, model: string) {
      const param = new HttpParams().set('connName', this.authService.CompConn())
                  .set('appUserId', this.authService.UserID())
                  .set('machineCode', machine)
                  .set('modelCode', model);
      return this.http.get(this.humanResource + 'GetOperationsFromVarIncSetup', {params: param});
    }
    //#endregion VariableIncentiveSetup
    //#region VariableIncentive
    GetVariableIncentive(record: VariableIncentive) {
        if (record !== undefined && record !== null) {
            record.ConnName = this.authService.CompConn();
            record.AppUserId = this.authService.UserID();
            return this.http.post(this.humanResource + 'GetVariableIncentive', record);
        }
    }
    VariableIncFillBasic(record: VariableIncentive) {
        if (record !== undefined && record !== null) {
            record.ConnName = this.authService.CompConn();
            record.AppUserId = this.authService.UserID();
            return this.http.post(this.humanResource + 'VariableIncFillBasic', record);
        }
    }
    VariableIncCalcIncentive(record: VariableIncentive) {
        if (record !== undefined && record !== null) {
            record.ConnName = this.authService.CompConn();
            record.AppUserId = this.authService.UserID();
            return this.http.post(this.humanResource + 'VariableIncCalcIncentive', record);
        }
    }
    VariableIncentiveAddUpdate(record: VariableIncentive) {
        if (record !== undefined && record !== null) {
            record.ConnName = this.authService.CompConn();
            record.AppUserId = this.authService.UserID();
            return this.http.post(this.humanResource + 'VariableIncentiveAddUpdate', record);
        }
    }
    VariableDetailDelete(Id: number) {
      const param = new HttpParams().set('ConnName', this.authService.CompConn())
                  .set('AppUserId', this.authService.UserID())
                  .set('Id', Id.toString());
      return this.http.get(this.humanResource + 'VariableDetailDelete', {params: param});
    }
    ExtraHourDetailDelete(Id: number) {
      const param = new HttpParams().set('ConnName', this.authService.CompConn())
                  .set('AppUserId', this.authService.UserID())
                  .set('Id', Id.toString());
      return this.http.get(this.humanResource + 'ExtraHourDetailDelete', {params: param});
    }
    VariableIncentiveDelete(Id: number) {
      const param = new HttpParams().set('ConnName', this.authService.CompConn())
                  .set('AppUserId', this.authService.UserID())
                  .set('Id', Id.toString());
      return this.http.get(this.humanResource + 'VariableIncentiveDelete', {params: param});
    }
    //#endregion VariableIncentive
    //#region CurrentMonthAttendance
    GetCurrentMonthAttendance() {
      const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
      return this.http.get(this.humanResource + 'GetCurrentMonthAttendance', {params: param});
    }
    PrepareCurrentMonthAttendance(dialogData: DialogDateRange) {
        dialogData.AppUserId = this.authService.UserID();
        dialogData.ConnName = this.authService.CompConn();
        return this.http.post(this.humanResource + 'PrepareCurrentMonthAttendance', dialogData);
    }
    AddUpdateCurrentMonthAttendance(record: CurrentMonthAttendance) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.humanResource + 'AddUpdateCurrentMonthAttendance', record);
    }
    PostCurrentMonthAttendance(dialogData: DialogDateRange) {
      dialogData.AppUserId = this.authService.UserID();
      dialogData.ConnName = this.authService.CompConn();
      return this.http.post(this.humanResource + 'PostCurrentMonthAttendance', dialogData);
    }
    ClearCurrentMonthAttendance() {
          const param = new HttpParams()
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.humanResource + 'ClearCurrentMonthAttendance', null, {params: param});
    }
    //#endregion CurrentMonthAttendance
    //#region MonthlyAttendance
    GetMonthYearList() {
      const param = new HttpParams().set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
      return this.http.get(this.humanResource + 'GetMonthYearList', {params: param});
    }
    GetMonthlyAttendance(monthYear: string) {
      const param = new HttpParams()
      .set('monthYear', monthYear)
      .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
      return this.http.get(this.humanResource + 'GetMonthlyAttendance', {params: param});
    }
    //#endregion MonthlyAttendance
    //#region RecurringDeduction
    RecurringDeduction() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'RecurringDeduction', {params: param});
    }
    AddUpdateRecurringDeduction(record: RecurringDeduction) {
    if (record !== undefined && record !== null) {
        record.ConnName = this.authService.CompConn();
        record.AppUserId = this.authService.UserID();
        return this.http.post(this.humanResource + 'AddUpdateRecurringDeduction', record);
        }
    }
    DeleteRecurringDeduction(id: number) {
        if (id !== 0) {
            const param = new HttpParams().set('id', id.toString())
            .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
            return this.http.post(this.humanResource + 'DeleteRecurringDeduction', null, {params: param});
        }
    }
    //#endregion RecurringDeduction
    //#region LeaveAllotment
    LeaveAllotment() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.humanResource + 'LeaveAllotment', {params: param});
    }
    LeaveAllotmentAddUpdate(record: LeaveAllotment) {
        if (record !== undefined && record !== null) {
            record.AppUserId = this.authService.UserID();
            record.ConnName = this.authService.CompConn();
            return this.http.post(this.humanResource + 'LeaveAllotmentAddUpdate', record);
        }
    }
    LeaveAllotmentDelete(id: number) {
        if (id !== 0) {
            const param = new HttpParams().set('id', id.toString()).set('connName', this.authService.CompConn())
            .set('appUserId', this.authService.UserID());
            return this.http.post(this.humanResource + 'LeaveAllotmentDelete', null, {params: param});
        }
    }
    PagedLeaveAllotment(currentPage: number, pageSize: number, searchDate: Date, searchText: string) {
        const param: PageParam = new PageParam();
        param.MaxPageSize = pageSize;
        param.PageNumber = currentPage;
        param.ConnName = this.authService.CompConn();
        param.AppUserId = this.authService.UserID();
        param.SearchDate = searchDate;
        param.SearchText = searchText;
        console.log('PagedNotification Param', param);
        return this.http.post(this.humanResource + 'PagedLeaveAllotment', param);
    }
    //#endregion LeaveAllotment
    //#region Prepayroll
    PrePayrollPrepare(dialogData: DialogDateRange) {
        dialogData.AppUserId = this.authService.UserID();
        dialogData.ConnName = this.authService.CompConn();
        return this.http.post(this.humanResource + 'PrePayrollPrepare', dialogData);
    }
    PrePayrollPost(dialogData: DialogDateRange) {
      dialogData.AppUserId = this.authService.UserID();
      dialogData.ConnName = this.authService.CompConn();
      return this.http.post(this.humanResource + 'PrePayrollPost', dialogData);
    }
    GetPrepayroll() {
       const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
       return this.http.get(this.humanResource + 'GetPayroll', {params: param});
    }
    GetMonthYearListPayroll() {
      const param = new HttpParams().set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
      return this.http.get(this.humanResource + 'GetMonthYearListPayroll', {params: param});
    }
    GetMonthlyPayroll(monthYear: string) {
      const param = new HttpParams()
      .set('monthYear', monthYear)
      .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
      return this.http.get(this.humanResource + 'GetMonthlyPayroll', {params: param});
    }
    //#endregion Prepayroll

    //#region Leave Register
    PagedLeaveRegister(currentPage: number, pageSize: number, searchDate: Date, searchText: string) {
        const param: PageParam = new PageParam();
        param.MaxPageSize = pageSize;
        param.PageNumber = currentPage;
        param.ConnName = this.authService.CompConn();
        param.AppUserId = this.authService.UserID();
        param.SearchDate = searchDate;
        param.SearchText = searchText;
        console.log('PagedNotification Param', param);
        return this.http.post(this.humanResource + 'PagedLeaveRegister', param);
    }
    CorrectLeaveRegister(dialogData: ReportParam) {
      const param: PageParam = new PageParam();
      dialogData.AppUserId = this.authService.UserID();
      dialogData.ConnName = this.authService.CompConn();
      return this.http.post(this.humanResource + 'CorrectLeaveRegister', dialogData);
    }
    //#endregion Leave Register

    //#region Biomatrix
    BiomatrixAll() {
      const param = new HttpParams().set('ConnName', this.authService.CompConn())
                  .set('AppUserId', this.authService.UserID());
      return this.http.get(this.humanResource + 'BiomatrixAll', {params: param});
    }
    BiomatrixAddUpdate(record: Biomatrix) {
      if (record !== undefined && record !== null) {
          record.ConnName = this.authService.CompConn();
          record.AppUserId = this.authService.UserID();
          return this.http.post(this.humanResource + 'BiomatrixAddUpdate', record);
      }
    }
    BiomatrixAction(actionParam: BiomatrixAction) {
    if (actionParam !== undefined && actionParam !== null) {
        actionParam.ConnName = this.authService.CompConn();
        actionParam.AppUserId = this.authService.UserID();
        return this.http.post(this.humanResource + 'BiomatrixActionProcess', actionParam);
      }
    }
    //#endregion Biomatrix

    //#region HolidayWorkingRecord Management
		HolidayWorkingRecordList() {
      const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
			   return this.http.get(this.humanResource + 'HolidayWorkingRecordList', {params: param});
		}
		HolidayWorkingRecordCount() {
      const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
			   return this.http.get(this.humanResource + 'HolidayWorkingRecordCount', {params: param});
		}
		HolidayWorkingRecordGet(id: number) {
      const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
			   return this.http.get(this.humanResource + 'HolidayWorkingRecordGet', {params: param});
		}
		HolidayWorkingRecordSearch(searchText: string) {
			const param = new HttpParams().set('searchText', searchText).set('appUserId', this.authService.UserID());
			return this.http.get(this.humanResource + 'HolidayWorkingRecordSearch', {params: param});
		}
		HolidayWorkingRecordAddUpdate(record: HolidayWorking) {
			if (record !== undefined && record !== null) {
			record.AppUserId = this.authService.UserID();
			return this.http.post(this.humanResource + 'HolidayWorkingRecordAddUpdate', record);
			}
    }
    HolidayWorkingRecordDelete(record: HolidayWorking) {
      record.AppUserId = this.authService.UserID();
			   return this.http.post(this.humanResource + 'HolidayWorkingRecordDelete', record);
		}
		//#endregion HolidayWorkingRecord Management

    //#region Report
    ReportBankPaySheetExport(request: ReportParamBankPaySheet) {

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
        return this.http.post(this.humanResource + 'ReportBankPaySheetExport', request, {responseType : 'blob' as 'blob' });
    }
    ExtraIncentiveExport(request: ReportDialog) {

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
      return this.http.post(this.humanResource + 'ReportExtraIncentiveExport', request, {responseType : 'blob' as 'blob' });
    }

    ReportMonthlyECRExport(request: ReportDialog) {

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
      return this.http.post(this.humanResource + 'ReportMonthlyECRExport', request, {responseType : 'blob' as 'blob' });
    }
    ReportNewJoineesAndLeftEmployeesExport(request: ReportParam) {

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
      return this.http.post(this.humanResource + 'ReportNewJoineesAndLeftEmployeesExport', request, {responseType : 'blob' as 'blob' });
    }
    ReportOperatorJobworkExport(request: ReportDialog) {

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
      return this.http.post(this.humanResource + 'ReportOperatorJobworkExport', request, {responseType : 'blob' as 'blob' });
    }
    ReportESICDetailStatementExport(request: ReportParam) {

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
      return this.http.post(this.humanResource + 'ReportESICDetailStatementExport', request, {responseType : 'blob' as 'blob' });
  }
  ReportPFStatementExport(request: ReportParam) {

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
    return this.http.post(this.humanResource + 'ReportPFStatementExport', request, {responseType : 'blob' as 'blob' });
  }
  ReportPayslipExport(request: ReportParam) {

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
    return this.http.post(this.humanResource + 'ReportPayslipExport', request, {responseType : 'blob' as 'blob' });
  }
  ReportPTStatementExport(request: ReportParam) {

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
  return this.http.post(this.humanResource + 'ReportPTStatementExport', request, {responseType : 'blob' as 'blob' });
  }

  ReportWageRegisterExport(request: AttendanceSheetParam) {

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
    return this.http.post(this.humanResource + 'ReportWageRegisterExport', request, {responseType : 'blob' as 'blob' });
  }

  ReportLeaveAppSummaryExport(request: AttendanceSheetParam) {

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
    return this.http.post(this.humanResource + 'ReportLeaveAppSummaryExport', request, {responseType : 'blob' as 'blob' });
  }

  ReportEmployeeSummaryExport(request: AttendanceSheetParam) {

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
    return this.http.post(this.humanResource + 'ReportEmployeeSummaryExport', request, {responseType : 'blob' as 'blob' });
  }

  ReportITDetailSummaryExport(request: ReportParam) {

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
    return this.http.post(this.humanResource + 'ReportITDetailSummaryExport', request, {responseType : 'blob' as 'blob' });
    }

    ReportSummaryOfBonusExport(request: ReportParam) {

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
      return this.http.post(this.humanResource + 'ReportSummaryOfBonusExport', request, {responseType : 'blob' as 'blob' });
      }

    ReportShiftSwapExport(request: ReportParam) {

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
      return this.http.post(this.humanResource + 'ReportShiftSwapExport', request, {responseType : 'blob' as 'blob' });
    }

    ReportLWFExport(request: ReportParam) {

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
      return this.http.post(this.humanResource + 'ReportLWFExport', request, {responseType : 'blob' as 'blob' });
    }

    ReportServiceCertificateExport(request: ReportParam) {

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
      return this.http.post(this.humanResource + 'ReportServiceCertificateExport', request, {responseType : 'blob' as 'blob' });
    }
    ReportSalaryCertificateExport(request: ReportParam) {

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
      return this.http.post(this.humanResource + 'ReportSalaryCertificateExport', request, {responseType : 'blob' as 'blob' });
    }

    ReportShowCauseNoticeExport(request: ReportParam) {
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
      return this.http.post(this.humanResource + 'ReportShowCauseNoticeExport', request, {responseType : 'blob' as 'blob' });
    }
    ReportNssoSummaryExport(request: ReportParam) {
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
      return this.http.post(this.humanResource + 'ReportNssoSummaryExport', request, {responseType : 'blob' as 'blob' });
    }
    ReportAttendanceSheetExport(request: AttendanceSheetParam) {

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
      return this.http.post(this.humanResource + 'ReportAttendanceSheetExport', request, {responseType : 'blob' as 'blob' });
    }
    ReportConveyanceRegisterExport(request: AttendanceSheetParam) {

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
      return this.http.post(this.humanResource + 'ReportConveyanceRegisterExport', request, {responseType : 'blob' as 'blob' });
    }
    ReportIncentiveRegisterExport(request: AttendanceSheetParam) {

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
      return this.http.post(this.humanResource + 'ReportIncentiveRegisterExport', request, {responseType : 'blob' as 'blob' });
    }
    ReportMenGatePassSummaryExport(request: AttendanceSheetParam) {

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
      return this.http.post(this.humanResource + 'ReportMenGatePassSummaryExport', request, {responseType : 'blob' as 'blob' });
    }
    ReportAnnualReturnExport(request: ReportParam) {

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
      return this.http.post(this.humanResource + 'ReportAnnualReturnExport', request, {responseType : 'blob' as 'blob' });
    }
    ReportAdultRegisterExport(request: ReportParam) {

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
      return this.http.post(this.humanResource + 'ReportAdultRegisterExport', request, {responseType : 'blob' as 'blob' });
    }
    ReportLeaveRegisterExport(request: ReportParam) {

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
      return this.http.post(this.humanResource + 'ReportLeaveRegisterExport', request, {responseType : 'blob' as 'blob' });
    }
    ReportExtraHoursExport(request: AttendanceSheetParam) {

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
      return this.http.post(this.humanResource + 'ReportExtraHoursExport', request, {responseType : 'blob' as 'blob' });
    }

    PrepayrollExport(request: ReportParam) {

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
      return this.http.post(this.humanResource + 'PrepayrollExport', request, {responseType : 'blob' as 'blob' });
  }

  ReportBonusRegisterExport(request: ReportParam) {
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
    return this.http.post(this.humanResource + 'ReportBonusRegisterExport', request, {responseType : 'blob' as 'blob' });
  }

  ReportBankPaySheet(dialogData: ReportParamBankPaySheet) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.humanResource + 'ReportBankPaySheet', dialogData);
  }


  ReportESICDetailStatement(request: ReportParam) {

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
      return this.http.post(this.humanResource + 'ReportESICDetailStatement', request, {responseType : 'blob' as 'blob' });
  }

  ReportESICDetailStatementView(dialogData: ReportParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportESICDetailStatement', dialogData);
  }
  ReportPayslip(dialogData: ReportParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportPayslip', dialogData);
  }
  ReportPFStatement(dialogData: ReportParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportPFStatement', dialogData);
  }
  ReportExtraIncentive(dialogData: ReportDialog) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportExtraIncentive', dialogData);
  }
  ReportMonthlyECR(dialogData: ReportDialog) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportMonthlyECR', dialogData);
  }
  ReportPTStatement(dialogData: ReportParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportPTStatement', dialogData);
  }
  ReportNewJoineesAndLeftEmployees(dialogData: ReportParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportNewJoineesAndLeftEmployees', dialogData);
  }
  ReportITDetailSummary(dialogData: ReportParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportITDetailSummary', dialogData);
  }
  ReportNssoSummary(dialogData: ReportParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportNssoSummary', dialogData);
  }
  ReportShiftSwap(dialogData: ReportParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportShiftSwap', dialogData);
  }
  ReportLWF(dialogData: ReportParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportLWF', dialogData);
  }
  ReportServiceCertificate(dialogData: ReportParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportServiceCertificate', dialogData);
  }
  ReportSalaryCertificate(dialogData: ReportParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportSalaryCertificate', dialogData);
  }
  ReportBonusRegister(dialogData: ReportParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportBonusRegister', dialogData);
  }
  ReportLeaveRegister(dialogData: ReportParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportLeaveRegister', dialogData);
  }
  ReportAnnualReturn(dialogData: ReportParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportAnnualReturn', dialogData);
  }
  ReportAdultRegister(dialogData: ReportParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportAdultRegister', dialogData);
  }
  ReportShowCauseNotice(dialogData: ReportParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportShowCauseNotice', dialogData);
  }
  ReportAttendanceSheet(dialogData: AttendanceSheetParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportAttendanceSheet', dialogData);
  }
  ReportExtraHours(dialogData: AttendanceSheetParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportExtraHours', dialogData);
  }
  ReportConveyanceRegister(dialogData: AttendanceSheetParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportConveyanceRegister', dialogData);
  }
  ReportWageRegister(dialogData: AttendanceSheetParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportWageRegister', dialogData);
  }
  ReportIncentiveRegister(dialogData: AttendanceSheetParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportIncentiveRegister', dialogData);
  }
  ReportMenGatePassSummary(dialogData: AttendanceSheetParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportMenGatePassSummary', dialogData);
  }
  ReportLeaveAppSummary(dialogData: AttendanceSheetParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportLeaveAppSummary', dialogData);
  }
  ReportOperatorJobwork(dialogData: ReportDialog) {
    console.log(dialogData, 'fromReportOperatorJobwork');

    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportOperatorJobwork', dialogData);
  }
  ReportEmployeeSummary(dialogData: AttendanceSheetParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'ReportEmployeeSummary', dialogData);
  }
  ProductionReportGet(from: string, to: string) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn()).set('from', from).set('to', to);
    return this.http.get(this.humanResource + 'ProductionReportGet', {params: param});
  }
  AlarmReportGet(from: string, to: string) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn()).set('from', from).set('to', to);
    return this.http.get(this.humanResource + 'AlarmReportGet', {params: param});
  }
  MachineCode() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.humanResource + 'MachineCode', {params: param});
  }
  EmployeeRecord() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.humanResource + 'EmployeeRecord', {params: param});
  }

  Operations() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.humanResource + 'Operations', {params: param});
}
FinishParts() {
  const param = new HttpParams().set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.humanResource + 'FinishParts', {params: param});
}
ProductionStatusGet(from: string, to: string) {
  const param = new HttpParams().set('appUserId', this.authService.UserID())
  .set('connName', this.authService.CompConn()).set('from', from).set('to', to);
  return this.http.get(this.humanResource + 'ProductionStatusGet', {params: param});
}
GetProductionShiftWiseReport(from: string, to: string){
    const param = new HttpParams().set('appUserId',  this.authService.UserID()).set('connName', this.authService.CompConn()).set('FromDate',from).set('ToDate',to);
    return this.http.get(this.humanResource + 'ProductionReportGet', {params: param});
}
PostIotDataAddUpdate(record: iotdata) {
  if (record !== undefined && record !== null) {
    record.AppUserId = this.authService.UserID();
    record.ConnName = this.authService.CompConn();
    return this.http.post(this.humanResource + 'PostIotDataAddUpdate', record);
  }
 }
 //#endregion Report
}
