import { Component, OnInit } from "@angular/core";

import { EmpService } from "../emp.service";
import { Employee } from "../Models/Employee";
@Component({
  selector: "app-emplist",
  templateUrl: "./emplist.component.html",
  styleUrls: ["./emplist.component.css"],
})
export class EmplistComponent implements OnInit {
  constructor(private list: EmpService) {}
  public myEmployees: Array<Employee> = [];
  ngOnInit(): void {
    this.myEmployees = this.list.getAllEmployees();
    //console.log(this.myEmployees);
  }
}