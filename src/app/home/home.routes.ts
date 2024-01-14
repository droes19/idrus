
import { loadRemoteModule } from "@angular-architects/module-federation";
import { Routes } from "@angular/router";
import { environment } from "../../environments/environment";

export const homeRoutes: Routes = [
    // {
    //     path:'',
    //     loadComponent: () => import('../home/home.component').then(m => m.HomeComponent)
    // },
    {
        path: '',
        loadComponent: () => import('../dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: 'mf-angular',
        //     // loadComponent: () => import('mf-angular/homeComponent').then(m => m.HomeComponent)
        //     // loadComponent: () => loadRemoteModule('mf-angular', './Component').then(m => m.AppComponent)
        // loadComponent: () => loadRemoteModule('mf-angular', './HomeComponent').then(m => m.HomeComponent)
        loadChildren: () =>
            loadRemoteModule({
                type: 'module',
                remoteEntry: `http://${environment.mfe.angular}/remoteEntry.js`,
                exposedModule: './mfaRoutes'
            })
                .then(m => m.routes)
    },
]