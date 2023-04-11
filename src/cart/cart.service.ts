import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  token: string | null  
  constructor(private _httpClient: HttpClient) {
    this.token= localStorage.getItem("userToken")

   }

  addToCart(productId: string): Observable<any> {
    return this._httpClient.post("https://route-ecommerce.onrender.com/api/v1/cart",
      { productId: productId },
      {
        headers: { token: `${this.token}` }
      })
  }

  getCart(): Observable<any> {
    return this._httpClient.get("https://route-ecommerce.onrender.com/api/v1/cart",
      {
        headers: { token: `${this.token}` }
      }
      )
  }

  updateCart(productId:string,count:number): Observable<any> {
    return this._httpClient.put(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,
    {count:count},
      {
        headers: { token: `${this.token}` }
      }
      )
  }
  removeItem(productId:string): Observable<any> {
    return this._httpClient.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,
      {
        headers: { token: `${this.token}` }
      }
      )
  }
  clearCart(): Observable<any> {
    return this._httpClient.delete(`https://route-ecommerce.onrender.com/api/v1/cart`,
      {
        headers: { token: `${this.token}` }
      }
      )
  }
}
