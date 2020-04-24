import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserDetails={
    email:"",
    password:""
  }

  constructor(private auth:AuthService, private route:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.auth.loginUser(this.loginUserDetails)
      .subscribe(
        res=>{
          console.log(res)
          localStorage.setItem('token',res.accessToken)
          this.route.navigate(['/products'])
        },
        err=>console.log(err)
      )

  }
}
