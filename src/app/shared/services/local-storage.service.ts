import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cart } from 'src/app/pages/cart/cart.model';
import { Response } from '../models/response';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    private readonly keyStore = 'cart';


    getCart(): Observable<Response<Cart>> {
        const stringifyCart = window.localStorage.getItem(this.keyStore);

        if (stringifyCart) {
            this.convertToJson(stringifyCart);
            return of({ data: this.convertToJson(stringifyCart) });
        }

        return of({
            data: new Cart([])
        });
    }

    addCart(cart: Cart): Observable<Response<Cart>> {
        const stringifyCart = this.convertToStringify(cart);
        window.localStorage.setItem(this.keyStore, stringifyCart)

        return this.getCart();
    }

    updateCart(cart: Cart): Observable<Response<Cart>> {
        this.removeCart();
        this.addCart(cart);

        return this.getCart();
    }

    removeCart(): void {
        window.localStorage.removeItem(this.keyStore);
    }

    private convertToStringify(cart: Cart): string {
        return JSON.stringify(cart)
    }

    private convertToJson(stringifyCart: string): Cart {
        return JSON.parse(stringifyCart);
    }
}
