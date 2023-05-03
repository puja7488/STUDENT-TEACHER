import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istudent } from 'src/assets/student/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit{
 //public student!:Istudent;
 public student = new Istudent();

  public studentList: Istudent[] = [];

   public isUpdate = false;

  constructor(private studentService: StudentService){}
  ngOnInit(): void {
   this.loadStudents();
  }

  onSubmit() {
    if (this.student?.firstname) {
      //console.log(this.student)
     // this.studentList.push(this.student);
  
      this.studentService.saveStudent(this.student).subscribe(() => {
       this.loadStudents();
      });
      this.student = new Istudent();
    }
  }
  onDelete(studentId: number) {
    //this.studentList.splice(i, 1);
     this.studentService.deleteStudent(studentId).subscribe(() => {
      this.loadStudents();
        // add tost here
      });
  }
  onEditClick(index: number) {
    this.isUpdate=true;
    this.student=this.studentList[index];
  }

  updateStudent(){
   this.isUpdate = !this.isUpdate;
   this.studentService.editStudent(this.student).subscribe(()=>{
    this.loadStudents();
   });
   this.student = new Istudent();
 }

 private loadStudents(){
    this.studentService.getStudents().subscribe((allStudentsData: Istudent[]) => {
      //console.log(allStudentsData);
      this.studentList=allStudentsData;
    });
  }
}
