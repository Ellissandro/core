import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/pages/cart/cart.service';
import { Product } from '../../product.model';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  products: Product[] = [];

  constructor(private storeService: StoreService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.storeService.getAllProducts().subscribe(response => {
      this.products = response.data;
    })
  }

  addToCart(product: Product) {
    this.cartService.addItemCart(product).subscribe();
  }
}
