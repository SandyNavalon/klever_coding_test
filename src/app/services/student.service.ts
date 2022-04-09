import { Marks } from './../models/student.model';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  API_URL: string ='http://localhost:80/student';

  API_URL_DETAILS: string ='http://localhost:80/mark'

  constructor( private httpClient:HttpClient ) { }

  //student methods
  createStudent(studentData:Student):Observable<any>{
    return this.httpClient.post(this.API_URL, studentData);
  }

  studentList(){
    return this.httpClient.get(this.API_URL);
  }

  deleteStudent(idStudent:any):Observable<any>{
    return this.httpClient.delete(this.API_URL+'/'+idStudent)
  }

  modifyStudent(idStudent:any, studentData:any):Observable<any>{
    return this.httpClient.put(this.API_URL+'/'+idStudent, studentData);
  }

  //marks methods
  getMarks():Observable<any>{
    return this.httpClient.get(this.API_URL_DETAILS)
  }

  addMarks(idStudent:any, studentData:any):Observable<any>{
    return this.httpClient.post(this.API_URL_DETAILS+'/gradeStudent/'+idStudent, studentData);
  }


}
