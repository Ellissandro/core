import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CartItemsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CartItemsComponent }])
  ]
})
export class CartModule { }
