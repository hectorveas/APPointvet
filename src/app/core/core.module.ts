import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http/http.service';
import { FormService} from '../core/services/form/form.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const services = [
  HttpService,
  FormService
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [...services]
})
export class CoreModule { }
