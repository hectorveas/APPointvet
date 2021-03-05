import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'visitor/inicio',
    pathMatch: 'full'
  },
  {
    path: 'doctor',
    loadChildren: () => import('./doctor/doctor.module')
      .then(DoctorModule => DoctorModule.DoctorModule)
  },
  {
    path: 'paciente',
    loadChildren: () => import('./patient/patient.module')
      .then(PatientModule => PatientModule.PatientModule)
  },
  {
    path: 'visitante',
    loadChildren: () => import('./visitor/visitor.module')
      .then(VisitorModule => VisitorModule.VisitorModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(AdminModule => AdminModule.AdminModule)
  },
  {
    path: '**',
    redirectTo: 'visitor/inicio',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
