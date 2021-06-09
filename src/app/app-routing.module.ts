import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '@core/guards/admin/admin.guard';
import { PacientGuard } from '@core/guards/pacient/pacient.guard';
import { SpecialistGuard } from '@core/guards/specialist/specialist.guard';
import { HomeScreenComponent } from '@visitor/screens/home-screen/home-screen.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'visitor/inicio',
    component: HomeScreenComponent,
    pathMatch: 'full'
  },
  {
    path: 'visitor',
    loadChildren: () => import('./visitor/visitor.module')
      .then(VisitorModule => VisitorModule.VisitorModule)
  },
  {
    path: 'doctor',
    canActivate: [SpecialistGuard],
    loadChildren: () => import('./doctor/doctor.module')
      .then(DoctorModule => DoctorModule.DoctorModule)
  },
  {
    path: 'paciente',
    canActivate: [PacientGuard],
    loadChildren: () => import('./patient/patient.module')
      .then(PatientModule => PatientModule.PatientModule)
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module')
      .then(AdminModule => AdminModule.AdminModule)
  },
  {
    path: '**',
    redirectTo: 'visitor/inicio',
    component: HomeScreenComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
