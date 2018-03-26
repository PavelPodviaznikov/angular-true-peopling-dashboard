import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import User from '../../../../../_common/models/user.model';

interface dialogData {
  user: User,
  submitDialogHandler: Function,
  closeDialogHandler: Function
}

@Component({
  selector: 'app-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrls: ['./confirm-delete-dialog.component.css']
})
export class ConfirmDeleteDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: dialogData) {}

  ngOnInit() {}

  config = {
    user: this.data.user.fullName,
    processing: false,
    actions: {
      submit: "Delete",
      cancel: "Cancel"
    }
  };

  submit() {
    this.config.processing = true;

    this.data.submitDialogHandler(this.data.user).subscribe(() => {
      this.config.processing = false;
      this.close();
    });
  }

  close() {
    this.data.closeDialogHandler();
  }
}
