import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'visitor-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.less']
})
export class HomeScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goToSearch(): void{
    this.router.navigate(['']);
  };

  public goToContact(): void{
    this.router.navigate(['/visitor/contactanos']);
  };
};