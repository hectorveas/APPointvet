import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDateScreenComponent } from './screens/new-date-screen/new-date-screen.component';
import { DeleteDateScreenComponent } from './screens/delete-date-screen/delete-date-screen.component';
import { UpdateDateScreenComponent } from './screens/update-date-screen/update-date-screen.component';
import { GetDateScreenComponent } from './screens/get-date-screen/get-date-screen.component';
import { DateHomeScreenComponent } from './screens/date-home-screen/date-home-screen.component';



@NgModule({
  declarations: [NewDateScreenComponent, DeleteDateScreenComponent, UpdateDateScreenComponent, GetDateScreenComponent, DateHomeScreenComponent],
  imports: [
    CommonModule
  ]
})
export class DatesModule { }
