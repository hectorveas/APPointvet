import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'visitor-contactus-screen-form',
  templateUrl: './contactus-screen-form.component.html',
  styleUrls: ['./contactus-screen-form.component.less']
})
export class ContactusScreenFormComponent {
  addressForm = this.fb.group({
    nombre: [null, Validators.compose([
      Validators.required, Validators.minLength(3), Validators.maxLength(20)])
    ],
    apellido: [null, Validators.compose([
      Validators.required, Validators.minLength(3), Validators.maxLength(20)])
    ],
    RUT: [null, Validators.compose([
      Validators.required, Validators.minLength(10), Validators.maxLength(10)])
    ],
    codigo: [null, Validators.required],
    telefono: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(20)])
    ],
    mail: [null, Validators.required],
    description: [null, Validators.required],
  });

  hasUnitNumber = false;

  states = [
    { name: 'Aruba', abbreviation: '+297' },
    { name: 'Argenitna', abbreviation: '+54' },
    { name: 'Bolivia', abbreviation: '+591' },
    { name: 'Brasil', abbreviation: '+55' },
    { name: 'Chile', abbreviation: '+56' },
    { name: 'Colombia', abbreviation: '+57' },
    { name: 'Ecuador', abbreviation: '+593' },
    { name: 'Perú', abbreviation: '+51' },
    { name: 'Paraguay', abbreviation: '+595' },
    { name: 'Uruguay', abbreviation: '+598' },
    { name: 'Venezuela', abbreviation: '+58' },
  ];

  constructor(private fb: FormBuilder) { }

  onSubmit(): void {
    this.addressForm.reset();
    alert('Thanks!');
  }
}