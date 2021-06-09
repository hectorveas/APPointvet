import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Appointment } from '@core/models/appointment.model';
import { DateProviderService } from '@core/providers/dates/date-provider.service';
import { NotificationService } from '@core/services/notification/notification.service';

@Component({
  selector: 'patient-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.less']
})
export class ModalFormComponent {

    @Input() option: number;
    @Input() cita: Appointment | null;

    constructor(
        private fb: FormBuilder,
        private notificationService: NotificationService,
        private dateProvider: DateProviderService
    ) {
        this.option = 0;
        this.cita = null;
    };

    addressForm1 = this.fb.group({
        nombre: [null, Validators.required],
        apellido: [null, Validators.required],
        fecha: [null, Validators.required],
        descripcion: [null, Validators.compose([
            Validators.required, Validators.minLength(5), Validators.maxLength(250)])
        ],
    }); // Add

    addressForm2 = this.fb.group({
        nombre: [null, Validators.required],
        apellido: [null, Validators.required],
        fecha: [null, Validators.required],
        descripcion: [null, Validators.compose([
            Validators.required, Validators.minLength(5), Validators.maxLength(250)])
        ],
        status: 2
    }); // Modify

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
    }); // Delete

    hasUnitNumber = false;

    async onSubmit(): Promise<void> {
        if (this.addressForm1?.valid) {
            try {
                await this.dateProvider.postAppointment(this.addressForm1?.value).toPromise()
                this.notificationService.success('Su cita ha sido agregada con exito!');
                return;
            } catch (error) {
                this.notificationService.error('No hemos podido ingresar su cita');
                return;
            };
        }
    }
}