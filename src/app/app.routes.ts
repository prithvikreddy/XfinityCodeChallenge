import { Routes } from '@angular/router';
import {SortByColumnComponent } from './sort-by-column/sort-by-column.component'
import { SortByCategoryComponent } from './sort-by-category/sort-by-category.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SortByColumnComponent },
  { path: 'category', component: SortByCategoryComponent },

  ];