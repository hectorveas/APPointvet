import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Appointment } from '@core/models/appointment.model';
import * as moment from 'moment';

@Component({
  selector: 'doctor-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.less']
})
export class ModalFormComponent implements OnChanges {
  
  @Input() option: number;
  @Input() cita: Appointment | null;
  public date: string | null;

  addressForm1 = this.fb.group({
    nombre: [null, Validators.required],
    apellido: [null, Validators.required],
    fecha: [null, Validators.required],
    descripcion: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(250)])
    ],
  });

  addressForm2 = this.fb.group({
    nombre: [null, Validators.required],
    apellido: [null, Validators.required],
    fecha: [null, Validators.required],
    descripcion: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(250)])
    ],
    status: 2
  });

  addressForm3 = this.fb.group({
    nombre: [null, Validators.required],
    apellido: [null, Validators.required],
    rut: [null, Validators.compose([
      Validators.required, Validators.minLength(10), Validators.maxLength(10)])
    ],
    telefono: [null, Validators.required],
    fecha: [null, Validators.required],
    email: [null, Validators.compose([
      Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
    ]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {
    this.option = 0;
    this.cita = null;
    this.date = null;
  };

  ngOnChanges(): void {
    console.log(this.cita);
    this.date = moment(this.cita?.createdAt).format('LLL');
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}