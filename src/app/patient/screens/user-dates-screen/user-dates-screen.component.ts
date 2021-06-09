import { Component, OnInit } from '@angular/core';
import { Appointment } from '@core/models/appointment.model';
import { DateProviderService } from '@core/providers/dates/date-provider.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-dates-screen',
  templateUrl: './user-dates-screen.component.html',
  styleUrls: ['./user-dates-screen.component.less']
})
export class UserDatesScreenComponent implements OnInit {

  public citas$: Observable<Appointment[]>;
  public opciones!: number;
  public citaSeleccionada: Appointment | null;
  
  constructor(private citasProvider: DateProviderService) {
    this.citaSeleccionada = null;
    this.citas$ = this.citasProvider.getAllAppointments();
  };

  ngOnInit(): void {};

  setOption(numero: number) {
    this.opciones = numero;
  };

  seleccionarCita(cita: Appointment) {
    this.citaSeleccionada = cita;
  };

};
