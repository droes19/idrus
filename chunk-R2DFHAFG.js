import"./chunk-POLL2CVR.js";import{bootstrapApplication as f}from"@angular/platform-browser";import{provideRouter as a}from"@angular/router";var p=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",loadComponent:()=>import("./chunk-LLFVNRPZ.js").then(o=>o.HomeComponent),loadChildren:()=>import("./chunk-CCHKPW4Z.js").then(o=>o.homeRoutes)}];var n={providers:[a(p)]};import"@angular/core";import{CommonModule as s}from"@angular/common";import{RouterOutlet as c}from"@angular/router";import*as e from"@angular/core";var i=(()=>{let t=class t{constructor(){this.title="idrus"}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-root"]],standalone:!0,features:[e.\u0275\u0275StandaloneFeature],decls:1,vars:0,template:function(r,l){r&1&&e.\u0275\u0275element(0,"router-outlet")},dependencies:[s,c]});let o=t;return o})();f(i,n).catch(o=>console.error(o));