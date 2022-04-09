import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { StudentService } from 'src/app/services/student.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-create-marks',
  templateUrl: './student-create-marks.component.html',
  styleUrls: ['./student-create-marks.component.scss']
})
export class StudentCreateMarksComponent implements OnInit {
  marksForm:FormGroup
  id:any

  constructor(
    private activatedRoute:ActivatedRoute,
    private studentService:StudentService,
    public formBuilder:FormBuilder,
    private router:Router
  ) {

    this.id = this.activatedRoute.snapshot.paramMap.get('idStudent');
    // console.log(this.id);

    this.studentService.getMarks().subscribe(res => {
      // console.log(res);

    })

    this.marksForm = this.formBuilder.group(
      {
        subject:'',
        grade:''
      }
    )
  }

  ngOnInit(): void {
  }

  sendData():any {
    // console.log(this.modifyId);
    // console.log(this.studentForm.value);

    this.studentService.addMarks(this.id, this.marksForm.value).subscribe(()=>{
      this.router.navigateByUrl('student-details')

});

  }
}
