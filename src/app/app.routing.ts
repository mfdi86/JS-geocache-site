import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CacheListComponent } from './cache-list/cache-list.component';
import { CacheDetailComponent } from './cache-detail/cache-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'cache-list',
    component: CacheListComponent
  },
  {
    path: 'caches/:id',
    component: CacheDetailComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
