import { Injectable } from '@angular/core';
import { UserPreference, UserComp } from 'src/app/erp/app-manage/models';
@Injectable({
    providedIn: 'root'
  })
  export class AuthenticationService {
      private userId = "System";
      private compConn = "NEWConn";

      private userObjName = "currentUser";
      private compObjName = "currentCompany";
      private userCompObjName = "currentUserComps";
      private uCompObjName = "currentUComps";
      private userMenuObjName ="currentUserMenus";
      private userPreferObjName = "currentUserPreferences";
      private userSessionDataObjName="currentUserSessionData";

      public StoreLoginData(data){
        console.log("LoginData",data);
        if(data !== undefined && data !== null){
          let lData = data;
          if(lData.User !== undefined && lData.User !== null){
            localStorage.setItem(this.userObjName,JSON.stringify(lData.User));
          }
          if(lData.Companies !== undefined && lData.Companies !== null){
            localStorage.setItem(this.userCompObjName,JSON.stringify(lData.Companies));
          }
          if(lData.Menus !== undefined && lData.Menus !== null){

            localStorage.setItem(this.userMenuObjName,JSON.stringify(lData.Menus));
          }
          if(lData.Preference !== undefined && lData.Preference !== null){
            localStorage.setItem(this.userPreferObjName,JSON.stringify(lData.Preference));
          }
          if(lData.UserCompanies !== undefined && lData.UserCompanies !== null){
            localStorage.setItem(this.uCompObjName,JSON.stringify(lData.UserCompanies));
          }
        }
      }
      public StoreUserSessionData(data){
        if(data !== undefined && data !== null){
          localStorage.setItem(this.userSessionDataObjName,JSON.stringify(data));
        }
      }
      public GetUserSessionData(){
        return JSON.parse( localStorage.getItem(this.userSessionDataObjName));
      }
      public LogOut():void{
        localStorage.removeItem(this.userCompObjName);
        localStorage.removeItem(this.userObjName);
        localStorage.removeItem(this.userMenuObjName);
        localStorage.removeItem(this.userPreferObjName);
        localStorage.removeItem(this.userSessionDataObjName);
      }
      public UserID(): string{
        let user = JSON.parse(localStorage.getItem(this.userObjName));
        if(user !== undefined && user !== null){
          return user.UserID;
        }
        return this.userId;
      }
      public CurrentUser(){
        return JSON.parse(localStorage.getItem(this.userObjName));
      }
      public EmpCode():string{
        let _code = '';
        let userCompanies = this.UserCompanies();
        if(userCompanies !== undefined && userCompanies.length > 0){
          let compConn = this.CompConn();
          if(compConn !== undefined && compConn !== null && compConn !== ""){
            let comp  = userCompanies.filter(function(item){
              return item.ConnName == compConn;
            })[0];
            if(comp !== undefined && comp !== null){
              _code = comp.EmpCode;
            }
          }else{
            _code = userCompanies[0].EmpCode;
          }
        }
        return _code;
      }
      public UserMenus(){
        return JSON.parse(localStorage.getItem(this.userMenuObjName));
      }
      public UserCompanies(){
        var result:Array<UserComp> = new Array<UserComp>();
        result = JSON.parse(localStorage.getItem(this.uCompObjName));
        return result;
      }
      public UserPreference():UserPreference{
        let uPref :UserPreference = new UserPreference();
        uPref = JSON.parse(localStorage.getItem(this.userPreferObjName));
        return uPref;
      }
      public UserHomePage(){
        let routes = [];
        let homepage = '/erp/home';
        let userPref = JSON.parse(localStorage.getItem(this.userPreferObjName));
        if(userPref !== undefined && userPref !== null){
          if(userPref.HomePage !== undefined && userPref.HomePage !== null && userPref.HomePage !== ''){
            homepage = userPref.HomePage;
          }
        }
        routes.push(homepage);
        return routes;
      }
      public CompConn(): string {
        let comps = this.UserCompanies();
        if(comps && comps.length) {
          return comps[0].ConnName;
        }
        return "";
      }
      public SideMenuCompleteHide() : boolean {
        let uPref = this.UserPreference();
        if(uPref !== undefined && uPref !== null){
          return uPref.HideSideMenu;
        }
        return false;
      }
  }
