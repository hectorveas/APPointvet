import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DateUpdateComponent } from './components/date-update/date-update.component';
import { DoctorLoginScreenComponent } from './screens/doctor-login-screen/doctor-login-screen.component';
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

const components = [
  DateUpdateComponent, DoctorLoginScreenComponent,
  DoctorHomeScreenComponent, DoctorHelpScreenComponent,
  DoctorMeScreenComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule, DoctorRoutingModule,
    SharedModule, ReactiveFormsModule,
    MatButtonModule, MatIconModule,
    MatListModule, MatMenuModule,
    MatInputModule, FormsModule
  ],
  providers: [DateProviderService, DoctorProviderService],
  exports: [...components]
})
export class DoctorModule { }
