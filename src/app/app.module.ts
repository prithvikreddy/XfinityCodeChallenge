import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {rootRouterConfig} from './app.routes';

import { AppComponent } from './app.component';
import {SortByColumnComponent } from './sort-by-column/sort-by-column.component';
import { DataService} from './services/data.service';
import { SortByCategoryComponent } from './sort-by-category/sort-by-category.component';

@NgModule({
  declarations: [
    AppComponent,
    SortByColumnComponent,
    SortByCategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
        RouterModule.forRoot(rootRouterConfig, { useHash: true })

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
