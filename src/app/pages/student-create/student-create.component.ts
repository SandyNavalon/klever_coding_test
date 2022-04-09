import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent implements OnInit {
  createForm:FormGroup;

  constructor(
    public formBuilder:FormBuilder,
    private studentService:StudentService,
    private router:Router,
    )
    {

    this.createForm = this.formBuilder.group({
      full_name:'',
      email:'',
      course:'',
      studentId:''
    })

  }

  ngOnInit(): void {
  }

  sendData():any {
    // console.log('Click!');
    // console.log(this.createForm.value);

    this.studentService.createStudent(this.createForm.value).subscribe(()=>{
      this.router.navigateByUrl('student-list')

});

  }

}
