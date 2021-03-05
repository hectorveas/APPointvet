import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { DateUpdateComponent } from './components/date-update/date-update.component';
import { UserLoginScreenComponent } from './screens/user-login-screen/user-login-screen.component';
import { UserHomeScreenComponent } from './screens/user-home-screen/user-home-screen.component';
import { UserHelpScreenComponent } from './screens/user-help-screen/user-help-screen.component';
import { UserMeScreenComponent } from './screens/user-me-screen/user-me-screen.component';
import { UserSpecialContactScreenComponent } from './screens/user-special-contact-screen/user-special-contact-screen.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { DateProviderService } from '@core/providers/dates/date-provider.service';
import { PatientProviderService } from '@core/providers/patients/patient-provider.service';

const components = [
  DateUpdateComponent, UserLoginScreenComponent,
  UserHomeScreenComponent, UserHelpScreenComponent,
  UserMeScreenComponent, UserSpecialContactScreenComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule, PatientRoutingModule,
    SharedModule, ReactiveFormsModule,
    MatButtonModule, MatIconModule,
    MatListModule, MatMenuModule,
    MatInputModule, FormsModule
  ],
  providers: [DateProviderService, PatientProviderService],
  exports: [...components]
})
export class PatientModule { }
