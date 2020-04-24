import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private url="http://localhost:3000/api/"

  constructor(private http:HttpClient) { }

  registerUser(user){
      return this.http.post<any>(this.url+"register",user)
  }

  loginUser(user){
    return this.http.post<any>(this.url+"login",user)
  }

  getProducts(){
    return this.http.get<any>(this.url+"products")
  }
}
