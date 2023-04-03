import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Register } from '../interface/register';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string   
  register=new FormGroup({
name:new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
email:new FormControl('', [Validators.required,Validators.email]),
password:new FormControl('', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'
)]),
rePassword:new FormControl('', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'
)]),
phone:new FormControl('', [Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/gm)])

  })

  constructor(private http:HttpClient) {
    this.baseUrl="https://route-ecommerce.onrender.com/"

  }
  registerData(){
      return this.http.post<Register>(`${this.baseUrl}api/v1/auth/signup`,this.register.value)
  }
}


