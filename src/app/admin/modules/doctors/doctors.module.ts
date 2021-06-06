import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDoctorScreenComponent } from './screens/new-doctor-screen/new-doctor-screen.component';
import { DeleteDoctorScreenComponent } from './screens/delete-doctor-screen/delete-doctor-screen.component';
import { UpdateDoctorScreenComponent } from './screens/update-doctor-screen/update-doctor-screen.component';
import { GetDoctorScreenComponent } from './screens/get-doctor-screen/get-doctor-screen.component';
import { GetByRutDoctorScreenComponent } from './screens/get-by-rut-doctor-screen/get-by-rut-doctor-screen.component';
import { DoctorHomeScreenComponent } from './screens/doctor-home-screen/doctor-home-screen.component';



@NgModule({
  declarations: [NewDoctorScreenComponent, DeleteDoctorScreenComponent, UpdateDoctorScreenComponent, GetDoctorScreenComponent, GetByRutDoctorScreenComponent, DoctorHomeScreenComponent],
  imports: [
    CommonModule
  ]
})
export class DoctorsModule { }
