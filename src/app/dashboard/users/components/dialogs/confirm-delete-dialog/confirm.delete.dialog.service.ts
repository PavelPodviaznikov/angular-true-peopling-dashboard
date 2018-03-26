import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import User from '../../../../../_common/models/user.model';
import { UsersService } from '../../../users.service';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog.component';

@Injectable()
export class ConfirmDeleteDialogService {
  constructor(
    private dialog: MatDialog,
    private usersService: UsersService
  ) {

  }

  private dialogRef;

  openDialog(user) {
    if(!user) return;

    const me = this;

    this.dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      data: {
        user,
        submitDialogHandler(user) {
          return me.submit(user);
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
    return this.usersService.deleteUser(user);
  }
}
