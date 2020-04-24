import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsList:any[]
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.getProducts()
      .subscribe(
        res=>this.productsList=res,
        err=>console.log()
      )
    
  }

}
