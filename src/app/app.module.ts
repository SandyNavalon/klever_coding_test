import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { StudentCreateComponent } from './pages/student-create/student-create.component';
import { StudentModifyComponent } from './pages/student-modify/student-modify.component';
import { StudentDeleteComponent } from './pages/student-delete/student-delete.component';
import { NavbarComponent } from './core/navbar/navbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
import { StudentCreateMarksComponent } from './pages/student-create-marks/student-create-marks.component'
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentCreateComponent,
    StudentModifyComponent,
    StudentDeleteComponent,
    NavbarComponent,
    StudentDetailsComponent,
    StudentCreateMarksComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
