import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Istudent } from 'src/assets/student/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}

  public url='http://localhost:3000/students';

  getStudents() {
    return this.httpClient.get<Istudent[]>(this.url);
  }
  saveStudent(studnt: Istudent) {
    return this.httpClient.post<Istudent>(this.url,studnt);
  }
  deleteStudent(studntId: Number) {
    return this.httpClient.delete<Istudent>(
      'http://localhost:3000/students/' + studntId
    );
  }
  getStudent(studntId: Number) {
  return this.httpClient.get<Istudent>(this.url + studntId);
 }

  editStudent(studnt: Istudent) {
  return this.httpClient.put<Istudent>(this.url+ "/" +studnt.id, studnt);
 }

}
