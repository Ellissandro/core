import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/pages/store/product.model';
import { Cart } from '../../cart.model';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {

  cart: Cart = new Cart([]);

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cartService.load().subscribe(response => {
      this.cart = response.data;
    })
  }

  delete(product: Product) {
    this.cartService.removeItemCart(product).subscribe();
  }
}
