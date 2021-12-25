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
  {
    path: 'components',
    loadChildren: () => import('../../pages/components/components.module').then(m => m.ComponentsModule)
  },
  {
    path: 'memory-game',
    loadChildren: () => import('../../pages/memory-game/memory-game.module').then(m => m.MemoryGameModule)
  },
];
