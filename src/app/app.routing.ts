import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', loadChildren:'./_ui/core/core.module#CoreModule' },

    { path: '**', redirectTo: 'login' }
];
 
export const routing = RouterModule.forRoot(appRoutes);