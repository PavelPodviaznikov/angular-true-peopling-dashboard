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
import { CreateUserBtnComponent } from './users/components/buttons/create-user-btn/create-user-btn.component';
import { EditUserBtnComponent } from './users/components/buttons/edit-user-btn/edit-user-btn.component';
import { DeleteUserBtnComponent } from './users/components/buttons/delete-user-btn/delete-user-btn.component';
import { UserDialogComponent } from './users/components/dialogs/user-dialog/user.dialog.component';
import { UserDialogService } from './users/components/dialogs/user-dialog/user.dialog.service';

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
    FilterPipe,
    CreateUserBtnComponent,
    EditUserBtnComponent,
    DeleteUserBtnComponent,
    UserDialogComponent
  ],
  providers: [ UsersService, UserDialogService ],
  entryComponents: [UserDialogComponent]
})
export class DashboardModule { }
