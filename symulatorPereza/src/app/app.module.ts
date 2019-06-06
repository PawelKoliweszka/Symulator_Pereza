import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GraComponent } from './gra/gra.component';
import { MenuComponent } from './menu/menu.component';
import { RejestracjaComponent } from './rejestracja/rejestracja.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GraComponent,
    MenuComponent,
    RejestracjaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
