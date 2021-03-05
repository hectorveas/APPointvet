import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDateCardComponent } from './new-date-card/new-date-card.component';
import { DeleteDateCardComponent } from './delete-date-card/delete-date-card.component';
import { DateCardComponent } from './date-card/date-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  NewDateCardComponent, DeleteDateCardComponent,
  DateCardComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule, ReactiveFormsModule,
    FormsModule
  ],
  exports: [...components]
})
export class DatesModule { }
