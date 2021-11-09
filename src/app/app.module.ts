import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './shared/header-nav/header-nav.component';
import { FooderComponent } from './shared/fooder/fooder.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooderComponent
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
