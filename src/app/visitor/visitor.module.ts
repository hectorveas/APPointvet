import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegisterScreenComponent } from './screens/register-screen/register-screen.component';
import { FindusScreenComponent } from './screens/findus-screen/findus-screen.component';
import { ContactusScreenComponent } from './screens/contactus-screen/contactus-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { DoctorModule } from '@doctor/doctor.module';
import { PatientModule } from '../patient/patient.module';
import { CoreModule } from '@core/core.module';
import { DateProviderService } from '@core/providers/dates/date-provider.service';
import { ContactProviderService } from '@core/providers/contacts/contact-provider.service';
import { PatientProviderService } from '@core/providers/patients/patient-provider.service';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';

const components = [
  LoginScreenComponent,
  RegisterScreenComponent, FindusScreenComponent,
  ContactusScreenComponent
]

const providers = [
  DateProviderService, ContactProviderService,
  PatientProviderService
]

@NgModule({
  declarations: [...components, HomeScreenComponent],
  imports: [
    CommonModule, VisitorRoutingModule,
    ReactiveFormsModule, SharedModule,
    PatientModule, DoctorModule,
    CoreModule,
  ],
  providers: [...providers],
  exports: [...components]
})
export class VisitorModule { }
