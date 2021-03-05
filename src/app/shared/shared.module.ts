import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  NavbarComponent, SidebarComponent,
  FooterComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule, ReactiveFormsModule,
    FormsModule
  ],
  exports: [...components]
})
export class SharedModule { }
