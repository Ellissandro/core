import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Response } from 'src/app/shared/models/response';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Product } from '../store/product.model';
import { Cart } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart;

  constructor(private localStorageService: LocalStorageService) {
    this.getCart();
    this.checkCartItems();
  }

  addItemCart(product: Product): Observable<Response<Product>> {
    const foundProduct = this.checkIfItemAlreadyExists(product);

    if (!foundProduct) {
      this.cart.products.push(product);

      this.localStorageService.addCart(this.cart).subscribe(() => { /* empty */ }, 
        error => {
          console.error(error)
        });
    }

    return of({
      data: { ...product }
    })
  }

  removeItemCart(product: Product): Observable<Response<Product>> {
    const index = this.cart.products.findIndex(find => find.product_id === product.product_id);
    this.cart.products.splice(index, 1);

  this.localStorageService.updateCart(this.cart).subscribe(() => { /* empty */ },
      error => {
        console.error(error)
      });

    return of({
      data: { ...product }
    })
  }


  load(): Observable<Response<Cart>> {
    return of({
      data: this.cart
    })
  }

  private checkCartItems() {
    if (!this.cart || !this.cart.products) {
      this.cart = new Cart([]);
    }
  }

  private checkIfItemAlreadyExists(product: Product): Product | undefined {
    return this.cart.products.find(find => find.product_id === product.product_id);
  }

  private getCart() {
    this.localStorageService.getCart().subscribe(response => {
      this.cart = response.data;
    },
      error => {
        console.error(error)
      })
  }
}
