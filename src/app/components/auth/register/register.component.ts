import { Component, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/servicrs/auth.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements DoCheck {
  register: FormGroup
  isLoading: boolean = false
  apiErreor: string = ""
  constructor(private auth: AuthService, private _router: Router) {
    this.register = auth.register

  }
  ngDoCheck(): void {
    console.log(this.register.value)
  }


  registerData() {
    this.isLoading = true;
    this.auth.registerData().subscribe({
      next: (res: any) => {
        console.log(res);
        this.isLoading = false;
        this._router.navigate(['/login'])
      },
      error: (err: any) => {
        console.log(err)
        this.isLoading = false;
        console.log(err.error.message);
        this.apiErreor = err.error.message
      }
    })

  }
}
// res=>{
//   console.log(res)
// }