import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit, OnChanges {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.getScreenSize();
  }

  public getScreenSize(): string {
    if (window.screen.width <= 767) return 'enana';
    else return 'normal';
  };

  public goToHome(): void{
    this.router.navigate(['/visitor/inicio']);
  };
  
  public goToContact(): void{
    this.router.navigate(['/visitor/contactanos']);
  };
  
  public goToSession(): void{
    this.router.navigate(['/visitor/login']);
  };

  public getCurrentRoute(): string{
    if (this.router.url === '/visitor/inicio') return 'visitor';
    if (this.router.url === '/visitor/login') return 'visitor';
    if (this.router.url === '/visitor/contactanos') return 'visitor';
    if (this.router.url === '/visitor/registrate') return 'visitor';
    if (this.router.url === '/visitor/encuentranos') return 'visitor';
    /* --------------------------- */
    if (this.router.url === '/paciente/me') return 'paciente';
    if (this.router.url === '/paciente/ayuda') return 'paciente';
    if (this.router.url === '/paciente/contacto') return 'paciente';
    if (this.router.url === '/paciente/incio') return 'paciente';
    if (this.router.url === '/paciente/citas') return 'paciente';
    /* --------------------------- */
    if (this.router.url === '/doctor/me') return 'doctor';
    if (this.router.url === '/doctor/ayuda') return 'doctor';
    if (this.router.url === '/doctor/incio') return 'doctor';
    if (this.router.url === '/doctor/citas') return 'doctor';
    return 'user';
  };

}