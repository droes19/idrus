import*as e from"@angular/core";import"@angular/core";import{ObjectUtils as i}from"primeng/utils";var a=["*"],u=(()=>{class n{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){this.getAttributes()}getAttributes(){let t=i.isEmpty(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static ɵfac=function(s){return new(s||n)};static ɵcmp=e.ɵɵdefineComponent({type:n,selectors:[["ng-component"]],hostAttrs:[1,"p-element","p-icon-wrapper"],inputs:{label:"label",spin:"spin",styleClass:"styleClass"},standalone:!0,features:[e.ɵɵStandaloneFeature],ngContentSelectors:a,decls:1,vars:0,template:function(s,o){s&1&&(e.ɵɵprojectionDef(),e.ɵɵprojection(0))},encapsulation:2,changeDetection:0})}return n})();export{u as BaseIcon};