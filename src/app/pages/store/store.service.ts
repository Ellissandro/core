import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { Response } from 'src/app/shared/models/response';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  getAllProducts(): Observable<Response<Product[]>> {
    return of({
      data: [
        { product_id: Math.random().toString(), name: 'Rayon a-line Dress', cents: 90, fraction: 13.45,  image: 'assets/images/store/1.jpg', quantity: 1, shiping: 'Frete grátis'},
        { product_id: Math.random().toString(), name: 'Analog Black men Wath', cents: 90, fraction: 13.45, image: 'assets/images/store/2.jpg', quantity: 1, shiping: 'Frete grátis'},
        { product_id: Math.random().toString(), name: 'Men\'s Regular Fit Shirts', cents: 90, fraction: 13.45, image: 'assets/images/store/3.jpg', quantity: 1, shiping: 'Frete grátis'},
        { product_id: Math.random().toString(), name: 'Women\'s Handbag', cents: 90, fraction: 13.45, image: 'assets/images/store/4.jpg', quantity: 1, shiping: 'Frete grátis'},
        { product_id: Math.random().toString(), name: 'Women\'s Relaxed Fit Jeans', cents: 90, fraction: 13.45, image: 'assets/images/store/5.jpg', quantity: 1, shiping: 'Frete grátis'},
        { product_id: Math.random().toString(), name: 'Round Neck Printed Top', cents: 90, fraction: 13.45, image: 'assets/images/store/6.jpg', quantity: 1, shiping: 'Frete grátis'},
        { product_id: Math.random().toString(), name: 'Mens Running Shoe', cents: 90, fraction: 13.45, image: 'assets/images/store/7.jpg', quantity: 1, shiping: 'Frete grátis'},
        { product_id: Math.random().toString(), name: 'Men Pullover Sweater', cents: 90, fraction: 13.45, image: 'assets/images/store/8.jpg', quantity: 1, shiping: 'Frete grátis'},
        { product_id: Math.random().toString(), name: 'Rayon a-line Dress', cents: 90, fraction: 13.45, image: 'assets/images/store/1.jpg', quantity: 1, shiping: 'Frete grátis'},
        { product_id: Math.random().toString(), name: 'Analog Black men Wath', cents: 90, fraction: 13.45, image: 'assets/images/store/2.jpg', quantity: 1, shiping: 'Frete grátis'},
        { product_id: Math.random().toString(), name: 'Men\'s Regular Fit Shirts', cents: 90, fraction: 13.45, image: 'assets/images/store/3.jpg', quantity: 1, shiping: 'Frete grátis'},
        { product_id: Math.random().toString(), name: 'Women\'s Handbag', cents: 90, fraction: 13.45, image: 'assets/images/store/4.jpg', quantity: 1, shiping: 'Frete grátis'},
        { product_id: Math.random().toString(), name: 'Women\'s Relaxed Fit Jeans', cents: 90, fraction: 13.45, image: 'assets/images/store/5.jpg', quantity: 1, shiping: 'Frete grátis'},
        { product_id: Math.random().toString(), name: 'Round Neck Printed Top', cents: 90, fraction: 13.45, image: 'assets/images/store/6.jpg', quantity: 1, shiping: 'Frete grátis'},
        { product_id: Math.random().toString(), name: 'Mens Running Shoe', cents: 90, fraction: 13.45, image: 'assets/images/store/7.jpg', quantity: 1, shiping: 'Frete grátis'},
        { product_id: Math.random().toString(), name: 'Men Pullover Sweater', cents: 90, fraction: 13.45, image: 'assets/images/store/8.jpg', quantity: 1, shiping: 'Frete grátis'},
        { product_id: Math.random().toString(), name: 'Women\'s Handbag', cents: 90, fraction: 13.45, image: 'assets/images/store/4.jpg', quantity: 1, shiping: 'Frete grátis'},
        { product_id: Math.random().toString(), name: 'Women\'s Relaxed Fit Jeans', cents: 90, fraction: 13.45, image: 'assets/images/store/5.jpg', quantity: 1, shiping: 'Frete grátis'},
      ]
    })
  }
}
