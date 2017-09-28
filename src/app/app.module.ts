import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {rootRouterConfig} from './app.routes';

import { AppComponent } from './app.component';
import {SortByColumnComponent } from './sort-by-column/sort-by-column.component'

@NgModule({
  declarations: [
    AppComponent,
    SortByColumnComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
        RouterModule.forRoot(rootRouterConfig, { useHash: true })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
