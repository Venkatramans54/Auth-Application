import { Component, OnInit } from '@angular/core';
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

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.auth.loginUser(this.loginUserDetails)
      .subscribe(
        res=>console.log(res),
        err=>alert(err.error)
      )

  }
}
