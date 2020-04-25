import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsList:any[]
  constructor(private auth:AuthService, private route:Router) { }

  ngOnInit(): void {
    this.auth.getProducts()
      .subscribe(
        res=>this.productsList=res,
        err=>{
          this.route.navigate(['/login'])
          alert('Auth Error')
        }
      )
    
  }

}
