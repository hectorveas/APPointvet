import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { DateUpdateComponent } from './components/date-update/date-update.component';
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
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UserDatesScreenComponent } from './screens/user-dates-screen/user-dates-screen.component';
import { DatesModule } from '@shared/modules/dates/dates.module';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

const components = [
  DateUpdateComponent,
  UserHomeScreenComponent, UserHelpScreenComponent,
  UserMeScreenComponent, UserSpecialContactScreenComponent,
  SidebarComponent, UserDatesScreenComponent,
  ModalFormComponent
];

const material = [
  MatButtonModule, MatIconModule,
  MatListModule, MatMenuModule,
  MatInputModule, FormsModule,
  LayoutModule, MatToolbarModule,
  MatSidenavModule, MatSelectModule,
  MatRadioModule, MatCardModule
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule, PatientRoutingModule,
    SharedModule, ReactiveFormsModule,
    ...material, DatesModule, 
  ],
  providers: [DateProviderService, PatientProviderService],
  exports: [...components]
})
export class PatientModule { }
