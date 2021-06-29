import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { RegisterScreenComponent } from './screens/register-screen/register-screen.component';
import { FindusScreenComponent } from './screens/findus-screen/findus-screen.component';
import { ContactusScreenComponent } from './screens/contactus-screen/contactus-screen.component';
import { SharedModule } from '@shared/shared.module';
import { DoctorModule } from '@doctor/doctor.module';
import { PatientModule } from '../patient/patient.module';
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
import { LoginScreenComponent} from '../visitor/screens/login-screen/login-screen.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterSpecialistScreenComponent } from './screens/register-specialist-screen/register-specialist-screen.component';
import { DoctorProviderService } from '@core/providers/doctors/doctor-provider.service';
import { SearchScreenComponent } from './screens/search-screen/search-screen.component';


const components = [
  RegisterScreenComponent, FindusScreenComponent,
  ContactusScreenComponent, HomeScreenComponent,
  ContactusScreenFormComponent, LoginScreenComponent,
  RegisterFormComponent, RegisterSpecialistScreenComponent,
  SearchScreenComponent
]

const providers = [
  DateProviderService, ContactProviderService,
  PatientProviderService, DoctorProviderService
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule, VisitorRoutingModule, SharedModule,
    PatientModule, DoctorModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [...providers],
  exports: [...components]
})
export class VisitorModule { }
