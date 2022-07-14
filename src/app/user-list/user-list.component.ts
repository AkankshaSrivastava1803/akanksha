import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UsersListComponent implements OnInit {
  public myUsers: Array<{ id: number; name: string; Salary: number;doj: Date}> = [
    { id: 1, name: "Rahul", Salary: 40000, doj:new Date(1,9,2000) },
    { id: 2, name: "abc", Salary: 300000, doj:new Date(1,9,2000)},
    { id: 3, name: "eef", Salary: 500000, doj:new Date(1,9,2000) },
    { id: 4, name: "gh", Salary: 400000, doj:new Date(1,9,2000) },
  ];
  constructor() {}

  ngOnInit(): void {}
}
