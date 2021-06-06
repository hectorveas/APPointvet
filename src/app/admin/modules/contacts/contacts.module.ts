import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactHomeScreenComponent } from './screens/contact-home-screen/contact-home-screen.component';
import { NewContactScreenComponent } from './screens/new-contact-screen/new-contact-screen.component';
import { DeleteContactScreenComponent } from './screens/delete-contact-screen/delete-contact-screen.component';
import { UpdateContactScreenComponent } from './screens/update-contact-screen/update-contact-screen.component';
import { GetContactScreenComponent } from './screens/get-contact-screen/get-contact-screen.component';



@NgModule({
  declarations: [ContactHomeScreenComponent, NewContactScreenComponent, DeleteContactScreenComponent, UpdateContactScreenComponent, GetContactScreenComponent],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
