import { HttpClient, HttpParams} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { UserRecord, UserNotificationPageParam, ShipToAddress, BusinessTerm,
        TermAndCondition, Reason, DescriptionMaster } from '../erp/app-manage/models';
export class ApiAppManage {
    constructor(private baseUrl: string, private http: HttpClient, private authService: AuthenticationService) {
    }
    private appManage: string = this.baseUrl + 'appmanage/';
    //#region  Users
    GetUsers() {
        const param = new HttpParams().set('appUserId', this.authService.UserID())
        .set('connName', this.authService.CompConn());
        return this.http.get(this.appManage + 'Users', {params: param});
    }
    GetUserCompanyForUser(id) {
        const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID());
        return this.http.get(this.appManage + 'GetUserCompanyForUser', {params: param});
    }
    AddUser(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record)).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'AddUser', null, {params: param});
        }
    }
    UpdateUser(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record)).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'UpdateUser', null, {params: param});
        }
    }
    DeleteUser(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'DeleteUser', null, {params: param});
        }
    }

    AddUpdateUser(record: UserRecord) {
        if (record !== undefined && record !== null) {
            record.AppUserId = this.authService.UserID();
            return this.http.post(this.appManage + 'AddUpdateUser', record);
        }
    }

    DeleteUserCompany(id) {
        const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID());
        return this.http.post(this.appManage + 'DeleteUserCompany', null, {params: param});
    }

    //#endregion Users
    //#region  UserType
    GetUserTypes() {
        const param = new HttpParams().set('appUserId', this.authService.UserID());
        return this.http.get(this.appManage + 'UserTypes', {params: param});
    }
    AddUserType(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record)).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'AddUserType', null, {params: param});
        }
    }
    UpdateUserType(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record)).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'UpdateUserType', null, {params: param});
        }
    }
    DeleteUserType(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'DeleteUserType', null, {params: param});
        }
    }
    //#endregion UserType
    //#region  UserPreference
    UserIcons() {
        return this.http.get(this.appManage + 'UserIcons');
    }
    UserPreferences() {
        const param = new HttpParams().set('appUserId', this.authService.UserID());
        return this.http.get(this.appManage + 'UserPreferences', {params: param});
    }
    GetUserPreference(userId: number) {
        const param = new HttpParams().set('userID', userId.toString()).set('appUserId', this.authService.UserID());
        return this.http.get(this.appManage + 'GetUserPreference', {params: param});
    }
    AddUserPreference(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record)).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'AddUserPreference', null, {params: param});
        }
    }
    UpdateUserPreference(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record)).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'UpdateUserPreference', null, {params: param});
        }
    }
    DeleteUserPreference(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'DeleteUserPreference', null, {params: param});
        }
    }
    //#endregion UserPreference
    //#region  UserGroup
    GetUserGroups() {
        const param = new HttpParams().set('appUserId', this.authService.UserID());
        return this.http.get(this.appManage + 'UserGroups', {params: param});
    }
    AddUserGroup(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record)).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'AddUserGroup', null, {params: param});
        }
    }
    UpdateUserGroup(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record)).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'UpdateUserGroup', null, {params: param});
        }
    }
    DeleteUserGroup(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'DeleteUserGroup', null, {params: param});
        }
    }
    //#endregion UserGroup
    //#region  UserGroupMember
    GetUserGroupMembers() {
        const param = new HttpParams().set('appUserId', this.authService.UserID())
        .set('connName', this.authService.CompConn());
        return this.http.get(this.appManage + 'UserGroupMembers', {params: param});
    }
    AddUserGroupMember(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record)).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'AddUserGroupMember', null, {params: param});
        }
    }
    UpdateUserGroupMember(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record)).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'UpdateUserGroupMember', null, {params: param});
        }
    }
    DeleteUserGroupMember(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'DeleteUserGroupMember', null, {params: param});
        }
    }
    //#endregion UserGroupMember
    //#region  MenuItem
    GetMenuItems() {
        const param = new HttpParams().set('appUserId', this.authService.UserID());
        return this.http.get(this.appManage + 'MenuItems', {params: param});
    }
    AddMenuItem(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record)).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'AddMenuItem', null, {params: param});
        }
    }
    MenuNamesByUser(userId: number) {
        const param = new HttpParams().set('userId', JSON.stringify(userId)).set('appUserId', this.authService.UserID());
        return this.http.get(this.appManage + 'MenuNamesByUser', {params: param});
    }
    UpdateMenuItem(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record)).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'UpdateMenuItem', null, {params: param});
        }
    }
    DeleteMenuItem(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'DeleteMenuItem', null, {params: param});
        }
    }
    //#endregion MenuItem
    //#region  MenuSetup

    GetMenuSetups() {
        const param = new HttpParams().set('appUserId', this.authService.UserID());
        return this.http.get(this.appManage + 'MenuSetups', {params: param});
    }
    AddMenuSetup(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record)).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'AddMenuSetup', null, {params: param});
        }
    }
    UpdateMenuSetup(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record)).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'UpdateMenuSetup', null, {params: param});
        }
    }
    DeleteMenuSetup(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'DeleteMenuSetup', null, {params: param});
        }
    }
    //#endregion MenuSetup
    //#region  Company
    Companies() {
        const param = new HttpParams().set('appUserId', this.authService.UserID())
        .set('connName', this.authService.CompConn());
        return this.http.get(this.appManage + 'Companies', {params: param});
    }
    AddUpdateCompany(record) {
        return this.http.post(this.appManage + 'AddUpdateCompany', record);
    }
    //#endregion Company
    //#region  Address
    Addresses() {
        const param = new HttpParams().set('appUserId', this.authService.UserID());
        return this.http.get(this.appManage + 'Addresses', {params: param});
    }
    AddUpdateAddress(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record)).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'AddUpdateAddress', null, {params: param});
        }
    }
    DeleteAddress(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'DeleteAddress', null, {params: param});
        }
    }
    //#endregion Address
    //#region  Country
    Countries() {
        const param = new HttpParams().set('appUserId', this.authService.UserID());
        return this.http.get(this.appManage + 'Countries', {params: param});
    }
    AddUpdateCountry(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record)).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'AddUpdateCountry', null, {params: param});
        }
    }
    DeleteCountry(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'DeleteCountry', null, {params: param});
        }
    }
    //#endregion Country
    //#region  State
    States() {
        const param = new HttpParams().set('appUserId', this.authService.UserID());
        return this.http.get(this.appManage + 'States', {params: param});
    }
    GetStates(countryName) {
      const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('countryName', countryName);
      return this.http.get(this.appManage + 'States', {params: param});
    }
    AddUpdateState(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record)).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'AddUpdateState', null, {params: param});
        }
    }
    DeleteState(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID());
          return this.http.post(this.appManage + 'DeleteState', null, {params: param});
        }
    }
    //#endregion Country
    //#region  NoSeries
    NoSeries() {
        const param = new HttpParams().set('appUserId', this.authService.UserID())
        .set('connName', this.authService.CompConn());
        return this.http.get(this.appManage + 'NoSeries', {params: param});
    }
    AddUpdateNoSeries(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
          return this.http.post(this.appManage + 'AddUpdateNoSeries', null, {params: param});
        }
    }
    DeleteNoSeries(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
          .set('connName', this.authService.CompConn());
          return this.http.post(this.appManage + 'DeleteNoSeries', null, {params: param});
        }
    }
    NoSeriesSetups() {
        const param = new HttpParams().set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
        return this.http.get(this.appManage + 'NoSeriesSetups', {params: param});
    }
    AddUpdateNoSeriesSetup(record) {
        if (record !== undefined && record !== null) {
          const param = new HttpParams().set('record', JSON.stringify(record))
          .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
          return this.http.post(this.appManage + 'AddUpdateNoSeriesSetup', null, {params: param});
        }
    }
    DeleteNoSeriesSetup(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString())
          .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
          return this.http.post(this.appManage + 'DeleteNoSeriesSetup', null, {params: param});
        }
    }
    GetNoSeriesNext(key) {
        const param = new HttpParams().set('key', key).set('appUserId', this.authService.UserID())
        .set('connName', this.authService.CompConn());
        return this.http.get(this.appManage + 'GetNoSeriesNext', {params: param});
    }
    //#endregion NoSeries
    //#region  UnitOfMeasure
    UnitOfMeasures() {
        const param = new HttpParams().set('appUserId', this.authService.UserID())
        .set('connName', this.authService.CompConn());
        return this.http.get(this.appManage + 'UnitOfMeasures', {params: param});
    }
    AddUpdateUOM(record) {
        if (record !== undefined && record !== null) {
            const param = new HttpParams().set('record', JSON.stringify(record))
            .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
            return this.http.post(this.appManage + 'AddUpdateUOM', null, {params: param});
        }
    }
    DeleteUOM(id: number) {
        if (id !== 0) {
            const param = new HttpParams().set('id', id.toString())
            .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
            return this.http.post(this.appManage + 'DeleteUOM', null, {params: param});
        }
    }
    //#endregion UnitOfMeasure

    //#region  Test Message
    GetTestMessage() {
        return this.http.get(this.baseUrl + 'test/message');
    }
    //#endregion Test Message
    //#region UserNotification
    GetUserNotificationRec(read: boolean) {
        // console.log('GetUserNotificationRec is called ');
        const param = new HttpParams().set('appUserId', this.authService.UserID())
        .set('read', read.toString()).set('connName', this.authService.CompConn());
        return this.http.get(this.appManage + 'GetUserNotificationRec', {params: param});
    }
    UserNotificationMarkRead(id, connName) {
        const param = new HttpParams().set('id', id.toString()).set('connName', connName)
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.appManage + 'UserNotificationMarkRead', {params: param});
    }
    PagedUserNotifications(currentPage: number, pageSize: number, recordId: number) {
        const param: UserNotificationPageParam = new UserNotificationPageParam();
        param.MaxPageSize = pageSize;
        param.PageNumber = currentPage;
        param.UserCompanies = this.authService.UserCompanies();
        param.ConnName = this.authService.CompConn();
        param.AppUserId = this.authService.EmpCode();
        param.StartingID = recordId;
        console.log('PagedNotification Param', param);
        return this.http.post(this.appManage + 'PagedUserNotifications', param);
    }
    //#endregion

    //#region user


    //#regionend
    //#region new company

    // #end region new company

    //#region  IIOT
    ChangeAction() {
        return this.http.get(this.appManage + 'ChangeAction');
    }
    AllSignal() {
        return this.http.get(this.appManage + 'AllSignal');
    }
    //#endregion IIOT

    //#region ShipToAddress Management
    ShipToAddressList() {
      const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
      return this.http.get(this.appManage + 'ShipToAddressList', {params: param});
    }
    ShipToAddressTypeNoList(type, no) {
      const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('type', type).set('no', no)
      .set('connName', this.authService.CompConn());
      return this.http.get(this.appManage + 'ShipToAddressTypeNoList', {params: param});
    }
    ShipToAddressCount() {
      const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
      return this.http.get(this.appManage + 'ShipToAddressCount', {params: param});
    }
    ShipToAddressGet(id: number) {
      const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
      return this.http.get(this.appManage + 'ShipToAddressGet', {params: param});
    }
    ShipToAddressDelete(id: number) {
      const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
      return this.http.get(this.appManage + 'ShipToAddressDelete', {params: param});
    }
    ShipToAddressAddUpdate(record: ShipToAddress) {
      if (record !== undefined && record !== null) {
        record.AppUserId = this.authService.UserID();
        record.ConnName = this.authService.CompConn();
        return this.http.post(this.appManage + 'ShipToAddressAddUpdate', record);
      }
    }
    //#endregion ShipToAddress Management
    //#region TermAndCondition Management
    TermAndConditionList() {
      const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
      return this.http.get(this.appManage + 'TermAndConditionList', {params: param});
    }
    ConditionByTermList(term) {
      const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('term', term)
      .set('connName', this.authService.CompConn());
      return this.http.get(this.appManage + 'ConditionByTermList', {params: param});
    }
    TermAndConditionCount() {
      const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
      return this.http.get(this.appManage + 'TermAndConditionCount', {params: param});
    }
    TermAndConditionGet(id: number) {
      const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
      return this.http.get(this.appManage + 'TermAndConditionGet', {params: param});
    }
    TermAndConditionDelete(id: number) {
      const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
      return this.http.get(this.appManage + 'TermAndConditionDelete', {params: param});
    }
    TermAndConditionAddUpdate(record: TermAndCondition) {
      if (record !== undefined && record !== null) {
        record.AppUserId = this.authService.UserID();
        record.ConnName = this.authService.CompConn();
        return this.http.post(this.appManage + 'TermAndConditionAddUpdate', record);
      }
    }
  //#endregion TermAndCondition Management
   //#region BusinessTem Management
   BusinessTermList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.appManage + 'BusinessTermList', {params: param});
    }
    BusinessTermCount() {
      const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
      return this.http.get(this.appManage + 'BusinessTermCount', {params: param});
    }
    BusinessTermGet(id: number) {
      const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
      return this.http.get(this.appManage + 'BusinessTermGet', {params: param});
    }
    BusinessTermDelete(id: number) {
      const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
      return this.http.get(this.appManage + 'BusinessTermDelete', {params: param});
    }
    BusinessTermAddUpdate(record: BusinessTerm) {
      if (record !== undefined && record !== null) {
        record.AppUserId = this.authService.UserID();
        record.ConnName = this.authService.CompConn();
        return this.http.post(this.appManage + 'BusinessTermAddUpdate', record);
      }
    }
  //#endregion BusinessTerm Management

  //#region Reason Management
    ReasonList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.appManage + 'ReasonList', {params: param});
    }
    ReasonDelete(id: number) {
      const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
      return this.http.get(this.appManage + 'ReasonDelete', {params: param});
    }
    ReasonAddUpdate(record: Reason) {
      if (record !== undefined && record !== null) {
        record.AppUserId = this.authService.UserID();
        record.ConnName = this.authService.CompConn();
        return this.http.post(this.appManage + 'ReasonAddUpdate', record);
      }
    }

    GetGRAReasonList(){
      const param = new HttpParams().set('appUserId', this.authService.UserID()).
      set('connName', this.authService.CompConn());
      return this.http.get(this.appManage + 'GetGRAReasonList', {params: param});
    }

    GetRejectionReasonList(){
      const param = new HttpParams().set('appUserId', this.authService.UserID()).
      set('connName', this.authService.CompConn());
      return this.http.get(this.appManage + 'GetRejectionReasonList', {params: param});
    }


  //#endregion Reason Management

  //#region Description Management
  DescriptionList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.appManage + 'DescriptionList', {params: param});
    }
    DescriptionDelete(id: number) {
      const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
      return this.http.get(this.appManage + 'DescriptionDelete', {params: param});
    }
    DescriptionAddUpdate(record: DescriptionMaster) {
      if (record !== undefined && record !== null) {
        record.AppUserId = this.authService.UserID();
        record.ConnName = this.authService.CompConn();
        return this.http.post(this.appManage + 'DescriptionAddUpdate', record);
      }
    }
  //#endregion Reason Management
}
