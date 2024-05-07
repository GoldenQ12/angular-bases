
// * BUILT-IN MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// * MAIN APP
import { AppComponent } from './app.component';

// * CUSTOM MODULES
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
