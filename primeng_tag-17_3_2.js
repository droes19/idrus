import*as o from"@angular/common";import{CommonModule as c}from"@angular/common";import*as e from"@angular/core";import"@angular/core";import{PrimeTemplate as g,SharedModule as p}from"primeng/api";function m(t,s){if(t&1&&e.ɵɵelement(0,"span",5),t&2){let n=e.ɵɵnextContext(2);e.ɵɵproperty("ngClass",n.icon)}}function u(t,s){if(t&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,m,1,1,"span",4),e.ɵɵelementContainerEnd()),t&2){let n=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵproperty("ngIf",n.icon)}}function d(t,s){}function f(t,s){t&1&&e.ɵɵtemplate(0,d,0,0,"ng-template")}function y(t,s){if(t&1&&(e.ɵɵelementStart(0,"span",6),e.ɵɵtemplate(1,f,1,0,null,7),e.ɵɵelementEnd()),t&2){let n=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",n.iconTemplate)}}var _=["*"],w=(()=>{class t{style;styleClass;severity;value;icon;rounded;templates;iconTemplate;ngAfterContentInit(){this.templates?.forEach(n=>{switch(n.getType()){case"icon":this.iconTemplate=n.template;break}})}containerClass(){return{"p-tag p-component":!0,"p-tag-info":this.severity==="info","p-tag-success":this.severity==="success","p-tag-warning":this.severity==="warning","p-tag-danger":this.severity==="danger","p-tag-rounded":this.rounded}}static ɵfac=function(i){return new(i||t)};static ɵcmp=e.ɵɵdefineComponent({type:t,selectors:[["p-tag"]],contentQueries:function(i,a,r){if(i&1&&e.ɵɵcontentQuery(r,g,4),i&2){let l;e.ɵɵqueryRefresh(l=e.ɵɵloadQuery())&&(a.templates=l)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:"rounded"},ngContentSelectors:_,decls:6,vars:7,consts:[[3,"ngClass","ngStyle"],[4,"ngIf"],["class","p-tag-icon",4,"ngIf"],[1,"p-tag-value"],["class","p-tag-icon",3,"ngClass",4,"ngIf"],[1,"p-tag-icon",3,"ngClass"],[1,"p-tag-icon"],[4,"ngTemplateOutlet"]],template:function(i,a){i&1&&(e.ɵɵprojectionDef(),e.ɵɵelementStart(0,"span",0),e.ɵɵprojection(1),e.ɵɵtemplate(2,u,2,1,"ng-container",1)(3,y,2,1,"span",2),e.ɵɵelementStart(4,"span",3),e.ɵɵtext(5),e.ɵɵelementEnd()()),i&2&&(e.ɵɵclassMap(a.styleClass),e.ɵɵproperty("ngClass",a.containerClass())("ngStyle",a.style),e.ɵɵadvance(2),e.ɵɵproperty("ngIf",!a.iconTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",a.iconTemplate),e.ɵɵadvance(2),e.ɵɵtextInterpolate(a.value))},dependencies:[o.NgClass,o.NgIf,o.NgTemplateOutlet,o.NgStyle],styles:[`@layer primeng{.p-tag{display:inline-flex;align-items:center;justify-content:center}.p-tag-icon,.p-tag-value,.p-tag-icon.pi{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}}
`],encapsulation:2,changeDetection:0})}return t})(),N=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=e.ɵɵdefineNgModule({type:t});static ɵinj=e.ɵɵdefineInjector({imports:[c,p,p]})}return t})();export{w as Tag,N as TagModule};