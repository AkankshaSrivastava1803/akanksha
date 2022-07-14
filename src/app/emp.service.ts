import { Injectable } from "@angular/core";
import { Employee } from "./Models/Employee";

@Injectable({
  providedIn: "root",
})
export class EmpService {
  public myEmployees: Array<Employee> = [
    {
      Id: 1,
      Firstname: "Rahul",
      Lastname: "Kumar",
      Salary: 60000,
      doj: new Date("28-06-2022"),
    },

    {
      Id: 2,
      Firstname: "Tanya",
      Lastname: "Sharma",
      Salary: 60000,
      doj: new Date("28-06-2022"),
    },

    {
      Id: 3,
      Firstname: "Raunak",
      Lastname: "Sinha",
      Salary: 60000,
      doj: new Date("28-06-2022"),
    },

    {
      Id: 4,
      Firstname: "Anant",
      Lastname: "Singh",
      Salary: 60000,
      doj: new Date("28-06-2022"),
    },
  ];

  constructor() {}

  getAllEmployees(): Employee[] {
    return this.myEmployees;
  }
}