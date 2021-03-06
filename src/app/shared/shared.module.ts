import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    BreadcrumbComponent,
    FooterComponent,
    SidenavComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BreadcrumbComponent,
    FooterComponent,
    SidenavComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
