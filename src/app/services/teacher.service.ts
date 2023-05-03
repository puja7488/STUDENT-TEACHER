import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Iteacher } from 'src/assets/teacher/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  public url='http://localhost:3000/teachers';

constructor (private httpClient:HttpClient){}

getTeachers(){
  return this.httpClient.get<Iteacher[]>(this.url);
}
postTeacher(teacher:Iteacher){
  return this.httpClient.post<Iteacher>(this.url, teacher);
}
deleteTeacher(teacher:number){
  return this.httpClient.delete(this.url +teacher);
}
editTeacher(teacher:Iteacher){
  return this.httpClient.patch<Iteacher>(this.url+ teacher.id, teacher);
}

}
