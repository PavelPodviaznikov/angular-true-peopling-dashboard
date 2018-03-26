import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {}

  filter = this.usersService.filter;

  users$ = this.usersService.users$;

  displayedColumns = ['firstName', 'lastName', 'email', 'role', 'actions'];
}
