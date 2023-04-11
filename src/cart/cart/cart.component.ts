import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartDetails:Cart={} as Cart
constructor(private _cartService :CartService){}
  ngOnInit(): void {
this.getCart();
  }
getCart(){
  this._cartService.getCart().subscribe({
    next:(res)=>{console.log(res);
    this.cartDetails=res},
    error:(err)=>{console.log(err);}
  })
}
updateCart(id:string,count:number){
  this._cartService.updateCart(id,count).subscribe({
    next:(res)=>{ console.log(res)
      this.cartDetails=res } ,
    error:(err)=> console.log(err)
    
  })

}
deleteItem(id:string){
  this._cartService.removeItem(id).subscribe({
    next:(res)=>{console.log(res);
    this.cartDetails=res},
    error:(err)=>console.log(err),})
}
clearCart(){
  this._cartService.clearCart().subscribe({
    next:(res)=>{console.log(res);
    this.cartDetails=res},
    error:(err)=>console.log(err),})
}
}
