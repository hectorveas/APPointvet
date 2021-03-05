import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeScreenComponent } from './screens/home-screen/admin-home-screen.component';
import { AdminLoginScreenComponent } from './screens/login-screen/admin-login-screen.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLoginScreenComponent,
    pathMatch: 'full'
  },
  { path: 'home', component: AdminHomeScreenComponent },
  {
    path: '**',
    component: AdminLoginScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
