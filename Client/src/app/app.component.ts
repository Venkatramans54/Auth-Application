import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client';
  logged:boolean

  ngOnInit(){
    
  }
  constructor(public authService:AuthService) { }

  logout(){
    this.authService.logout()
  }
}
