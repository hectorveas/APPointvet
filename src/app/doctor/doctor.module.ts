import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DateUpdateComponent } from './components/date-update/date-update.component';
import { DoctorHomeScreenComponent } from './screens/doctor-home-screen/doctor-home-screen.component';
import { DoctorHelpScreenComponent } from './screens/doctor-help-screen/doctor-help-screen.component';
import { DoctorMeScreenComponent } from './screens/doctor-me-screen/doctor-me-screen.component';
import { DateProviderService } from '@core/providers/dates/date-provider.service';
import { DoctorProviderService } from '@core/providers/doctors/doctor-provider.service';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { DoctorDatesScreenComponent } from './screens/doctor-dates-screen/doctor-dates-screen.component';
import { DatesModule } from '@shared/modules/dates/dates.module';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

const components = [
  DateUpdateComponent,
  DoctorHomeScreenComponent, DoctorHelpScreenComponent,
  DoctorMeScreenComponent, DoctorDatesScreenComponent,
  ModalFormComponent
];

const material = [
  MatButtonModule, MatIconModule,
  MatListModule, MatMenuModule,
  MatInputModule, FormsModule,
  MatSelectModule, MatRadioModule,
  MatCardModule
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule, DoctorRoutingModule,
    SharedModule, ReactiveFormsModule,
    ...material, DatesModule
  ],
  providers: [DateProviderService, DoctorProviderService],
  exports: [...components]
})
export class DoctorModule { }
