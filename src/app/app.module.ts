import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { MatSortModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE, DateAdapter, MatDialogModule} from '@angular/material';
import { NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { AuthGuard } from './_guards/auth.guard';
import { ApiService } from './_services/api.service';
import { CoreModule } from './_ui/core/core.module';
import { MOMENT_DATE_FORMATS, MomentDateAdapter } from './moment';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSortModule,
    routing,
    HttpClientModule,
    SnotifyModule,
    LoadingBarModule,
    NgxMaterialTimepickerModule,
    CoreModule,
    MatDialogModule,PdfJsViewerModule,
  ],
  providers: [
    AuthGuard,
    ApiService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    { provide : MAT_DATE_LOCALE, useValue:'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentDateAdapter },
    { provide : MAT_DIALOG_DATA, useValue: {}},
    { provide: MatDialogRef, useValue: {} },
  SnotifyService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
