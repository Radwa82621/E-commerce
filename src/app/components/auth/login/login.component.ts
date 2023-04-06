import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicrs/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading: boolean = false
  apiErreor: string = ""
  constructor(private _auth: AuthService, private _router: Router) {


  }
 loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'
    )]),

  })
  ngDoCheck(): void {
    console.log(this.loginForm.value)
  }

login(form: FormGroup) {
    this.isLoading = true;
    if (form.valid) {
      this._auth.loginData(form.value).subscribe({
        next: (res: any) => {
          console.log(res);
          this.isLoading = false;
          localStorage.setItem("userToken",res.token)
          this._auth.getUserData()
          this._router.navigate(['/home'])
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
}
