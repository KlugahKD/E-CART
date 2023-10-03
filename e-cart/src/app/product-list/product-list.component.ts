import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  //name = 'Daniel Klugah';
  addToCart:number =0;

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

  onNameChange(event: any){
    //this.name = event.target.value;
   // console.log(event.target.value);
  }

  decreamentCartValue(){
    if(this.addToCart > 0){
      this.addToCart--;
    }
    

  }

  increamentCartValue(){
    if(this.addToCart < this.product.instock){
      this.addToCart++;
    }
  }
  
}
