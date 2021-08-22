import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './components/store-home/store.component';

@NgModule({
  declarations: [
      StoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: StoreComponent }])
  ],
  providers: [],
})
export class StoreModule { }
