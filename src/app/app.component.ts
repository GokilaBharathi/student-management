import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { AddEditStudentComponent } from './add-edit-student/add-edit-student.component';

export interface Student {
  name: string;
  fatherName: string;
  motherName: string;
  dob: string;
  class: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'student-management';
  displayedColumns: string[] = ['name', 'parentsName', 'dob', 'class'];
  dataSource: Student[] = [];

  constructor(private dialog: MatDialog) {
  }

  openAddEditStudentDialog() {
    const config: MatDialogConfig = {
      width: '450px',
      data: { name: 'gokilabharathi' },
    };
    const dialogRef: MatDialogRef<AddEditStudentComponent> = this.dialog.open(
      AddEditStudentComponent,
      config
    );
    dialogRef.afterClosed().subscribe((data: Student) => {
      const studentList: Student[] = Array.apply([], this.dataSource) as Array<Student>;
      studentList.push(data);
      this.dataSource = studentList;
    });
  }
}
