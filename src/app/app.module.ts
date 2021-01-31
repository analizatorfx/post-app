import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { PostsListComponent } from './component/posts-list/posts-list.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { PostItemComponent } from './component/post-item/post-item.component';
import {HttpClientModule} from '@angular/common/http';
import { WeatherComponent } from './component/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PostsListComponent,
    PageNotFoundComponent,
    PostItemComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
