import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
        loadChildren: () => import('./home/home.routes').then(m => m.homeRoutes),
    }
];
