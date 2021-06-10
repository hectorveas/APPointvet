import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Appointment } from '@core/models/appointment.model';
import { PetOwner } from '@core/models/petOwner.models';
import { DateProviderService } from '@core/providers/dates/date-provider.service';
import { PatientProviderService } from '@core/providers/patients/patient-provider.service';
import { NotificationService } from '@core/services/notification/notification.service';
import * as moment from 'moment';

@Component({
  selector: 'patient-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.less']
})
export class ModalFormComponent {

    @Input() option: number;
    @Input() cita: Appointment | null;
    public date: string | null;

    constructor(
        private fb: FormBuilder,
        private notificationService: NotificationService,
        private dateProvider: DateProviderService,
        private petOwnerProvider: PatientProviderService
    ) {
        this.option = 0;
        this.cita = null;
        this.date = null;
    };

    addressForm1 = this.fb.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        date: [null, Validators.required],
        description: [null, Validators.compose([
            Validators.required, Validators.minLength(5), Validators.maxLength(250)])
        ],
    });

    addressForm2 = this.fb.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        date: [null, Validators.required],
        description: [null, Validators.compose([
            Validators.required, Validators.minLength(5), Validators.maxLength(250)])
        ],
        status: 2
    });

    addressForm3 = this.fb.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        rut: [null, Validators.compose([
            Validators.required, Validators.minLength(10), Validators.maxLength(10)])
        ],
        phone: [null, Validators.required],
        mail: [null, Validators.compose([
            Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
        ]
    });

    hasUnitNumber = false;

    ngOnChanges(): void {
        this.date = moment(this.cita?.createdAt).format('LLL');
    }

    private validation(petOwner: PetOwner, form: FormGroup): boolean {
        if (
            petOwner?.lastName === form?.value?.lastName &&
            petOwner?.mail === form?.value?.mail &&
            petOwner?.rut === form?.value?.rut &&
            petOwner?.phone === form?.value?.phone &&
            petOwner?.firstName === form?.value?.firstName
        ) {
            return true;
        } else {
            this.notificationService.error('Los datos ingresados no coinciden con los registrados');
            this.addressForm3.reset();
            return false;
        };
    };

    async onSubmit(opcion: number): Promise<void> {
        switch (opcion) {
            case 1:
                if (this.addressForm1?.valid) {
                    try {
                        await this.dateProvider.postAppointment(this.addressForm1?.value).toPromise()
                        this.notificationService.success('Su cita ha sido agregada con exito!');
                        this.addressForm1.reset();
                        return;
                    } catch (error) {
                        this.notificationService.error('No hemos podido ingresar su cita');
                        return;
                    };
                }
                break;
            case 2:
                if (this.addressForm2?.valid) {
                    try {
                        await this.dateProvider.updateAppointment(this.cita?._id.toString(),this.addressForm2?.value).toPromise()
                        this.notificationService.success('Su cita ha sido actualizada con exito!');
                        this.addressForm2.reset();
                        return;
                    } catch (error) {
                        this.notificationService.error('No hemos podido actualizar su cita');
                        return;
                    };
                }
                break;
            case 3:
                if (this.addressForm3?.valid) {
                    const petOwnerRut = this.addressForm3?.value?.rut;
                    try {
                        const petOwner: PetOwner = await this.petOwnerProvider.getPacientByRut(petOwnerRut).toPromise();
                        if (this.validation(petOwner, this.addressForm3) === true) {
                            try {
                                await this.dateProvider.deleteAppointment(this.cita?._id.toString()).toPromise()
                                this.notificationService.success('Su cita ha sido eliminada con exito!');
                                this.addressForm3.reset();
                                return;
                            } catch (error) {
                                this.notificationService.error('No hemos podido eliminar su cita');
                                return;
                            };
                        } else {
                            this.addressForm3.reset();
                            this.notificationService.error('Los datos ingresados no coinciden con los registrados');
                            return;
                        }
                    } catch (error) {
                        this.addressForm3.reset();
                        this.notificationService.error('Los datos ingresados no coinciden con los registrados');
                        return;
                    }
                }
                break;
        };
    };
}