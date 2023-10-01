import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  product ={
    name: 'iphone XR',
    price: 999,
    color:'Red',
    discount: 8.5,
    instock: 9,
    pImage: '/assets/images/iphone.png'
  }

  getDiscountedPrice(){
   return this.product.price - (this.product.price * this.product.discount /100)
  }
  

}
