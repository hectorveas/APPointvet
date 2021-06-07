import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '@core/guards/auth-guard.guard';
import { HomeScreenComponent } from '@visitor/screens/home-screen/home-screen.component';
import { DoctorHelpScreenComponent } from './screens/doctor-help-screen/doctor-help-screen.component';
import { DoctorHomeScreenComponent } from './screens/doctor-home-screen/doctor-home-screen.component';
import { DoctorMeScreenComponent } from './screens/doctor-me-screen/doctor-me-screen.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardGuard],
    children: [
      { path: 'me', component: DoctorMeScreenComponent },
      { path: 'help', component: DoctorHelpScreenComponent },
      { path: 'home', component: DoctorHomeScreenComponent },
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
