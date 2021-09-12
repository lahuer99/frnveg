import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PoolComponent } from './pool/pool.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VeggiesComponent } from './veggies/veggies.component';

@NgModule({
  declarations: [
    AppComponent,
    PoolComponent,
    FruitsComponent,
    VeggiesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
