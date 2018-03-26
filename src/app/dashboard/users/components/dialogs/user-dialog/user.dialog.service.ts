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

  private dialogRef;

  openDialog(user?) {
    const me = this;

    user = user || User.defaultUser();

    this.dialogRef = this.dialog.open(UserDialogComponent, {
      data: {
        user,
        submitDialogHandler(user) {
          me.submit(user);
        },
        closeDialogHandler() {
          me.dialog.closeAll();
        }
      }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  submit(user) {
    this.usersService.saveUser(user).subscribe(() => {
      console.log('saved')
    });
  }
}
