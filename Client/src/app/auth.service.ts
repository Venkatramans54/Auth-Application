import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private url="http://localhost:3000/api/"
  logged=this.isLoggedIn()

  constructor(private http:HttpClient, private route: Router) { }

  registerUser(user){
      return this.http.post<any>(this.url+"register",user)
  }

  loginUser(user){
    return this.http.post<any>(this.url+"login",user)
  }

  getProducts(){
    return this.http.get<any>(this.url+"products")
  }

  isLoggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/login'])
  }
}
