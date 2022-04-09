import { Student } from './../../models/student.model';
import { StudentService } from 'src/app/services/student.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-student-modify',
  templateUrl: './student-modify.component.html',
  styleUrls: ['./student-modify.component.scss']
})
export class StudentModifyComponent implements OnInit {
  studentForm:FormGroup;
  modifyId:any;


  constructor(
    private activatedRoute:ActivatedRoute,
    private studentService:StudentService,
    public FormBuilder:FormBuilder,
    private router:Router
    ) {
    this.modifyId = this.activatedRoute.snapshot.paramMap.get('idStudent');
    console.log(this.modifyId);

    this.studentService.studentList().subscribe(res => {
      console.log(res);

    })

    this.studentForm = this.FormBuilder.group(
      {
        full_name:'',
        email:'',
        course:'',
      }
    )

    }

  ngOnInit(): void {
  }

  sendData():any{
    // console.log(this.modifyId);
    // console.log(this.studentForm.value);

    this.studentService.modifyStudent(this.modifyId, this.studentForm.value).subscribe(()=>{
          this.router.navigateByUrl('student-list')

    });


  }

}
