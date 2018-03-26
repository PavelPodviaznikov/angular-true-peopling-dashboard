import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import User from '../../../../../_common/models/user.model';
import { UserDialogComponent } from './user.dialog.component';
import { UsersService } from '../../../users.service';

@Injectable()
export class UserDialogService {
  constructor(
    private dialog: MatDialog,
    private usersService: UsersService
  ) {

  }

  openDialog(user?) {
    const me = this;

    user = user || User.defaultUser();

    const dialogRef = this.dialog.open(UserDialogComponent, {
      data: {
        user,
        submitDialogHandler(user) {
          me.submit(user);
        }
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  submit(user) {
    this.usersService.saveUser(user);
  }
}
