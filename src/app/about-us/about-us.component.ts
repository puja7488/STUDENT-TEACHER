import { Component, OnInit } from '@angular/core';
import { Aboutus } from 'src/assets/aboutus/aboutus';
import { AboutUsService } from '../services/about-us.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit{
 
  constructor (private aboutUsService:AboutUsService){}

  public allAboutUs = new Aboutus();
  public aboutUsList:Aboutus[]=[];
  ngOnInit(): void {
     this.lodeAboutUs()
  }

 onClick(){
if(this.allAboutUs?.name){
this.aboutUsService.saveAboutUs(this.allAboutUs).subscribe(()=>{
  this.lodeAboutUs()
});
this.allAboutUs = new Aboutus();
 }
}

onDelete(Id:number) {
this.aboutUsService.deleteAboutUs(Id).subscribe(()=> {
 // console.log(result)
 this.lodeAboutUs();
  });
}

public lodeAboutUs(){
 this.aboutUsService.getAboutUs().subscribe((aboutUs:Aboutus[])=> {
  this.aboutUsList = aboutUs;
    });
  }
  
}


//for (var i:number = 0; i < 10; i++) {
  //console.log(i)
//}