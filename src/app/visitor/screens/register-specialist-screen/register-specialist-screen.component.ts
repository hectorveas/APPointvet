import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-specialist-screen',
  templateUrl: './register-specialist-screen.component.html',
  styleUrls: ['./register-specialist-screen.component.less']
})
export class RegisterSpecialistScreenComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public getCurrentRoute(): string {
    if (this.router.url === '/visito/registrate') return 'paciente';
    return 'personal';
  };

}