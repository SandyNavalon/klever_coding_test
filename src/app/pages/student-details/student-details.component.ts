import { StudentService } from 'src/app/services/student.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})



export class StudentDetailsComponent implements OnInit {
  Marks:any;

  constructor( private studentService:StudentService ) { }

  ngOnInit(): void {
    this.studentService.getMarks().subscribe(res=>{
      console.log(res);
      this.Marks = res;

    })

  }



}
