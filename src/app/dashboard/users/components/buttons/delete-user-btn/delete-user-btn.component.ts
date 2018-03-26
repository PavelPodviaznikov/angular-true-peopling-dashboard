import { Component, OnInit, Input } from '@angular/core';
import User from '../../../../../_common/models/user.model';
import { ConfirmDeleteDialogService } from '../../dialogs/confirm-delete-dialog/confirm.delete.dialog.service';

@Component({
  selector: 'app-delete-user-btn',
  templateUrl: './delete-user-btn.component.html',
  styleUrls: ['./delete-user-btn.component.css']
})
export class DeleteUserBtnComponent implements OnInit {
  constructor(
    private dialog: ConfirmDeleteDialogService
  ) { }

  ngOnInit() {}

  @Input() user: User;

  onClick() {
    this.dialog.openDialog(this.user);
  }

}
