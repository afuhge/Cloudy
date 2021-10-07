import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import ('./components/home/home.module')
  .then(m => m.HomeModule),
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    loadChildren: () => import ('./components/page-not-found/page-not-found.module')
      .then(m => m.PageNotFoundModule),
  },

];

