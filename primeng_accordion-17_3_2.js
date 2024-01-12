import{style as p,state as h,animate as g,transition as u,trigger as b}from"@angular/animations";import*as s from"@angular/common";import{CommonModule as v}from"@angular/common";import*as e from"@angular/core";import{EventEmitter as d,forwardRef as y}from"@angular/core";import{Header as C,PrimeTemplate as T,SharedModule as I}from"primeng/api";import{DomHandler as l}from"primeng/dom";import{ChevronDownIcon as m}from"primeng/icons/chevrondown";import{ChevronRightIcon as _}from"primeng/icons/chevronright";import{UniqueComponentId as A}from"primeng/utils";function x(a,r){if(a&1&&e.ɵɵelement(0,"span",11),a&2){let t=e.ɵɵnextContext(3);e.ɵɵclassMap(t.accordion.collapseIcon),e.ɵɵproperty("ngClass",t.iconClass),e.ɵɵattribute("aria-hidden",!0)}}function S(a,r){if(a&1&&e.ɵɵelement(0,"ChevronDownIcon",11),a&2){let t=e.ɵɵnextContext(3);e.ɵɵproperty("ngClass",t.iconClass),e.ɵɵattribute("aria-hidden",!0)}}function E(a,r){if(a&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,x,1,4,"span",9)(2,S,1,2,"ChevronDownIcon",10),e.ɵɵelementContainerEnd()),a&2){let t=e.ɵɵnextContext(2);e.ɵɵadvance(1),e.ɵɵproperty("ngIf",t.accordion.collapseIcon),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!t.accordion.collapseIcon)}}function w(a,r){if(a&1&&e.ɵɵelement(0,"span",11),a&2){let t=e.ɵɵnextContext(3);e.ɵɵclassMap(t.accordion.expandIcon),e.ɵɵproperty("ngClass",t.iconClass),e.ɵɵattribute("aria-hidden",!0)}}function D(a,r){if(a&1&&e.ɵɵelement(0,"ChevronRightIcon",11),a&2){let t=e.ɵɵnextContext(3);e.ɵɵproperty("ngClass",t.iconClass),e.ɵɵattribute("aria-hidden",!0)}}function k(a,r){if(a&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,w,1,4,"span",9)(2,D,1,2,"ChevronRightIcon",10),e.ɵɵelementContainerEnd()),a&2){let t=e.ɵɵnextContext(2);e.ɵɵadvance(1),e.ɵɵproperty("ngIf",t.accordion.expandIcon),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!t.accordion.expandIcon)}}function H(a,r){if(a&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,E,3,2,"ng-container",3)(2,k,3,2,"ng-container",3),e.ɵɵelementContainerEnd()),a&2){let t=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵproperty("ngIf",t.selected),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!t.selected)}}function F(a,r){}function L(a,r){a&1&&e.ɵɵtemplate(0,F,0,0,"ng-template")}function O(a,r){if(a&1&&(e.ɵɵelementStart(0,"span",12),e.ɵɵtext(1),e.ɵɵelementEnd()),a&2){let t=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵtextInterpolate1(" ",t.header," ")}}function P(a,r){a&1&&e.ɵɵelementContainer(0)}function N(a,r){a&1&&e.ɵɵprojection(0,1,["*ngIf","hasHeaderFacet"])}function K(a,r){a&1&&e.ɵɵelementContainer(0)}function M(a,r){if(a&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,K,1,0,"ng-container",6),e.ɵɵelementContainerEnd()),a&2){let t=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.contentTemplate)}}var j=["*",[["p-header"]]],R=a=>({$implicit:a}),f=a=>({transitionParams:a}),Q=a=>({value:"visible",params:a}),q=a=>({value:"hidden",params:a}),B=["*","p-header"],U=["*"],$=(()=>{class a{el;changeDetector;id;header;headerStyle;tabStyle;contentStyle;tabStyleClass;headerStyleClass;contentStyleClass;disabled;cache=!0;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";iconPos="start";get selected(){return this._selected}set selected(t){this._selected=t,this.loaded||(this._selected&&this.cache&&(this.loaded=!0),this.changeDetector.detectChanges())}headerAriaLevel=2;selectedChange=new d;headerFacet;templates;_selected=!1;get iconClass(){return this.iconPos==="end"?"p-accordion-toggle-icon-end":"p-accordion-toggle-icon"}contentTemplate;headerTemplate;iconTemplate;loaded=!1;accordion;constructor(t,i,n){this.el=i,this.changeDetector=n,this.accordion=t,this.id=A()}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this.contentTemplate=t.template;break;case"header":this.headerTemplate=t.template;break;case"icon":this.iconTemplate=t.template;break;default:this.contentTemplate=t.template;break}})}toggle(t){if(this.disabled)return!1;let i=this.findTabIndex();if(this.selected)this.selected=!1,this.accordion.onClose.emit({originalEvent:t,index:i});else{if(!this.accordion.multiple)for(var n=0;n<this.accordion.tabs.length;n++)this.accordion.tabs[n].selected&&(this.accordion.tabs[n].selected=!1,this.accordion.tabs[n].selectedChange.emit(!1),this.accordion.tabs[n].changeDetector.markForCheck());this.selected=!0,this.loaded=!0,this.accordion.onOpen.emit({originalEvent:t,index:i})}this.selectedChange.emit(this.selected),this.accordion.updateActiveIndex(),this.changeDetector.markForCheck(),t?.preventDefault()}findTabIndex(){let t=-1;for(var i=0;i<this.accordion.tabs.length;i++)if(this.accordion.tabs[i]==this){t=i;break}return t}get hasHeaderFacet(){return this.headerFacet&&this.headerFacet.length>0}onKeydown(t){switch(t.code){case"Enter":case"Space":this.toggle(t),t.preventDefault();break;default:break}}getTabHeaderActionId(t){return`${t}_header_action`}getTabContentId(t){return`${t}_content`}ngOnDestroy(){this.accordion.tabs.splice(this.findTabIndex(),1)}static ɵfac=function(i){return new(i||a)(e.ɵɵdirectiveInject(y(()=>z)),e.ɵɵdirectiveInject(e.ElementRef),e.ɵɵdirectiveInject(e.ChangeDetectorRef))};static ɵcmp=e.ɵɵdefineComponent({type:a,selectors:[["p-accordionTab"]],contentQueries:function(i,n,o){if(i&1&&(e.ɵɵcontentQuery(o,C,4),e.ɵɵcontentQuery(o,T,4)),i&2){let c;e.ɵɵqueryRefresh(c=e.ɵɵloadQuery())&&(n.headerFacet=c),e.ɵɵqueryRefresh(c=e.ɵɵloadQuery())&&(n.templates=c)}},hostAttrs:[1,"p-element"],inputs:{id:"id",header:"header",headerStyle:"headerStyle",tabStyle:"tabStyle",contentStyle:"contentStyle",tabStyleClass:"tabStyleClass",headerStyleClass:"headerStyleClass",contentStyleClass:"contentStyleClass",disabled:"disabled",cache:"cache",transitionOptions:"transitionOptions",iconPos:"iconPos",selected:"selected",headerAriaLevel:"headerAriaLevel"},outputs:{selectedChange:"selectedChange"},ngContentSelectors:B,decls:12,vars:45,consts:[[1,"p-accordion-tab",3,"ngClass","ngStyle"],["role","heading",1,"p-accordion-header"],["role","button",1,"p-accordion-header-link",3,"ngClass","click","keydown"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-accordion-header-text",4,"ngIf"],[4,"ngTemplateOutlet"],["role","region",1,"p-toggleable-content"],[1,"p-accordion-content",3,"ngClass","ngStyle"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-accordion-header-text"]],template:function(i,n){i&1&&(e.ɵɵprojectionDef(j),e.ɵɵelementStart(0,"div",0)(1,"div",1)(2,"a",2),e.ɵɵlistener("click",function(c){return n.toggle(c)})("keydown",function(c){return n.onKeydown(c)}),e.ɵɵtemplate(3,H,3,2,"ng-container",3)(4,L,1,0,null,4)(5,O,2,1,"span",5)(6,P,1,0,"ng-container",6)(7,N,1,0,"ng-content",3),e.ɵɵelementEnd()(),e.ɵɵelementStart(8,"div",7)(9,"div",8),e.ɵɵprojection(10),e.ɵɵtemplate(11,M,2,1,"ng-container",3),e.ɵɵelementEnd()()()),i&2&&(e.ɵɵclassProp("p-accordion-tab-active",n.selected),e.ɵɵproperty("ngClass",n.tabStyleClass)("ngStyle",n.tabStyle),e.ɵɵattribute("data-pc-name","accordiontab"),e.ɵɵadvance(1),e.ɵɵclassProp("p-highlight",n.selected)("p-disabled",n.disabled),e.ɵɵattribute("aria-level",n.headerAriaLevel)("data-p-disabled",n.disabled)("data-pc-section","header"),e.ɵɵadvance(1),e.ɵɵstyleMap(n.headerStyle),e.ɵɵproperty("ngClass",n.headerStyleClass),e.ɵɵattribute("tabindex",n.disabled?null:0)("id",n.getTabHeaderActionId(n.id))("aria-controls",n.getTabContentId(n.id))("aria-expanded",n.selected)("aria-disabled",n.disabled)("data-pc-section","headeraction"),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!n.iconTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",n.iconTemplate)("ngTemplateOutletContext",e.ɵɵpureFunction1(35,R,n.selected)),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!n.hasHeaderFacet),e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",n.headerTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",n.hasHeaderFacet),e.ɵɵadvance(1),e.ɵɵproperty("@tabContent",n.selected?e.ɵɵpureFunction1(39,Q,e.ɵɵpureFunction1(37,f,n.transitionOptions)):e.ɵɵpureFunction1(43,q,e.ɵɵpureFunction1(41,f,n.transitionOptions))),e.ɵɵattribute("id",n.getTabContentId(n.id))("aria-hidden",!n.selected)("aria-labelledby",n.getTabHeaderActionId(n.id))("data-pc-section","toggleablecontent"),e.ɵɵadvance(1),e.ɵɵproperty("ngClass",n.contentStyleClass)("ngStyle",n.contentStyle),e.ɵɵadvance(2),e.ɵɵproperty("ngIf",n.contentTemplate&&(n.cache?n.loaded:n.selected)))},dependencies:()=>[s.NgClass,s.NgIf,s.NgTemplateOutlet,s.NgStyle,_,m],styles:[`@layer primeng{.p-accordion-header-link{cursor:pointer;display:flex;align-items:center;-webkit-user-select:none;user-select:none;position:relative;text-decoration:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}.p-accordion .p-toggleable-content{overflow:hidden}.p-accordion .p-accordion-tab-active>.p-toggleable-content:not(.ng-animating){overflow:inherit}.p-accordion-toggle-icon-end{order:1;margin-left:auto}.p-accordion-toggle-icon{order:0}}
`],encapsulation:2,data:{animation:[b("tabContent",[h("hidden",p({height:"0",visibility:"hidden"})),h("visible",p({height:"*",visibility:"visible"})),u("visible <=> hidden",[g("{{transitionParams}}")]),u("void => *",g(0))])]},changeDetection:0})}return a})(),z=(()=>{class a{el;changeDetector;multiple=!1;style;styleClass;expandIcon;collapseIcon;get activeIndex(){return this._activeIndex}set activeIndex(t){if(this._activeIndex=t,this.preventActiveIndexPropagation){this.preventActiveIndexPropagation=!1;return}this.updateSelectionState()}selectOnFocus=!1;get headerAriaLevel(){return this._headerAriaLevel}set headerAriaLevel(t){typeof t=="number"&&t>0?this._headerAriaLevel=t:this._headerAriaLevel!==2&&(this._headerAriaLevel=2)}onClose=new d;onOpen=new d;activeIndexChange=new d;tabList;tabListSubscription=null;_activeIndex;_headerAriaLevel=2;preventActiveIndexPropagation=!1;tabs=[];constructor(t,i){this.el=t,this.changeDetector=i}onKeydown(t){switch(t.code){case"ArrowDown":this.onTabArrowDownKey(t);break;case"ArrowUp":this.onTabArrowUpKey(t);break;case"Home":t.shiftKey||this.onTabHomeKey(t);break;case"End":t.shiftKey||this.onTabEndKey(t);break}}isInput(t){let{tagName:i}=t.target;return i?.toLowerCase()==="input"}isTextArea(t){let{tagName:i}=t.target;return i?.toLowerCase()==="textarea"}onTabArrowDownKey(t){if(!this.isInput(t)&&!this.isTextArea(t)){let i=this.findNextHeaderAction(t.target.parentElement.parentElement.parentElement);i?this.changeFocusedTab(i):this.onTabHomeKey(t),t.preventDefault()}}onTabArrowUpKey(t){if(!this.isInput(t)&&!this.isTextArea(t)){let i=this.findPrevHeaderAction(t.target.parentElement.parentElement.parentElement);i?this.changeFocusedTab(i):this.onTabEndKey(t),t.preventDefault()}}onTabHomeKey(t){let i=this.findFirstHeaderAction();this.changeFocusedTab(i),t.preventDefault()}changeFocusedTab(t){t&&(l.focus(t),this.selectOnFocus&&this.tabs.forEach((i,n)=>{let o=this.multiple?this._activeIndex.includes(n):n===this._activeIndex;this.multiple?(this._activeIndex||(this._activeIndex=[]),i.id==t.id&&(i.selected=!i.selected,this._activeIndex.includes(n)?this._activeIndex=this._activeIndex.filter(c=>c!==n):this._activeIndex.push(n))):i.id==t.id?(i.selected=!i.selected,this._activeIndex=n):i.selected=!1,i.selectedChange.emit(o),this.activeIndexChange.emit(this._activeIndex),i.changeDetector.markForCheck()}))}findNextHeaderAction(t,i=!1){let n=i?t:t.nextElementSibling,o=l.findSingle(n,"[data-pc-section=\"header\"]");return o?l.getAttribute(o,"data-p-disabled")?this.findNextHeaderAction(o.parentElement.parentElement):l.findSingle(o,"[data-pc-section=\"headeraction\"]"):null}findPrevHeaderAction(t,i=!1){let n=i?t:t.previousElementSibling,o=l.findSingle(n,"[data-pc-section=\"header\"]");return o?l.getAttribute(o,"data-p-disabled")?this.findPrevHeaderAction(o.parentElement.parentElement):l.findSingle(o,"[data-pc-section=\"headeraction\"]"):null}findFirstHeaderAction(){let t=this.el.nativeElement.firstElementChild.childNodes[0];return this.findNextHeaderAction(t,!0)}findLastHeaderAction(){let t=this.el.nativeElement.firstElementChild.childNodes,i=t[t.length-1];return this.findPrevHeaderAction(i,!0)}onTabEndKey(t){let i=this.findLastHeaderAction();this.changeFocusedTab(i),t.preventDefault()}ngAfterContentInit(){this.initTabs(),this.tabListSubscription=this.tabList.changes.subscribe(t=>{this.initTabs()})}initTabs(){this.tabs=this.tabList.toArray(),this.tabs.forEach(t=>{t.headerAriaLevel=this._headerAriaLevel}),this.updateSelectionState(),this.changeDetector.markForCheck()}getBlockableElement(){return this.el.nativeElement.children[0]}updateSelectionState(){if(this.tabs&&this.tabs.length&&this._activeIndex!=null)for(let t=0;t<this.tabs.length;t++){let i=this.multiple?this._activeIndex.includes(t):t===this._activeIndex;i!==this.tabs[t].selected&&(this.tabs[t].selected=i,this.tabs[t].selectedChange.emit(i),this.tabs[t].changeDetector.markForCheck())}}isTabActive(t){return this.multiple?this._activeIndex&&this._activeIndex.includes(t):this._activeIndex===t}getTabProp(t,i){return t.props?t.props[i]:void 0}updateActiveIndex(){let t=this.multiple?[]:null;this.tabs.forEach((i,n)=>{if(i.selected)if(this.multiple)t.push(n);else{t=n;return}}),this.preventActiveIndexPropagation=!0,this.activeIndexChange.emit(t)}ngOnDestroy(){this.tabListSubscription&&this.tabListSubscription.unsubscribe()}static ɵfac=function(i){return new(i||a)(e.ɵɵdirectiveInject(e.ElementRef),e.ɵɵdirectiveInject(e.ChangeDetectorRef))};static ɵcmp=e.ɵɵdefineComponent({type:a,selectors:[["p-accordion"]],contentQueries:function(i,n,o){if(i&1&&e.ɵɵcontentQuery(o,$,5),i&2){let c;e.ɵɵqueryRefresh(c=e.ɵɵloadQuery())&&(n.tabList=c)}},hostAttrs:[1,"p-element"],hostBindings:function(i,n){i&1&&e.ɵɵlistener("keydown",function(c){return n.onKeydown(c)})},inputs:{multiple:"multiple",style:"style",styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",activeIndex:"activeIndex",selectOnFocus:"selectOnFocus",headerAriaLevel:"headerAriaLevel"},outputs:{onClose:"onClose",onOpen:"onOpen",activeIndexChange:"activeIndexChange"},ngContentSelectors:U,decls:2,vars:4,consts:[[3,"ngClass","ngStyle"]],template:function(i,n){i&1&&(e.ɵɵprojectionDef(),e.ɵɵelementStart(0,"div",0),e.ɵɵprojection(1),e.ɵɵelementEnd()),i&2&&(e.ɵɵclassMap(n.styleClass),e.ɵɵproperty("ngClass","p-accordion p-component")("ngStyle",n.style))},dependencies:[s.NgClass,s.NgStyle],encapsulation:2,changeDetection:0})}return a})(),de=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵmod=e.ɵɵdefineNgModule({type:a});static ɵinj=e.ɵɵdefineInjector({imports:[v,_,m,I]})}return a})();export{z as Accordion,de as AccordionModule,$ as AccordionTab};