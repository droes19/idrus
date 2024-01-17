
import { loadRemoteModule } from "@angular-architects/module-federation";
import { Route, Routes } from "@angular/router";
import { environment } from "../../environments/environment";
import { authGuard } from "../shared/guard/auth.guard";

export const homeRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('../dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    // {
    //     path: 'mf-angular',
    //     loadChildren: () =>
    //         loadRemoteModule({
    //             type: 'module',
    //             remoteEntry: `http://${environment.mfe.angular}/remoteEntry.js`,
    //             exposedModule: './mfaRoutes'
    //         })
    //             .then(m => m['APP_ROUTES']),
    //     canActivate: [authGuard]
    // },
    ...listRoutesFromEnv(),
    {
        path: 'about',
        loadComponent: () => import("../shared/component/about/about.component").then(m => m.AboutComponent)
    }
]

function listRoutesFromEnv() {
    let listEnvRoutes = environment.mfe;
    let customRoutes: Routes = []
    listEnvRoutes.forEach((x) => {
        if (x.type === 'angular') {
            customRoutes.push(routeTypeAngular(x))
        }
    })
    return customRoutes
}

function routeTypeAngular(x: any) {
    let route: Route = {}
    if (x.remoteType === 'module') {
        route = {
            path: x.routerLink,
            loadChildren: () => loadRemoteModule({
                type: 'module',
                remoteEntry: x.url + "/" + x.remoteEntry,
                exposedModule: x.exposedModule
            })
                .then(m => m[x.exportedModule]),
            canActivate: [authGuard]
        }
    }
    return route
}