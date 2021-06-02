import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from '@visitor/screens/home-screen/home-screen.component';

const routes: Routes = [
  {
    path: '',
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
    loadChildren: () => import('./doctor/doctor.module')
      .then(DoctorModule => DoctorModule.DoctorModule)
  },
  {
    path: 'paciente',
    loadChildren: () => import('./patient/patient.module')
      .then(PatientModule => PatientModule.PatientModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(AdminModule => AdminModule.AdminModule)
  },
  {
    path: '**',
    component: HomeScreenComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
