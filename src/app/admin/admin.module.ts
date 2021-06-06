import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeScreenComponent } from './screens/home-screen/admin-home-screen.component';
import { AdminLoginScreenComponent } from './screens/login-screen/admin-login-screen.component';
import { ContactProviderService } from '@core/providers/contacts/contact-provider.service';
import { DateProviderService } from '@core/providers/dates/date-provider.service';
import { DoctorProviderService } from '@core/providers/doctors/doctor-provider.service';
import { PatientProviderService } from '@core/providers/patients/patient-provider.service';
import { SpecalContactProviderService } from '@core/providers/specialContacts/specal-contact-provider.service';
import { DoctorModule } from '@doctor/doctor.module';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { PatientModule } from '../patient/patient.module';
import { ContactsModule } from '@contacts/contacts.module';
import { DatesModule } from '@dates/dates.module';
import { DoctorsModule } from '@doctors/doctors.module';
import { PatientsModule } from '@patients/patients.module';
import { SpecialContactsModule } from '@special_contacts/special-contacts.module';

const components = [
  AdminHomeScreenComponent, AdminLoginScreenComponent
]

const modules = [
  AdminRoutingModule,
  DoctorModule, PatientModule,
  SharedModule, ReactiveFormsModule,
  MatButtonModule, MatIconModule,
  MatListModule, MatMenuModule,
  MatInputModule, FormsModule,
  ContactsModule, DatesModule,
  DoctorsModule, PatientsModule,
  SpecialContactsModule
]

const providers = [
  ContactProviderService, DateProviderService,
  DoctorProviderService, PatientProviderService,
  SpecalContactProviderService
]
@NgModule({
  declarations: [...components],
  imports: [CommonModule, ...modules],
  providers: [...providers]
})
export class AdminModule { }
