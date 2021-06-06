import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetPatientScreenComponent } from './screens/get-patient-screen/get-patient-screen.component';
import { NewPatientScreenComponent } from './screens/new-patient-screen/new-patient-screen.component';
import { UpdatePatientScreenComponent } from './screens/update-patient-screen/update-patient-screen.component';
import { DeletePatientScreenComponent } from './screens/delete-patient-screen/delete-patient-screen.component';
import { GetByRutPatientScreenComponent } from './screens/get-by-rut-patient-screen/get-by-rut-patient-screen.component';
import { PatientHomeScreenComponent } from './screens/patient-home-screen/patient-home-screen.component';



@NgModule({
  declarations: [GetPatientScreenComponent, NewPatientScreenComponent, UpdatePatientScreenComponent, DeletePatientScreenComponent, GetByRutPatientScreenComponent, PatientHomeScreenComponent],
  imports: [
    CommonModule
  ]
})
export class PatientsModule { }
