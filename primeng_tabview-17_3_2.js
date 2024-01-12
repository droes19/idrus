import*as c from"@angular/common";import{isPlatformBrowser as p,CommonModule as T}from"@angular/common";import*as e from"@angular/core";import{forwardRef as w,EventEmitter as d,PLATFORM_ID as y}from"@angular/core";import{PrimeTemplate as _,SharedModule as b}from"primeng/api";import{DomHandler as s}from"primeng/dom";import{ChevronLeftIcon as h}from"primeng/icons/chevronleft";import{ChevronRightIcon as u}from"primeng/icons/chevronright";import{TimesIcon as f}from"primeng/icons/times";import*as m from"primeng/ripple";import{RippleModule as I}from"primeng/ripple";import*as g from"primeng/tooltip";import{TooltipModule as x}from"primeng/tooltip";import{UniqueComponentId as C}from"primeng/utils";function k(n,o){n&1&&e.ɵɵelementContainer(0)}function S(n,o){if(n&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,k,1,0,"ng-container",3),e.ɵɵelementContainerEnd()),n&2){let t=e.ɵɵnextContext(2);e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.contentTemplate)}}function V(n,o){if(n&1&&(e.ɵɵelementStart(0,"div",1),e.ɵɵprojection(1),e.ɵɵtemplate(2,S,2,1,"ng-container",2),e.ɵɵelementEnd()),n&2){let t=e.ɵɵnextContext();e.ɵɵproperty("hidden",!t.selected),e.ɵɵattribute("id",t.tabView.getTabContentId(t.id))("aria-hidden",!t.selected)("aria-labelledby",t.tabView.getTabHeaderActionId(t.id))("data-pc-name","tabpanel"),e.ɵɵadvance(2),e.ɵɵproperty("ngIf",t.contentTemplate&&(t.cache?t.loaded:t.selected))}}var v=["*"],E=["content"],A=["navbar"],O=["prevBtn"],B=["nextBtn"],P=["inkbar"],R=["elementToObserve"];function H(n,o){n&1&&e.ɵɵelement(0,"ChevronLeftIcon"),n&2&&e.ɵɵattribute("aria-hidden",!0)}function D(n,o){}function F(n,o){n&1&&e.ɵɵtemplate(0,D,0,0,"ng-template")}function Q(n,o){if(n&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"button",13,14),e.ɵɵlistener("click",function(){e.ɵɵrestoreView(t);let a=e.ɵɵnextContext();return e.ɵɵresetView(a.navBackward())}),e.ɵɵtemplate(2,H,1,1,"ChevronLeftIcon",15)(3,F,1,0,null,16),e.ɵɵelementEnd()}if(n&2){let t=e.ɵɵnextContext();e.ɵɵattribute("tabindex",t.tabindex)("aria-label",t.prevButtonAriaLabel),e.ɵɵadvance(2),e.ɵɵproperty("ngIf",!t.previousIconTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.previousIconTemplate)}}function L(n,o){if(n&1&&e.ɵɵelement(0,"span",25),n&2){let t=e.ɵɵnextContext(3).$implicit;e.ɵɵproperty("ngClass",t.leftIcon)}}function j(n,o){}function z(n,o){n&1&&e.ɵɵtemplate(0,j,0,0,"ng-template")}function M(n,o){if(n&1&&(e.ɵɵelementStart(0,"span",26),e.ɵɵtemplate(1,z,1,0,null,16),e.ɵɵelementEnd()),n&2){let t=e.ɵɵnextContext(3).$implicit;e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.leftIconTemplate)}}function K(n,o){if(n&1&&e.ɵɵelement(0,"span",27),n&2){let t=e.ɵɵnextContext(3).$implicit;e.ɵɵproperty("ngClass",t.rightIcon)}}function N(n,o){}function $(n,o){n&1&&e.ɵɵtemplate(0,N,0,0,"ng-template")}function W(n,o){if(n&1&&(e.ɵɵelementStart(0,"span",28),e.ɵɵtemplate(1,$,1,0,null,16),e.ɵɵelementEnd()),n&2){let t=e.ɵɵnextContext(3).$implicit;e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.rightIconTemplate)}}function q(n,o){if(n&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,L,1,1,"span",20)(2,M,2,1,"span",21),e.ɵɵelementStart(3,"span",22),e.ɵɵtext(4),e.ɵɵelementEnd(),e.ɵɵtemplate(5,K,1,1,"span",23)(6,W,2,1,"span",24),e.ɵɵelementContainerEnd()),n&2){let t=e.ɵɵnextContext(2).$implicit;e.ɵɵadvance(1),e.ɵɵproperty("ngIf",t.leftIcon&&!t.leftIconTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",t.leftIconTemplate),e.ɵɵadvance(2),e.ɵɵtextInterpolate(t.header),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",t.rightIcon&&!t.rightIconTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",t.rightIconTemplate)}}function U(n,o){n&1&&e.ɵɵelementContainer(0)}function G(n,o){if(n&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"TimesIcon",31),e.ɵɵlistener("click",function(a){e.ɵɵrestoreView(t);let l=e.ɵɵnextContext(3).$implicit,r=e.ɵɵnextContext();return e.ɵɵresetView(r.close(a,l))}),e.ɵɵelementEnd()}n&2&&e.ɵɵproperty("styleClass","p-tabview-close")}function J(n,o){n&1&&e.ɵɵelement(0,"span",32)}function X(n,o){}function Y(n,o){n&1&&e.ɵɵtemplate(0,X,0,0,"ng-template")}function Z(n,o){if(n&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,G,1,1,"TimesIcon",29)(2,J,1,0,"span",30)(3,Y,1,0,null,16),e.ɵɵelementContainerEnd()),n&2){let t=e.ɵɵnextContext(2).$implicit;e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!t.closeIconTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",t.closeIconTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.closeIconTemplate)}}var ee=(n,o)=>({"p-highlight":n,"p-disabled":o});function te(n,o){if(n&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"li",18)(1,"a",19),e.ɵɵlistener("click",function(a){e.ɵɵrestoreView(t);let l=e.ɵɵnextContext().$implicit,r=e.ɵɵnextContext();return e.ɵɵresetView(r.open(a,l))})("keydown",function(a){e.ɵɵrestoreView(t);let l=e.ɵɵnextContext().$implicit,r=e.ɵɵnextContext();return e.ɵɵresetView(r.onTabKeyDown(a,l))}),e.ɵɵtemplate(2,q,7,5,"ng-container",15)(3,U,1,0,"ng-container",16)(4,Z,4,3,"ng-container",15),e.ɵɵelementEnd()()}if(n&2){let t=e.ɵɵnextContext(),i=t.$implicit,a=t.index,l=e.ɵɵnextContext();e.ɵɵclassMap(i.headerStyleClass),e.ɵɵproperty("ngClass",e.ɵɵpureFunction2(19,ee,i.selected,i.disabled))("ngStyle",i.headerStyle),e.ɵɵattribute("data-p-disabled",i.disabled),e.ɵɵadvance(1),e.ɵɵproperty("pTooltip",i.tooltip)("tooltipPosition",i.tooltipPosition)("positionStyle",i.tooltipPositionStyle)("tooltipStyleClass",i.tooltipStyleClass),e.ɵɵattribute("id",l.getTabHeaderActionId(i.id))("aria-controls",l.getTabContentId(i.id))("aria-selected",i.selected)("tabindex",i.disabled||!i.selected?"-1":l.tabindex)("aria-disabled",i.disabled)("data-pc-index",a)("data-pc-section","headeraction"),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!i.headerTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",i.headerTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",i.closable)}}function ie(n,o){if(n&1&&e.ɵɵtemplate(0,te,5,22,"li",17),n&2){let t=o.$implicit;e.ɵɵproperty("ngIf",!t.closed)}}function ne(n,o){n&1&&e.ɵɵelement(0,"ChevronRightIcon"),n&2&&e.ɵɵattribute("aria-hidden",!0)}function ae(n,o){}function le(n,o){n&1&&e.ɵɵtemplate(0,ae,0,0,"ng-template")}function oe(n,o){if(n&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"button",33,34),e.ɵɵlistener("click",function(){e.ɵɵrestoreView(t);let a=e.ɵɵnextContext();return e.ɵɵresetView(a.navForward())}),e.ɵɵtemplate(2,ne,1,1,"ChevronRightIcon",15)(3,le,1,0,null,16),e.ɵɵelementEnd()}if(n&2){let t=e.ɵɵnextContext();e.ɵɵattribute("tabindex",t.tabindex)("aria-label",t.nextButtonAriaLabel),e.ɵɵadvance(2),e.ɵɵproperty("ngIf",!t.nextIconTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.nextIconTemplate)}}var se=n=>({"p-tabview p-component":!0,"p-tabview-scrollable":n}),re=(()=>{class n{el;viewContainer;cd;closable=!1;get headerStyle(){return this._headerStyle}set headerStyle(t){this._headerStyle=t,this.tabView.cd.markForCheck()}get headerStyleClass(){return this._headerStyleClass}set headerStyleClass(t){this._headerStyleClass=t,this.tabView.cd.markForCheck()}cache=!0;tooltip;tooltipPosition="top";tooltipPositionStyle="absolute";tooltipStyleClass;get selected(){return!!this._selected}set selected(t){this._selected=t,this.loaded||this.cd.detectChanges(),t&&(this.loaded=!0)}get disabled(){return!!this._disabled}set disabled(t){this._disabled=t,this.tabView.cd.markForCheck()}get header(){return this._header}set header(t){this._header=t,Promise.resolve().then(()=>{this.tabView.updateInkBar(),this.tabView.cd.markForCheck()})}get leftIcon(){return this._leftIcon}set leftIcon(t){this._leftIcon=t,this.tabView.cd.markForCheck()}get rightIcon(){return this._rightIcon}set rightIcon(t){this._rightIcon=t,this.tabView.cd.markForCheck()}templates;closed=!1;view=null;_headerStyle;_headerStyleClass;_selected;_disabled;_header;_leftIcon;_rightIcon=void 0;loaded=!1;id;contentTemplate;headerTemplate;leftIconTemplate;rightIconTemplate;closeIconTemplate;tabView;constructor(t,i,a,l){this.el=i,this.viewContainer=a,this.cd=l,this.tabView=t,this.id=C()}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this.headerTemplate=t.template;break;case"content":this.contentTemplate=t.template;break;case"righticon":this.rightIconTemplate=t.template;break;case"lefticon":this.leftIconTemplate=t.template;break;case"closeicon":this.closeIconTemplate=t.template;break;default:this.contentTemplate=t.template;break}})}ngOnDestroy(){this.view=null}static ɵfac=function(i){return new(i||n)(e.ɵɵdirectiveInject(w(()=>ce)),e.ɵɵdirectiveInject(e.ElementRef),e.ɵɵdirectiveInject(e.ViewContainerRef),e.ɵɵdirectiveInject(e.ChangeDetectorRef))};static ɵcmp=e.ɵɵdefineComponent({type:n,selectors:[["p-tabPanel"]],contentQueries:function(i,a,l){if(i&1&&e.ɵɵcontentQuery(l,_,4),i&2){let r;e.ɵɵqueryRefresh(r=e.ɵɵloadQuery())&&(a.templates=r)}},hostAttrs:[1,"p-element"],inputs:{closable:"closable",headerStyle:"headerStyle",headerStyleClass:"headerStyleClass",cache:"cache",tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",selected:"selected",disabled:"disabled",header:"header",leftIcon:"leftIcon",rightIcon:"rightIcon"},ngContentSelectors:v,decls:1,vars:1,consts:[["class","p-tabview-panel","role","tabpanel",3,"hidden",4,"ngIf"],["role","tabpanel",1,"p-tabview-panel",3,"hidden"],[4,"ngIf"],[4,"ngTemplateOutlet"]],template:function(i,a){i&1&&(e.ɵɵprojectionDef(),e.ɵɵtemplate(0,V,3,6,"div",0)),i&2&&e.ɵɵproperty("ngIf",!a.closed)},dependencies:[c.NgIf,c.NgTemplateOutlet],encapsulation:2})}return n})(),ce=(()=>{class n{platformId;el;cd;renderer;style;styleClass;controlClose;scrollable;get activeIndex(){return this._activeIndex}set activeIndex(t){if(this._activeIndex=t,this.preventActiveIndexPropagation){this.preventActiveIndexPropagation=!1;return}this.tabs&&this.tabs.length&&this._activeIndex!=null&&this.tabs.length>this._activeIndex&&(this.findSelectedTab().selected=!1,this.tabs[this._activeIndex].selected=!0,this.tabChanged=!0,this.updateScrollBar(t))}selectOnFocus=!1;nextButtonAriaLabel;prevButtonAriaLabel;autoHideButtons=!0;tabindex=0;onChange=new d;onClose=new d;activeIndexChange=new d;content;navbar;prevBtn;nextBtn;inkbar;tabPanels;templates;initialized;tabs;_activeIndex;preventActiveIndexPropagation;tabChanged;backwardIsDisabled=!0;forwardIsDisabled=!1;tabChangesSubscription;nextIconTemplate;previousIconTemplate;resizeObserver;container;list;buttonVisible;elementToObserve;constructor(t,i,a,l){this.platformId=t,this.el=i,this.cd=a,this.renderer=l}ngAfterContentInit(){this.initTabs(),this.tabChangesSubscription=this.tabPanels.changes.subscribe(t=>{this.initTabs()}),this.templates.forEach(t=>{switch(t.getType()){case"previousicon":this.previousIconTemplate=t.template;break;case"nexticon":this.nextIconTemplate=t.template;break}})}ngAfterViewInit(){p(this.platformId)&&this.autoHideButtons&&this.bindResizeObserver()}bindResizeObserver(){this.container=s.findSingle(this.el.nativeElement,"[data-pc-section=\"navcontent\"]"),this.list=s.findSingle(this.el.nativeElement,"[data-pc-section=\"nav\"]"),this.resizeObserver=new ResizeObserver(()=>{this.list.offsetWidth>this.container.offsetWidth?this.buttonVisible=!0:this.buttonVisible=!1,this.updateButtonState(),this.cd.detectChanges()}),this.resizeObserver.observe(this.container)}unbindResizeObserver(){this.resizeObserver.unobserve(this.elementToObserve.nativeElement),this.resizeObserver=null}ngAfterViewChecked(){p(this.platformId)&&this.tabChanged&&(this.updateInkBar(),this.tabChanged=!1)}ngOnDestroy(){this.tabChangesSubscription&&this.tabChangesSubscription.unsubscribe(),this.resizeObserver&&this.unbindResizeObserver()}getTabHeaderActionId(t){return`${t}_header_action`}getTabContentId(t){return`${t}_content`}initTabs(){this.tabs=this.tabPanels.toArray(),!this.findSelectedTab()&&this.tabs.length&&(this.activeIndex!=null&&this.tabs.length>this.activeIndex?this.tabs[this.activeIndex].selected=!0:this.tabs[0].selected=!0,this.tabChanged=!0),this.cd.markForCheck()}onTabKeyDown(t,i){switch(t.code){case"ArrowLeft":this.onTabArrowLeftKey(t);break;case"ArrowRight":this.onTabArrowRightKey(t);break;case"Home":this.onTabHomeKey(t);break;case"End":this.onTabEndKey(t);break;case"PageDown":this.onTabEndKey(t);break;case"PageUp":this.onTabHomeKey(t);break;case"Enter":case"Space":this.open(t,i);break;default:break}}onTabArrowLeftKey(t){let i=this.findPrevHeaderAction(t.target.parentElement),a=s.getAttribute(i,"data-pc-index");i?this.changeFocusedTab(t,i,a):this.onTabEndKey(t),t.preventDefault()}onTabArrowRightKey(t){let i=this.findNextHeaderAction(t.target.parentElement),a=s.getAttribute(i,"data-pc-index");i?this.changeFocusedTab(t,i,a):this.onTabHomeKey(t),t.preventDefault()}onTabHomeKey(t){let i=this.findFirstHeaderAction(),a=s.getAttribute(i,"data-pc-index");this.changeFocusedTab(t,i,a),t.preventDefault()}onTabEndKey(t){let i=this.findLastHeaderAction(),a=s.getAttribute(i,"data-pc-index");this.changeFocusedTab(t,i,a),t.preventDefault()}changeFocusedTab(t,i,a){if(i&&(s.focus(i),i.scrollIntoView({block:"nearest"}),this.selectOnFocus)){let l=this.tabs[a];this.open(t,l)}}findNextHeaderAction(t,i=!1){let a=i?t:t.nextElementSibling;return a?s.getAttribute(a,"data-p-disabled")||s.getAttribute(a,"data-pc-section")==="inkbar"?this.findNextHeaderAction(a):s.findSingle(a,"[data-pc-section=\"headeraction\"]"):null}findPrevHeaderAction(t,i=!1){let a=i?t:t.previousElementSibling;return a?s.getAttribute(a,"data-p-disabled")||s.getAttribute(a,"data-pc-section")==="inkbar"?this.findPrevHeaderAction(a):s.findSingle(a,"[data-pc-section=\"headeraction\"]"):null}findFirstHeaderAction(){let t=this.navbar.nativeElement.firstElementChild;return this.findNextHeaderAction(t,!0)}findLastHeaderAction(){let t=this.navbar.nativeElement.lastElementChild,i=s.getAttribute(t,"data-pc-section")==="inkbar"?t.previousElementSibling:t;return this.findPrevHeaderAction(i,!0)}open(t,i){if(i.disabled){t&&t.preventDefault();return}if(!i.selected){let a=this.findSelectedTab();a&&(a.selected=!1),this.tabChanged=!0,i.selected=!0;let l=this.findTabIndex(i);this.preventActiveIndexPropagation=!0,this.activeIndexChange.emit(l),this.onChange.emit({originalEvent:t,index:l}),this.updateScrollBar(l)}t&&t.preventDefault()}close(t,i){this.controlClose?this.onClose.emit({originalEvent:t,index:this.findTabIndex(i),close:()=>{this.closeTab(i)}}):(this.closeTab(i),this.onClose.emit({originalEvent:t,index:this.findTabIndex(i)}))}closeTab(t){if(!t.disabled){if(t.selected){this.tabChanged=!0,t.selected=!1;for(let i=0;i<this.tabs.length;i++){let a=this.tabs[i];if(!a.closed&&!t.disabled){a.selected=!0;break}}}t.closed=!0}}findSelectedTab(){for(let t=0;t<this.tabs.length;t++)if(this.tabs[t].selected)return this.tabs[t];return null}findTabIndex(t){let i=-1;for(let a=0;a<this.tabs.length;a++)if(this.tabs[a]==t){i=a;break}return i}getBlockableElement(){return this.el.nativeElement.children[0]}updateInkBar(){if(p(this.platformId)&&this.navbar){let t=s.findSingle(this.navbar.nativeElement,"li.p-highlight");if(!t)return;this.inkbar.nativeElement.style.width=s.getWidth(t)+"px",this.inkbar.nativeElement.style.left=s.getOffset(t).left-s.getOffset(this.navbar.nativeElement).left+"px"}}updateScrollBar(t){this.navbar.nativeElement.children[t].scrollIntoView({block:"nearest"})}updateButtonState(){let t=this.content.nativeElement,{scrollLeft:i,scrollWidth:a}=t,l=s.getWidth(t);this.backwardIsDisabled=i===0,this.forwardIsDisabled=i===a-l}onScroll(t){this.scrollable&&this.updateButtonState(),t.preventDefault()}getVisibleButtonWidths(){return[this.prevBtn?.nativeElement,this.nextBtn?.nativeElement].reduce((t,i)=>i?t+s.getWidth(i):t,0)}navBackward(){let t=this.content.nativeElement,i=s.getWidth(t)-this.getVisibleButtonWidths(),a=t.scrollLeft-i;t.scrollLeft=a<=0?0:a}navForward(){let t=this.content.nativeElement,i=s.getWidth(t)-this.getVisibleButtonWidths(),a=t.scrollLeft+i,l=t.scrollWidth-i;t.scrollLeft=a>=l?l:a}static ɵfac=function(i){return new(i||n)(e.ɵɵdirectiveInject(y),e.ɵɵdirectiveInject(e.ElementRef),e.ɵɵdirectiveInject(e.ChangeDetectorRef),e.ɵɵdirectiveInject(e.Renderer2))};static ɵcmp=e.ɵɵdefineComponent({type:n,selectors:[["p-tabView"]],contentQueries:function(i,a,l){if(i&1&&(e.ɵɵcontentQuery(l,re,4),e.ɵɵcontentQuery(l,_,4)),i&2){let r;e.ɵɵqueryRefresh(r=e.ɵɵloadQuery())&&(a.tabPanels=r),e.ɵɵqueryRefresh(r=e.ɵɵloadQuery())&&(a.templates=r)}},viewQuery:function(i,a){if(i&1&&(e.ɵɵviewQuery(E,5),e.ɵɵviewQuery(A,5),e.ɵɵviewQuery(O,5),e.ɵɵviewQuery(B,5),e.ɵɵviewQuery(P,5),e.ɵɵviewQuery(R,5)),i&2){let l;e.ɵɵqueryRefresh(l=e.ɵɵloadQuery())&&(a.content=l.first),e.ɵɵqueryRefresh(l=e.ɵɵloadQuery())&&(a.navbar=l.first),e.ɵɵqueryRefresh(l=e.ɵɵloadQuery())&&(a.prevBtn=l.first),e.ɵɵqueryRefresh(l=e.ɵɵloadQuery())&&(a.nextBtn=l.first),e.ɵɵqueryRefresh(l=e.ɵɵloadQuery())&&(a.inkbar=l.first),e.ɵɵqueryRefresh(l=e.ɵɵloadQuery())&&(a.elementToObserve=l.first)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",controlClose:"controlClose",scrollable:"scrollable",activeIndex:"activeIndex",selectOnFocus:"selectOnFocus",nextButtonAriaLabel:"nextButtonAriaLabel",prevButtonAriaLabel:"prevButtonAriaLabel",autoHideButtons:"autoHideButtons",tabindex:"tabindex"},outputs:{onChange:"onChange",onClose:"onClose",activeIndexChange:"activeIndexChange"},ngContentSelectors:v,decls:14,vars:13,consts:[[3,"ngClass","ngStyle"],[1,"p-tabview-nav-container"],["elementToObserve",""],["class","p-tabview-nav-prev p-tabview-nav-btn p-link","type","button","pRipple","",3,"click",4,"ngIf"],[1,"p-tabview-nav-content",3,"scroll"],["content",""],["role","tablist",1,"p-tabview-nav"],["navbar",""],["ngFor","",3,"ngForOf"],["role","presentation","aria-hidden","true",1,"p-tabview-ink-bar"],["inkbar",""],["class","p-tabview-nav-next p-tabview-nav-btn p-link","type","button","pRipple","",3,"click",4,"ngIf"],[1,"p-tabview-panels"],["type","button","pRipple","",1,"p-tabview-nav-prev","p-tabview-nav-btn","p-link",3,"click"],["prevBtn",""],[4,"ngIf"],[4,"ngTemplateOutlet"],["role","presentation",3,"ngClass","ngStyle","class",4,"ngIf"],["role","presentation",3,"ngClass","ngStyle"],["role","tab","pRipple","",1,"p-tabview-nav-link",3,"pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","click","keydown"],["class","p-tabview-left-icon",3,"ngClass",4,"ngIf"],["class","p-tabview-left-icon",4,"ngIf"],[1,"p-tabview-title"],["class","p-tabview-right-icon",3,"ngClass",4,"ngIf"],["class","p-tabview-right-icon",4,"ngIf"],[1,"p-tabview-left-icon",3,"ngClass"],[1,"p-tabview-left-icon"],[1,"p-tabview-right-icon",3,"ngClass"],[1,"p-tabview-right-icon"],[3,"styleClass","click",4,"ngIf"],["class","tab.closeIconTemplate",4,"ngIf"],[3,"styleClass","click"],[1,"tab.closeIconTemplate"],["type","button","pRipple","",1,"p-tabview-nav-next","p-tabview-nav-btn","p-link",3,"click"],["nextBtn",""]],template:function(i,a){i&1&&(e.ɵɵprojectionDef(),e.ɵɵelementStart(0,"div",0)(1,"div",1,2),e.ɵɵtemplate(3,Q,4,4,"button",3),e.ɵɵelementStart(4,"div",4,5),e.ɵɵlistener("scroll",function(r){return a.onScroll(r)}),e.ɵɵelementStart(6,"ul",6,7),e.ɵɵtemplate(8,ie,1,1,"ng-template",8),e.ɵɵelement(9,"li",9,10),e.ɵɵelementEnd()(),e.ɵɵtemplate(11,oe,4,4,"button",11),e.ɵɵelementEnd(),e.ɵɵelementStart(12,"div",12),e.ɵɵprojection(13),e.ɵɵelementEnd()()),i&2&&(e.ɵɵclassMap(a.styleClass),e.ɵɵproperty("ngClass",e.ɵɵpureFunction1(11,se,a.scrollable))("ngStyle",a.style),e.ɵɵattribute("data-pc-name","tabview"),e.ɵɵadvance(3),e.ɵɵproperty("ngIf",a.scrollable&&!a.backwardIsDisabled&&a.autoHideButtons),e.ɵɵadvance(1),e.ɵɵattribute("data-pc-section","navcontent"),e.ɵɵadvance(2),e.ɵɵattribute("data-pc-section","nav"),e.ɵɵadvance(2),e.ɵɵproperty("ngForOf",a.tabs),e.ɵɵadvance(1),e.ɵɵattribute("data-pc-section","inkbar"),e.ɵɵadvance(2),e.ɵɵproperty("ngIf",a.scrollable&&!a.forwardIsDisabled&&a.buttonVisible))},dependencies:()=>[c.NgClass,c.NgForOf,c.NgIf,c.NgTemplateOutlet,c.NgStyle,g.Tooltip,m.Ripple,f,h,u],styles:[`@layer primeng{.p-tabview-nav-container{position:relative}.p-tabview-scrollable .p-tabview-nav-container{overflow:hidden}.p-tabview-nav-content{overflow-x:auto;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;overscroll-behavior:contain auto}.p-tabview-nav{display:inline-flex;min-width:100%;margin:0;padding:0;list-style-type:none;flex:1 1 auto}.p-tabview-nav-link{cursor:pointer;-webkit-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabview-ink-bar{display:none;z-index:1}.p-tabview-nav-link:focus{z-index:1}.p-tabview-title{line-height:1;white-space:nowrap}.p-tabview-nav-btn{position:absolute;top:0;z-index:2;height:100%;display:flex;align-items:center;justify-content:center}.p-tabview-nav-prev{left:0}.p-tabview-nav-next{right:0}.p-tabview-nav-content::-webkit-scrollbar{display:none}.p-tabview-close{z-index:1}}
`],encapsulation:2,changeDetection:0})}return n})(),Ee=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=e.ɵɵdefineNgModule({type:n});static ɵinj=e.ɵɵdefineInjector({imports:[T,b,x,I,f,h,u,b]})}return n})();export{re as TabPanel,ce as TabView,Ee as TabViewModule};