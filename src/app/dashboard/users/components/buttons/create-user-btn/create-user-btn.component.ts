import { Component, OnInit } from '@angular/core';
import { UserDialogService } from '../../dialogs/user-dialog/user.dialog.service';

@Component({
  selector: 'app-create-user-btn',
  templateUrl: './create-user-btn.component.html',
  styleUrls: ['./create-user-btn.component.css']
})
export class CreateUserBtnComponent implements OnInit {
  constructor(
    private dialog:UserDialogService
  ) { }

  ngOnInit() {}

  onAddUser() {
    this.dialog.openDialog();
  }
}
