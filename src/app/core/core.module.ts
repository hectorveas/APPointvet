import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from './services/contacts/contact.service';
import { DatesService } from './services/dates/dates.service';
import { DoctorService } from './services/doctors/doctor.service';
import { HttpService } from './services/http/http.service';
import { PatientService } from './services/patients/patient.service';
import { SpecialContactService } from './services/specialContacts/special-contact.service';
import { FormService} from '../core/services/form/form.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const services = [
  ContactService, DatesService,
  DoctorService, HttpService,
  PatientService, SpecialContactService,
  FormService
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [...services]
})
export class CoreModule { }
