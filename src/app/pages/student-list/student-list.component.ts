import { Component, OnInit } from '@angular/core';

import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  Students:any;

  constructor( private studentService:StudentService ) { }

  ngOnInit(): void {
    this.studentService.studentList().subscribe(res=>{
      console.log(res);
      this.Students = res;

    })
  }

  deleteStudent(idStudent:any, iControl:any){
    // console.log(idStudent);
    // console.log(iControl);

    if(window.confirm("Are you sure you want to delete this student?"))

    this.studentService.deleteStudent(idStudent).subscribe((res)=>{
      this.Students.splice(iControl, 1);
    })

  }


}
