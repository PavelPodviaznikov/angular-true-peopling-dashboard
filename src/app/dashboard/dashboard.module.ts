import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../_common/shared.module';
import { UsersTableComponent } from './users/components/table/users-table.component';
import { ActionPanelComponent } from './users/components/action-panel/action-panel.component';
import { UsersService } from './users/users.service';
import { FilterPipe } from '../_common/pipes/filter';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    UsersComponent,
    UsersTableComponent,
    ActionPanelComponent,
    FilterPipe
  ],
  providers: [ UsersService ]
})
export class DashboardModule { }
