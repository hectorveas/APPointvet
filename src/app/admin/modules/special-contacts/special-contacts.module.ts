import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewContactScreenComponent } from './screens/new-contact-screen/new-contact-screen.component';
import { DeleteContactScreenComponent } from './screens/delete-contact-screen/delete-contact-screen.component';
import { UpdateContactScreenComponent } from './screens/update-contact-screen/update-contact-screen.component';
import { GetContactScreenComponent } from './screens/get-contact-screen/get-contact-screen.component';
import { GetByRutContactScreenComponent } from './screens/get-by-rut-contact-screen/get-by-rut-contact-screen.component';



@NgModule({
  declarations: [NewContactScreenComponent, DeleteContactScreenComponent, UpdateContactScreenComponent, GetContactScreenComponent, GetByRutContactScreenComponent],
  imports: [
    CommonModule
  ]
})
export class SpecialContactsModule { }
