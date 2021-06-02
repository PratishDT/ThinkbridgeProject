import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule, MatSliderModule, MatProgressBarModule} from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule,MatNativeDateModule,MatSelectModule} from '@angular/material';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule, MatProgressSpinnerModule, MatTableModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { Ng2OdometerModule } from 'ng2-odometer';
import { FocusInputDirective, FocusSelectDirective, FocusButtonDirective, FocusCheckDirective } from '../../_directives/focus.directive';
import { UppercaseDirective, NumericDirective, AlphaNumericDirective, AlphabetsDirective} from '../../_directives/input.directive';
import { ContentDirective } from '../../_directives/host.directive';
import { MatCardModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgSelectModule } from '@ng-select/ng-select';
import { ImageCropperModule } from 'ngx-image-cropper';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule,OWL_DATE_TIME_LOCALE  } from 'ng-pick-datetime';
import { FileSaverModule } from 'ngx-filesaver';
import { LoginComponent} from './login/login.component';
import { SanitizeHtmlPipe } from '../../_pipes/safeHtml';
import { MatMenuModule} from '@angular/material/menu';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { TableModule } from 'primeng/table';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AccordionModule } from 'primeng/accordion';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { CheckboxModule } from 'primeng/checkbox';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { MatRadioModule } from '@angular/material';
import { LoaderComponent } from './loader/loader.component';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const routes: Routes = [
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    MatSelectModule,
    FlexLayoutModule,
    MatSidenavModule, MatSliderModule, MatProgressBarModule,
    MatListModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatChipsModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatTabsModule,
    MatRadioModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatExpansionModule,
    PerfectScrollbarModule,
    NgxMaterialTimepickerModule,
    RoundProgressModule,
    Ng2OdometerModule,
    NgSelectModule,
    ImageCropperModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    PdfJsViewerModule,
    FileSaverModule,
    TableModule,
    ScrollPanelModule,
    CalendarModule,
    DropdownModule,
    MultiSelectModule,
    InputTextModule,
    InputTextareaModule,
    AccordionModule,
    MessagesModule,
    MessageModule,
    SplitButtonModule,
    MenuModule,
    CheckboxModule,
    DynamicDialogModule,
    MatRadioModule,
    DialogModule,
  ],
  declarations: [
    ContentDirective,
    FocusInputDirective,
    FocusSelectDirective,
    FocusCheckDirective,
    FocusButtonDirective,
    UppercaseDirective,
    AlphabetsDirective,
    AlphaNumericDirective,
    NumericDirective,
    LoginComponent,
  
    SanitizeHtmlPipe,

    LoaderComponent,
  ],
  exports:[
    MatCardModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    MatSelectModule,
    FlexLayoutModule,
    MatSidenavModule, 
    MatSliderModule,
     MatProgressBarModule,
    MatListModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatChipsModule,
    MatFormFieldModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    MatCardModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatExpansionModule,
    PerfectScrollbarModule,
    RoundProgressModule,
    Ng2OdometerModule,
    NgSelectModule,
    ImageCropperModule,
    NgxMaterialTimepickerModule,
    PerfectScrollbarModule,
    LoginComponent,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    PdfJsViewerModule,
    FileSaverModule,
    ContentDirective,
    NumericDirective,
    FocusInputDirective,
    FocusButtonDirective,
    FocusCheckDirective,
    FocusSelectDirective,
    AlphabetsDirective,
    AlphaNumericDirective,
    SanitizeHtmlPipe,
    TableModule,
    ScrollPanelModule,
    CalendarModule,
    DropdownModule,
    MultiSelectModule,
    InputTextModule,
    InputTextareaModule,
    AccordionModule,
    MessagesModule,
    MessageModule,
    SplitButtonModule,
    MenuModule,
    CheckboxModule,
    DynamicDialogModule,
    DialogModule,
  ],
  entryComponents:[
  ],
   providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        {
          provide: OWL_DATE_TIME_LOCALE, useValue: 'gb'
        },
        [ThemeService]
    ]
})
export class CoreModule { }
