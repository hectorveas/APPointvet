import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

const components = [
  NavbarComponent, SidebarComponent,
  FooterComponent
];

const material = [
  MatButtonModule,
  MatIconModule, MatListModule,
  MatMenuModule, MatInputModule,
  FormsModule, LayoutModule,
  MatToolbarModule, MatSidenavModule
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule, ReactiveFormsModule,
    ...material,
  ],
  exports: [...components]
})
export class SharedModule { }
