import { StudentCreateMarksComponent } from './pages/student-create-marks/student-create-marks.component';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentListComponent } from './pages/student-list/student-list.component';
import { StudentDeleteComponent } from './pages/student-delete/student-delete.component';
import { StudentModifyComponent } from './pages/student-modify/student-modify.component';
import { StudentCreateComponent } from './pages/student-create/student-create.component';

const routes: Routes = [
  {
    path:'', pathMatch:'full', redirectTo:'student-list'
  },
  {
    path:'student-list', component: StudentListComponent
  },
  {
    path:'student-details', component: StudentDetailsComponent
  },
  {
    path:'student-create-marks/:idStudent', component: StudentCreateMarksComponent
  },
  {
    path:'student-create', component: StudentCreateComponent
  },
  {
    path:'student-modify/:idStudent', component: StudentModifyComponent
  },
  {
    path:'student-delete', component: StudentDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
