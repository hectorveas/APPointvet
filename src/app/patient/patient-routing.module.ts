import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHelpScreenComponent } from './screens/user-help-screen/user-help-screen.component';
import { UserHomeScreenComponent } from './screens/user-home-screen/user-home-screen.component';
import { UserLoginScreenComponent } from './screens/user-login-screen/user-login-screen.component';
import { UserMeScreenComponent } from './screens/user-me-screen/user-me-screen.component';
import { UserSpecialContactScreenComponent } from './screens/user-special-contact-screen/user-special-contact-screen.component';

const routes: Routes = [
  {
    path: '',
    component: UserLoginScreenComponent,
    pathMatch: 'full'
  },
  { path: 'login', component: UserLoginScreenComponent },
  { path: 'me', component: UserMeScreenComponent },
  { path: 'help', component: UserHelpScreenComponent },
  { path: 'home', component: UserHomeScreenComponent },
  { path: 'specialContact', component: UserSpecialContactScreenComponent },
  {
    path: '**',
    component: UserLoginScreenComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
