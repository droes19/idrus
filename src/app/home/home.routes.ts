// import { loadRemoteModule } from "@angular-architects/native-federation";
import { Routes } from "@angular/router";

export const homeRoutes: Routes = [
    // {
    //     path:'',
    //     loadComponent: () => import('../home/home.component').then(m => m.HomeComponent)
    // },
    {
        path:'',
        loadComponent: () => import('../dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    // {
    //     path: 'mf-angular',
    //     // loadComponent: () => import('mf-angular/homeComponent').then(m => m.HomeComponent)
    //     // loadComponent: () => loadRemoteModule('mf-angular', './Component').then(m => m.AppComponent)
    //     loadComponent: () => loadRemoteModule('mf-angular', './HomeComponent').then(m => m.HomeComponent)
    // },
]