import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { ComponentsPreviewComponent } from './components/components-preview/components-preview.component';

@NgModule({
  declarations: [
    ComponentsPreviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ComponentsPreviewComponent }]),
    SharedModule
  ]
})
export class ComponentsModule { }
