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
import { ContactusScreenFormComponent } from './screens/contactus-screen-form/contactus-screen-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

const components = [
  LoginScreenComponent,
  RegisterScreenComponent, FindusScreenComponent,
  ContactusScreenComponent, HomeScreenComponent,
  ContactusScreenFormComponent
]

const providers = [
  DateProviderService, ContactProviderService,
  PatientProviderService
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule, VisitorRoutingModule,
    ReactiveFormsModule, SharedModule,
    PatientModule, DoctorModule,
    CoreModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
  ],
  providers: [...providers],
  exports: [...components]
})
export class VisitorModule { }
