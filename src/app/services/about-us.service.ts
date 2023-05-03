import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Aboutus} from 'src/assets/aboutus/aboutus';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  public url='http://localhost:3000/aboutus';

constructor(private httpClient:HttpClient){}
getAboutUs(){
  return this.httpClient.get<Aboutus[]>(this.url);
 }
 saveAboutUs(saveAboutUs:Aboutus){
  return this.httpClient.post<Aboutus[]>(this.url,saveAboutUs);
 }
deleteAboutUs(id:number){
  
  return this.httpClient.delete<Aboutus>(`${this.url}/${id}`)
}

}
