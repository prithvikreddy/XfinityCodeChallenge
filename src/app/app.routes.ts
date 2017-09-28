import { Routes } from '@angular/router';
import {SortByColumnComponent } from './sort-by-column/sort-by-column.component'


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SortByColumnComponent },

  ];