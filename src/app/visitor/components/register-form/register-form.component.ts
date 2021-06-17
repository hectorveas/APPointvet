import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DoctorProviderService } from '@core/providers/doctors/doctor-provider.service';
import { PatientProviderService } from '@core/providers/patients/patient-provider.service';
import { NotificationService } from '@core/services/notification/notification.service';

@Component({
  selector: 'visitor-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.less']
})
export class RegisterFormComponent {

  @Input() opcion: number;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private petOwnerProvider: PatientProviderService,
    private specialistProvider: DoctorProviderService
  ) {
    this.opcion = 0;
  }

  addressForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    rut: [null, Validators.compose([
      Validators.required, Validators.minLength(10), Validators.maxLength(10)])
    ],
    phone: [null, Validators.compose([
      Validators.required, Validators.minLength(9), Validators.maxLength(9)])
    ],
    mail: [null, Validators.compose([
      Validators.required, Validators.email])
    ],
    password: [null, Validators.compose([
      Validators.required, Validators.minLength(8), Validators.maxLength(32)])
    ],
  });

  async onSubmit() {
    switch (this.opcion) {
      case 1:
        if (this.addressForm?.valid) {
          try {
            await this.petOwnerProvider.postPacient(this.addressForm?.value).toPromise()
            this.notificationService.success('Se ha registrado con exito!');
            this.addressForm.reset();
            return;
          } catch (error) {
            this.notificationService.error('No hemos registrarlo(a) en el sistema');
            return;
          };
        };
        break;
      case 2:
        if (this.addressForm?.valid) {
          try {
            await this.specialistProvider.postSpecialist(this.addressForm?.value).toPromise()
            this.notificationService.success('Se ha registrado con exito!');
            this.addressForm.reset();
            return;
          } catch (error) {
            this.notificationService.error('No hemos registrarlo(a) en el sistema');
            return;
          };
        };
        break;
    }
  }
}