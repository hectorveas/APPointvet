import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusScreenFormComponent } from './screens/contactus-screen-form/contactus-screen-form.component';
import { ContactusScreenComponent } from './screens/contactus-screen/contactus-screen.component';
import { FindusScreenComponent } from './screens/findus-screen/findus-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegisterScreenComponent } from './screens/register-screen/register-screen.component';
import { VisitorModule } from './visitor.module';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'inicio', component: HomeScreenComponent },
      { path: 'login', component: LoginScreenComponent },
      { path: 'contactanos', component: ContactusScreenFormComponent },
      { path: 'registrate', component: RegisterScreenComponent },
      { path: 'encuentranos', component: FindusScreenComponent },
    ]
  },
  {
    path: '**',
    redirectTo: 'inicio',
    component: HomeScreenComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
