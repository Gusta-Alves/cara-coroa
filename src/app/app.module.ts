import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinComponent } from './pages/coin/coin.component';
import { BarraSorteComponent } from './pages/barra-sorte/barra-sorte.component';

@NgModule({
  declarations: [
    AppComponent,
    CoinComponent,
    BarraSorteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
