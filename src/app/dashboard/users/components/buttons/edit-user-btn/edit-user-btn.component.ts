import { Component, OnInit, Input } from '@angular/core';
import User from '../../../../../_common/models/user.model';
import { UserDialogService } from '../../dialogs/user-dialog/user.dialog.service';

@Component({
  selector: 'app-edit-user-btn',
  templateUrl: './edit-user-btn.component.html',
  styleUrls: ['./edit-user-btn.component.css']
})
export class EditUserBtnComponent implements OnInit {
  constructor(
    private dialog:UserDialogService
  ) { }

  ngOnInit() {}

  @Input() user: User;

  onClick() {
    this.dialog.openDialog(this.user);
  }
}
