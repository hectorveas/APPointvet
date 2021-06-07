import { Component, Input, OnInit } from '@angular/core';
import { Appointment } from '@core/models/appointment.model';
import * as moment from 'moment';

@Component({
  selector: 'dates-module-date-card',
  templateUrl: './date-card.component.html',
  styleUrls: ['./date-card.component.less']
})
export class DateCardComponent implements OnInit {

  @Input() public cita: Appointment | null;
  public date: string | null;

  constructor() {
    this.cita = null;
    this.date = null;
  }

  ngOnInit(): void {
    this.date = moment(this.cita?.createdAt).format('LLL');
  }

}
