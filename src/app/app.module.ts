import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { CounterModule } from './counter/counter.module';
import { HeroesMudule } from './heroes/hero.module';
import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';
// import { HeroComponent } from './heroes/hero/hero.component';
// import { ListComponent } from './heroes/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeroComponent,
    // ListComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesMudule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
