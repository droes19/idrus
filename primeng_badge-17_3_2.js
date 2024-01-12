import*as n from"@angular/common";import{DOCUMENT as l,CommonModule as r}from"@angular/common";import*as t from"@angular/core";import"@angular/core";import{SharedModule as o}from"primeng/api";import{DomHandler as a}from"primeng/dom";import{UniqueComponentId as g}from"primeng/utils";function p(s,c){if(s&1&&(t.ɵɵelementStart(0,"span",1),t.ɵɵtext(1),t.ɵɵelementEnd()),s&2){let i=t.ɵɵnextContext();t.ɵɵclassMap(i.styleClass),t.ɵɵproperty("ngClass",i.containerClass())("ngStyle",i.style),t.ɵɵadvance(1),t.ɵɵtextInterpolate(i.value)}}var I=(()=>{class s{document;el;renderer;iconPos="left";get disabled(){return this._disabled}set disabled(i){this._disabled=i}get size(){return this._size}set size(i){this._size=i,this.initialized&&this.setSizeClasses()}get value(){return this._value}set value(i){if(i!==this._value&&(this._value=i,this.initialized)){let e=document.getElementById(this.id);this._value?(a.hasClass(e,"p-badge-dot")&&a.removeClass(e,"p-badge-dot"),String(this._value).length===1?a.addClass(e,"p-badge-no-gutter"):a.removeClass(e,"p-badge-no-gutter")):!this._value&&!a.hasClass(e,"p-badge-dot")&&a.addClass(e,"p-badge-dot"),e.innerHTML="",this.renderer.appendChild(e,document.createTextNode(this._value))}}severity;_value;initialized=!1;id;_disabled=!1;_size;constructor(i,e,d){this.document=i,this.el=e,this.renderer=d}ngAfterViewInit(){this.id=g()+"_badge";let i=this.el.nativeElement.nodeName.indexOf("-")!=-1?this.el.nativeElement.firstChild:this.el.nativeElement;if(this._disabled)return null;let e=this.document.createElement("span");e.id=this.id,e.className="p-badge p-component",this.severity&&a.addClass(e,"p-badge-"+this.severity),this.setSizeClasses(e),this.value!=null?(this.renderer.appendChild(e,this.document.createTextNode(this.value)),String(this.value).length===1&&a.addClass(e,"p-badge-no-gutter")):a.addClass(e,"p-badge-dot"),a.addClass(i,"p-overlay-badge"),this.renderer.appendChild(i,e),this.initialized=!0}setSizeClasses(i){let e=i??this.document.getElementById(this.id);e&&(this._size?(this._size==="large"&&(a.addClass(e,"p-badge-lg"),a.removeClass(e,"p-badge-xl")),this._size==="xlarge"&&(a.addClass(e,"p-badge-xl"),a.removeClass(e,"p-badge-lg"))):(a.removeClass(e,"p-badge-lg"),a.removeClass(e,"p-badge-xl")))}ngOnDestroy(){this.initialized=!1}static ɵfac=function(e){return new(e||s)(t.ɵɵdirectiveInject(l),t.ɵɵdirectiveInject(t.ElementRef),t.ɵɵdirectiveInject(t.Renderer2))};static ɵdir=t.ɵɵdefineDirective({type:s,selectors:[["","pBadge",""]],hostAttrs:[1,"p-element"],inputs:{iconPos:"iconPos",disabled:["badgeDisabled","disabled"],size:"size",value:"value",severity:"severity"}})}return s})(),M=(()=>{class s{styleClass;style;size;severity;value;badgeDisabled=!1;containerClass(){return{"p-badge p-component":!0,"p-badge-no-gutter":this.value!=null&&String(this.value).length===1,"p-badge-lg":this.size==="large","p-badge-xl":this.size==="xlarge","p-badge-info":this.severity==="info","p-badge-success":this.severity==="success","p-badge-warning":this.severity==="warning","p-badge-danger":this.severity==="danger"}}static ɵfac=function(e){return new(e||s)};static ɵcmp=t.ɵɵdefineComponent({type:s,selectors:[["p-badge"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",size:"size",severity:"severity",value:"value",badgeDisabled:"badgeDisabled"},decls:1,vars:1,consts:[[3,"ngClass","class","ngStyle",4,"ngIf"],[3,"ngClass","ngStyle"]],template:function(e,d){e&1&&t.ɵɵtemplate(0,p,2,5,"span",0),e&2&&t.ɵɵproperty("ngIf",!d.badgeDisabled)},dependencies:[n.NgClass,n.NgIf,n.NgStyle],styles:[`@layer primeng{.p-badge{display:inline-block;border-radius:10px;text-align:center;padding:0 .5rem}.p-overlay-badge{position:relative}.p-overlay-badge .p-badge{position:absolute;top:0;right:0;transform:translate(50%,-50%);transform-origin:100% 0;margin:0}.p-badge-dot{width:.5rem;min-width:.5rem;height:.5rem;border-radius:50%;padding:0}.p-badge-no-gutter{padding:0;border-radius:50%}}
`],encapsulation:2,changeDetection:0})}return s})(),S=(()=>{class s{static ɵfac=function(e){return new(e||s)};static ɵmod=t.ɵɵdefineNgModule({type:s});static ɵinj=t.ɵɵdefineInjector({imports:[r,o]})}return s})();export{M as Badge,I as BadgeDirective,S as BadgeModule};