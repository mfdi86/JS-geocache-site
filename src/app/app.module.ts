import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { CacheListComponent } from './cache-list/cache-list.component';
import { CacheDetailComponent } from './cache-detail/cache-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CacheListComponent,
    CacheDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
