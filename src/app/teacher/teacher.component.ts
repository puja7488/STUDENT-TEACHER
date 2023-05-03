import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher.service';
import { Iteacher } from 'src/assets/teacher/teacher';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})

export class TeacherComponent implements OnInit {
  //public teacher1!: Iteacher; //varible diclearization
  public teacher = new Iteacher();
  public teacherList: Iteacher[] = [];
  constructor(private teacherService: TeacherService) {}

  ngOnInit(): void {
  this.lodeTeachers();
  }
  onClick(){
   if(this.teacher?.firstname){
  this.teacherService.postTeacher(this.teacher).subscribe(()=>{
    this.lodeTeachers();
  });
  this.teacher = new Iteacher(); 
}
}
OnDeleteTeacher(teacherId:number){
  console.log(teacherId)
  //this.teacherService.deleteTeacher(teacherId).subscribe(()=>{
   // this.lodeTeachers();
 // });
}
editTeacher(index:number){
this.teacher=this.teacherList[index];
}
deleteAll(){
  this.teacherList.forEach(teacher => {
    this.teacherService.deleteTeacher(teacher.id).subscribe(()=>{
      
      });
  });
  this.lodeTeachers();
 
}
  private lodeTeachers(){
  this.teacherService.getTeachers().subscribe((teacher: Iteacher[]) => {
    this.teacherList = teacher;
  });
}
}
