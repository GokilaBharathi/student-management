import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.scss'],
})
export class AddEditStudentComponent implements OnInit {
  studentForm!: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<AddEditStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.buildStudentForm();
  }

  ngOnInit(): void {}

  buildStudentForm() {
    this.studentForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      fatherName: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      motherName: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      dob: new FormControl(null, [Validators.required]),
      class: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  saveStudent() {
    this.studentForm.markAllAsTouched();
    if (this.studentForm.valid) {
      const data = this.studentForm.value;
      this.dialogRef.close(data);
    } else {
      alert('Please enter valid details.');
    }
    console.log(this.studentForm);
  }
}
