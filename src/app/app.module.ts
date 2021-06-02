import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { PatientModule } from './patient/patient.module';
import { DoctorModule } from '@doctor/doctor.module';
import { AdminModule } from '@admin/admin.module';
import { VisitorModule } from '@visitor/visitor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule,
    BrowserAnimationsModule, FontAwesomeModule,
    ToastrModule.forRoot({
      progressBar: false,
      closeButton: true,
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      resetTimeoutOnDuplicate: true
    }),
    CoreModule, SharedModule,
    PatientModule, DoctorModule,
    AdminModule, HttpClientModule,
    VisitorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
