import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  employees: any[] = [
    {
      id: 1,
      name: 'Tahmina Khatoon',
      email: 'tahmina@brainstation-23.com',
      salary: '30000',
    },
    {
      id: 2,
      name: 'Abi Abdullah',
      email: 'abi.abdullah@brainstation-23.com',
      salary: '20000',
    },
    {
      id: 3,
      name: 'Md. Mehedi Hasan',
      email: 'hasan.mehedi@brainstation-23.com',
      salary: '10000',
    },
  ];

  employees1: any[] = [];
  currentEmployee: any;

  ngOnInit() {
    this.employees1 = this.employees;
  }

  addEmployee() {
    //console.log(this.loginForm.value);
    let num = this.employees1.length + 1;
    //console.log("ID",num);
    this.employees.push({
      id: num,
      name: this.loginForm.value.name,
      email: this.loginForm.value.email,
      salary: this.loginForm.value.salary,
    });
    alert(`Added ${this.loginForm.value.name}'s Details Successfully!`);
    this.employees1 = this.employees;
  }

  searchEmployee(event: string) {
    this.employees1 = this.employees.filter((item) => {
      return item.name.toLowerCase().includes(event.toLowerCase());
    });
    //console.log(this.employees);
    //console.log(event);
  }

  clearSearch(event: any) {
    (document.getElementById('search') as HTMLInputElement).value = '';
    this.employees1 = this.employees;
  }

  deleteEmployee(id: number) {
    //console.log(id);
    if (confirm(`Are you sure to delete this details`)) {
      this.employees = this.employees1.filter((emp) => emp.id !== id);
      alert(`Deleted The Details Successfully!`);
      this.employees1 = this.employees;
    }
  }

  editIt(employee: any) {
    //console.log(employee);
    this.currentEmployee = employee;
    this.editForm.controls.name.setValue(employee.name);
    this.editForm.controls.email.setValue(employee.email);
    this.editForm.controls.salary.setValue(employee.salary);
  }

  updateEmployee() {
    let id = this.employees1.findIndex((emp) => emp === this.currentEmployee);
    //console.log(id);
    this.employees1[id] = {
      id: this.employees1[id].id,
      name: this.editForm.controls.name.value,
      email: this.editForm.controls.email.value,
      salary: this.editForm.controls.salary.value,
    };
    alert(`Updated The Details Successfully!`);
    //console.log(this.employees1[id]);
  }

  loginForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      //Validators.minLength(4),
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email,
      //Validators.minLength(4),
    ]),

    salary: new FormControl('', [Validators.required]),
  });

  editForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      //Validators.minLength(4),
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email,
      //Validators.minLength(4),
    ]),

    salary: new FormControl('', [Validators.required]),
  });

  addUser() {
    //console.log(this.loginForm.value);
    this.loginForm.reset();
  }

  clearEdit() {
    //console.log(this.editForm.value);
    this.editForm.reset();
  }
}
