import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '@core/guards/auth-guard.guard';
import { HomeScreenComponent } from '@visitor/screens/home-screen/home-screen.component';
import { UserHelpScreenComponent } from './screens/user-help-screen/user-help-screen.component';
import { UserHomeScreenComponent } from './screens/user-home-screen/user-home-screen.component';
import { UserMeScreenComponent } from './screens/user-me-screen/user-me-screen.component';
import { UserSpecialContactScreenComponent } from './screens/user-special-contact-screen/user-special-contact-screen.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardGuard],
    children: [
      { path: 'me', component: UserMeScreenComponent },
      { path: 'help', component: UserHelpScreenComponent },
      { path: 'home', component: UserHomeScreenComponent },
      { path: 'specialContact', component: UserSpecialContactScreenComponent },
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
export class PatientRoutingModule { }
