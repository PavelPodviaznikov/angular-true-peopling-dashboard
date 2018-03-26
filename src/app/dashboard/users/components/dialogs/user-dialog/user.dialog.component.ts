import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import User from '../../../../../_common/models/user.model';
import roles from '../../../../../_common/enums/roles';

interface dialogData {
  user: User,
  submitDialogHandler: Function,
  closeDialogHandler: Function
}

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user.dialog.component.html',
  styleUrls: ['./user.dialog.component.css']
})
export class UserDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: dialogData) {}

  ngOnInit() {}

  user = {...this.data.user};

  roles = roles;

  config = {
    title: this.user.id ? "Edit user" : "Create user",
    createAnother: false,
    processing: false,
    actions: {
      submit: this.user.id ? "Edit" : "Create",
      cancel: "Cancel"
    }
  };

  submit() {
    this.config.processing = true;

    this.data.submitDialogHandler(this.user).subscribe(() => {
      this.config.processing = false;

      if(!this.config.createAnother) {
        this.close();

        return false;
      }

      this.user = User.defaultUser();
    });
  }

  close() {
    this.data.closeDialogHandler();
  }
}
