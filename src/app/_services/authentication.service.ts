import { Injectable } from '@angular/core';
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
      public UserMenus(){
        return JSON.parse(localStorage.getItem(this.userMenuObjName));
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
  }
