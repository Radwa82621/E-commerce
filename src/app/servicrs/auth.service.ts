import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from '../interface/register';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string
  register: any;


userData:BehaviorSubject<any>=new BehaviorSubject('');
  constructor(private _http: HttpClient ,private _router: Router) {
    this.baseUrl = "https://route-ecommerce.onrender.com/"

    if(localStorage.getItem("userToken")){
      this.getUserData()
    }

  }
getUserData(){
  let encodedToken=JSON.stringify(localStorage.getItem("userToken"))
  let decoded=jwtDecode(encodedToken)
  this.userData.next(decoded)
  console.log(decoded);
  
}

  registerData(data:any):Observable<any> {
    return this._http.post(`${this.baseUrl}api/v1/auth/signup`, data);
  }
  loginData(data:any):Observable<any> {
    return this._http.post(`${this.baseUrl}api/v1/auth/signin`, data);
  }


  logOut(){
    localStorage.removeItem("userToken")
    this.userData.next(null)
    this._router.navigate(['/login'])

  }
}


