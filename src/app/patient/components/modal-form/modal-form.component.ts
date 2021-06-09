import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Appointment } from '@core/models/appointment.model';

@Component({
  selector: 'patient-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.less']
})
export class ModalFormComponent {

  @Input() option: number;
  @Input() cita: Appointment | null;

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
    ],
    password: [null, Validators.compose([
      Validators.required, Validators.minLength(8)])
    ],
    confirmation: ['No', Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {
    this.option = 0;
    this.cita = null;
  };

  onSubmit(): void {
    alert('Thanks!');
  }
}
