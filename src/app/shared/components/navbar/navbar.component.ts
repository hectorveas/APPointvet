import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public getScreenSize(): string {
    if (screen.width <= 605) return 'enana';
    if (screen.width <= 809 && screen.width >= 769) return 'enana';
    if (screen.width <= 993 && screen.width >= 769) return 'enana';
    if (screen.width <= 1209 && screen.width >= 993) return 'enana';
    return 'normal';
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
    return 'user';
  };

}
