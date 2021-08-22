import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Util } from './shared/common/util';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { RootComponent } from './core/layout/root/root.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    PageNotFoundComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [Util],
  bootstrap: [AppComponent]
})
export class AppModule { }
