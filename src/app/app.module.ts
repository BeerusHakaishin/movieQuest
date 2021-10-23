import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { OnHoverDirective } from './on-hover.directive';
import { ShowListDirective } from './show-list.directive';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    OnHoverDirective,
    ShowListDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
