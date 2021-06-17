import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProviderService } from '@core/providers/auth/auth-provider.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit, OnChanges {

  constructor(public router: Router, private authProvider: AuthProviderService) { }

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
  
  public goToSession(route: string): void{
    if (route === 'visitor') {
      this.router.navigate(['/visitor/login']);
    } else {
      this.authProvider.logout();
    }
  };

  public getCurrentRoute(): string{
    if (this.router.url === '/visitor/inicio') return 'visitor';
    if (this.router.url === '/visitor/login') return 'visitor';
    if (this.router.url === '/visitor/contactanos') return 'visitor';
    if (this.router.url === '/visitor/registrate') return 'visitor';
    if (this.router.url === '/visitor/registratePersonal') return 'visitor';
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