import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialistGuard } from '@core/guards/specialist/specialist.guard';
import { HomeScreenComponent } from '@visitor/screens/home-screen/home-screen.component';
import { DoctorDatesScreenComponent } from './screens/doctor-dates-screen/doctor-dates-screen.component';
import { DoctorHelpScreenComponent } from './screens/doctor-help-screen/doctor-help-screen.component';
import { DoctorHomeScreenComponent } from './screens/doctor-home-screen/doctor-home-screen.component';
import { DoctorMeScreenComponent } from './screens/doctor-me-screen/doctor-me-screen.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorHomeScreenComponent,
    canActivate: [SpecialistGuard],
    children: [
      { path: 'me', component: DoctorMeScreenComponent },
      { path: 'ayuda', component: DoctorHelpScreenComponent },
      { path: 'citas', component: DoctorDatesScreenComponent },
    ]
  },
  {
    path: '**',
    redirectTo: 'visitor/inicio',
    component: HomeScreenComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
