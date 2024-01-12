var _=Object.defineProperty,v=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var p=(t,l,i)=>l in t?_(t,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[l]=i,m=(t,l)=>{for(var i in l||={})S.call(l,i)&&p(t,i,l[i]);if(c)for(var i of c(l))C.call(l,i)&&p(t,i,l[i]);return t},u=(t,l)=>v(t,T(l));import*as a from"@angular/common";import{CommonModule as z}from"@angular/common";import*as e from"@angular/core";import{EventEmitter as L}from"@angular/core";import*as y from"primeng/api";import{Header as I,Footer as V,PrimeTemplate as E,SharedModule as d}from"primeng/api";import*as g from"primeng/scroller";import{ScrollerModule as f}from"primeng/scroller";var M=["scroller"];function Q(t,l){t&1&&e.ɵɵelementContainer(0)}function O(t,l){if(t&1&&(e.ɵɵelementStart(0,"div",8),e.ɵɵprojection(1),e.ɵɵtemplate(2,Q,1,0,"ng-container",9),e.ɵɵelementEnd()),t&2){let i=e.ɵɵnextContext();e.ɵɵadvance(2),e.ɵɵproperty("ngTemplateOutlet",i.headerTemplate)}}function b(t,l){t&1&&e.ɵɵelementContainer(0)}var h=t=>({height:t}),w=(t,l)=>({$implicit:t,options:l});function j(t,l){if(t&1&&(e.ɵɵelementStart(0,"div",10),e.ɵɵtemplate(1,b,1,0,"ng-container",11),e.ɵɵelementEnd()),t&2){let i=l.$implicit,r=l.options,o=e.ɵɵnextContext();e.ɵɵproperty("ngStyle",e.ɵɵpureFunction1(3,h,o.itemSize+"px")),e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",i?o.itemTemplate:o.loadingItemTemplate)("ngTemplateOutletContext",e.ɵɵpureFunction2(5,w,i,r))}}function D(t,l){t&1&&e.ɵɵelementContainer(0)}function k(t,l){if(t&1&&(e.ɵɵelementStart(0,"div",12),e.ɵɵprojection(1,1),e.ɵɵtemplate(2,D,1,0,"ng-container",9),e.ɵɵelementEnd()),t&2){let i=e.ɵɵnextContext();e.ɵɵattribute("data-pc-section","footer"),e.ɵɵadvance(2),e.ɵɵproperty("ngTemplateOutlet",i.footerTemplate)}}var F=[[["p-header"]],[["p-footer"]]],N=["p-header","p-footer"],Y=(()=>{class t{el;cd;value;itemSize;style;styleClass;scrollHeight;lazy;options;delay=250;onLazyLoad=new L;header;footer;templates;scroller;itemTemplate;headerTemplate;footerTemplate;loadingItemTemplate;virtualScrollTimeout;constructor(i,r){this.el=i,this.cd=r}ngAfterContentInit(){this.templates.forEach(i=>{switch(i.getType()){case"item":this.itemTemplate=i.template;break;case"loadingItem":this.loadingItemTemplate=i.template;break;case"header":this.headerTemplate=i.template;break;case"footer":this.footerTemplate=i.template;break;default:this.itemTemplate=i.template;break}})}onLazyItemLoad(i){this.virtualScrollTimeout&&clearTimeout(this.virtualScrollTimeout),this.virtualScrollTimeout=setTimeout(()=>{this.onLazyLoad.emit(u(m({},i),{rows:i.last-i.first,forceUpdate:()=>this.cd.detectChanges()}))},this.delay)}getBlockableElement(){return this.el.nativeElement.children[0]}scrollToIndex(i,r){this.scroller?.scrollToIndex(i,r)}static ɵfac=function(r){return new(r||t)(e.ɵɵdirectiveInject(e.ElementRef),e.ɵɵdirectiveInject(e.ChangeDetectorRef))};static ɵcmp=e.ɵɵdefineComponent({type:t,selectors:[["p-virtualScroller"]],contentQueries:function(r,o,s){if(r&1&&(e.ɵɵcontentQuery(s,I,5),e.ɵɵcontentQuery(s,V,5),e.ɵɵcontentQuery(s,E,4)),r&2){let n;e.ɵɵqueryRefresh(n=e.ɵɵloadQuery())&&(o.header=n.first),e.ɵɵqueryRefresh(n=e.ɵɵloadQuery())&&(o.footer=n.first),e.ɵɵqueryRefresh(n=e.ɵɵloadQuery())&&(o.templates=n)}},viewQuery:function(r,o){if(r&1&&e.ɵɵviewQuery(M,5),r&2){let s;e.ɵɵqueryRefresh(s=e.ɵɵloadQuery())&&(o.scroller=s.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",itemSize:"itemSize",style:"style",styleClass:"styleClass",scrollHeight:"scrollHeight",lazy:"lazy",options:"options",delay:"delay"},outputs:{onLazyLoad:"onLazyLoad"},ngContentSelectors:N,decls:8,vars:17,consts:[[3,"ngClass","ngStyle"],["class","p-virtualscroller-header",4,"ngIf"],[1,"p-virtualscroller-content"],["content",""],["styleClass","p-virtualscroller-list",3,"items","itemSize","lazy","options","onLazyLoad"],["scroller",""],["pTemplate","item"],["class","p-virtualscroller-footer",4,"ngIf"],[1,"p-virtualscroller-header"],[4,"ngTemplateOutlet"],[1,"p-virtualscroller-item",3,"ngStyle"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-virtualscroller-footer"]],template:function(r,o){r&1&&(e.ɵɵprojectionDef(F),e.ɵɵelementStart(0,"div",0),e.ɵɵtemplate(1,O,3,1,"div",1),e.ɵɵelementStart(2,"div",2,3)(4,"p-scroller",4,5),e.ɵɵlistener("onLazyLoad",function(n){return o.onLazyItemLoad(n)}),e.ɵɵtemplate(6,j,2,8,"ng-template",6),e.ɵɵelementEnd()(),e.ɵɵtemplate(7,k,3,2,"div",7),e.ɵɵelementEnd()),r&2&&(e.ɵɵclassMap(o.styleClass),e.ɵɵproperty("ngClass","p-virtualscroller p-component")("ngStyle",o.style),e.ɵɵattribute("data-pc-name","virtualscroller")("data-pc-section","root"),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",o.header||o.headerTemplate),e.ɵɵadvance(1),e.ɵɵattribute("data-pc-section","content"),e.ɵɵadvance(2),e.ɵɵstyleMap(e.ɵɵpureFunction1(15,h,o.scrollHeight)),e.ɵɵproperty("items",o.value)("itemSize",o.itemSize)("lazy",o.lazy)("options",o.options),e.ɵɵadvance(3),e.ɵɵproperty("ngIf",o.footer||o.footerTemplate))},dependencies:[a.NgClass,a.NgIf,a.NgTemplateOutlet,a.NgStyle,y.PrimeTemplate,g.Scroller],encapsulation:2})}return t})(),Z=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=e.ɵɵdefineNgModule({type:t});static ɵinj=e.ɵɵdefineInjector({imports:[z,d,f,d,f]})}return t})();export{Y as VirtualScroller,Z as VirtualScrollerModule};