import { Routes } from '@angular/router';

export const ROOT_ROUTES: Routes = [
  {
    path: 'store',
    loadChildren: () => import('../../pages/store/product.module').then(m => m.StoreModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('../../pages/cart/cart.module').then(m => m.CartModule)
  },
];
