import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusScreenComponent } from './screens/contactus-screen/contactus-screen.component';
import { FindusScreenComponent } from './screens/findus-screen/findus-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegisterScreenComponent } from './screens/register-screen/register-screen.component';

const routes: Routes = [
  {
    path: '',
    component: LoginScreenComponent,
    pathMatch: 'full'
  },
  { path: 'login', component: LoginScreenComponent },
  { path: 'contactanos', component: ContactusScreenComponent },
  { path: 'registrate', component: RegisterScreenComponent },
  { path: 'encuentranos', component: FindusScreenComponent },
  {
    path: '**',
    component: LoginScreenComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
