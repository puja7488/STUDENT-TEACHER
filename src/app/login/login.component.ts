import { Component } from '@angular/core';
import{Iuser} from 'src/assets/login/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

  
export class LoginComponent {
  public user = new Iuser();

  public userList: Iuser[]=[];
  
  onSubmit(){

  if(this.user.name.length > 0){
  // console.log(this.user);
  this.userList.push(this.user);
  this.user = new Iuser();
  }
}
  getDelete(deleteId: any){
    this.userList.splice(deleteId)
  }
}
