import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Util } from './shared/common/util';
import { RootComponent } from './core/layout/root/root.component';
import { SharedModule } from './shared/components/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [Util],
  bootstrap: [AppComponent]
})
export class AppModule { }
