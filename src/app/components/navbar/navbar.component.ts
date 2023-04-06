import { Component } from '@angular/core';
import { AuthService } from 'src/app/servicrs/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
isLOgedIn:boolean=false;
constructor(private _authService:AuthService){



this._authService.userData.subscribe((res)=>{
  if(this._authService.userData.getValue()){
    this.isLOgedIn=true
  }else{
    this.isLOgedIn=false

  }
  
})
}
logOut(){
  this._authService.logOut()
}

}
