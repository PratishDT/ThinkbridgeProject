import { Routes, RouterModule } from '@angular/router';
import { NavmenubarComponent } from './_ui/core/navmenubar/navmenubar.component';
import { HomeComponent } from './erp/home/home.component';

const appRoutes: Routes = [
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', loadChildren:'./_ui/core/core.module#CoreModule' },
    { path: 'erp', component:NavmenubarComponent, loadChildren:'./erp/erp.module#ErpModule' },
    { path: 'forgot', loadChildren: './_ui/core/core.module#CoreModule'},
    { path: 'dashboard', component:NavmenubarComponent, loadChildren: './dashboard/dashboard.module#DashboardModule'},

    //{ path : 'erp', component:NavmenubarComponent,children:[
    //    {path:'home', component:HomeComponent}
    //]},
    //{ path: 'register', component: RegisterComponent },
 
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];
 
export const routing = RouterModule.forRoot(appRoutes);