import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../_common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent, 
    UsersComponent, 
    DashboardComponent
  ]
})
export class DashboardModule { }
