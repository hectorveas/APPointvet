import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '@core/guards/auth-guard.guard';
import { HomeScreenComponent } from '@visitor/screens/home-screen/home-screen.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserDatesScreenComponent } from './screens/user-dates-screen/user-dates-screen.component';
import { UserHelpScreenComponent } from './screens/user-help-screen/user-help-screen.component';
import { UserHomeScreenComponent } from './screens/user-home-screen/user-home-screen.component';
import { UserMeScreenComponent } from './screens/user-me-screen/user-me-screen.component';
import { UserSpecialContactScreenComponent } from './screens/user-special-contact-screen/user-special-contact-screen.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    //canActivate: [AuthGuardGuard],
    children: [
      { path: 'me', component: UserMeScreenComponent },
      { path: 'ayuda', component: UserHelpScreenComponent },
      { path: 'inicio', component: UserHomeScreenComponent },
      { path: 'citas', component: UserDatesScreenComponent },
      { path: 'contacto', component: UserSpecialContactScreenComponent },
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
