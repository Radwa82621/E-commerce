import { Component, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/servicrs/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements DoCheck {
  isLoading: boolean = false
  apiErreor: string = ""
  constructor(private _auth: AuthService, private _router: Router) {


  }
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'
    )]),
    rePassword: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'
    )]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/gm)])

  })
  ngDoCheck(): void {
    console.log(this.registerForm.value)
  }


  register(form: FormGroup) {
    this.isLoading = true;
    if (form.valid) {
      this._auth.registerData(form.value).subscribe({
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
}
