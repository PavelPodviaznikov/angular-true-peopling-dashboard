import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-action-panel',
  templateUrl: './action-panel.component.html',
  styleUrls: ['./action-panel.component.css']
})
export class ActionPanelComponent implements OnInit {
  constructor(
    private usersService: UsersService
  ) { }
  ngOnInit() {}

  filter = this.usersService.filter;

  onAddUser() {}
}
