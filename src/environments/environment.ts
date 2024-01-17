export const environment = {
    "production": true,
    "mfe": [
        {
            id: "angular1",
            type: "angular",
            url: "http://localhost:4201",
            remoteType: "module",
            remoteEntry: "remoteEntry.js",
            exposedModule: "./mfaRoutes",
            exportedModule: "APP_ROUTES",
            asMenu: true,
            label: "MFE Angular",
            routerLink: "mfe-angular",
            styleClass: "menuitem"
        },
        {
            id: "angular2",
            type: "angular",
            url: "http://localhost:4201",
            remoteType: "module",
            remoteEntry: "remoteEntry.js",
            exposedModule: "./mfaRoutes",
            exportedModule: "APP_ROUTES",
            label: "MFE Angular2",
            routerLink: "mfe-angular2",
            styleClass: "menuitem"
        },
    ]
};
